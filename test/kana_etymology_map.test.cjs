const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');
const { ENTRIES } = require('../kana_phonetic_symbolism.js');

const appPath = path.join(__dirname, '..', 'kana_etymology_map.html');

function createElement() {
  return {
    innerHTML: '', textContent: '', style: {}, className: '', value: '', checked: false,
    title: '', dataset: {},
    classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
    addEventListener() {}, appendChild() {}, remove() {}, focus() {}, blur() {},
    querySelector() { return createElement(); }, querySelectorAll() { return []; },
  };
}

function loadApp(entries = [], storedEntries = null) {
  const source = fs.readFileSync(appPath, 'utf8')
    .match(/<script>\n([\s\S]*?)\n<\/script>/)[1]
    .replace(/\/\/ =========================================================================\n\/\/ BOOT[\s\S]*$/, '');
  const elements = new Map();
  const document = {
    getElementById(id) {
      if (!elements.has(id)) elements.set(id, createElement());
      return elements.get(id);
    },
    querySelector() { return null; },
    querySelectorAll() { return []; },
    addEventListener() {},
    createElement,
    body: { appendChild() {} },
  };
  const storage = new Map();
  if (storedEntries) storage.set('japanese_kana_map_v1', JSON.stringify(storedEntries));
  const sandbox = {
    console, document, localStorage: {
      getItem: key => storage.get(key) || null,
      setItem: (key, value) => storage.set(key, value),
      removeItem: key => storage.delete(key),
    },
    window: {
      KANA_DATA: {
        LAYERS: [
          { id: 'A', name: '生命', color: '#111' },
          { id: 'B', name: '变化', color: '#222' },
          { id: 'O', name: '沉降', color: '#333' },
        ],
        ROOTS: {
          mi: { layer: 'A', kana: 'み (mi)', core: '生命' },
          ha: { layer: 'B', kana: 'は (ha)', core: '显现' },
          shi: { layer: 'O', kana: 'し (shi)', core: '静止' },
          he: { layer: 'O', kana: 'へ (he)', core: '减退' },
        },
        ENTRIES: entries,
      },
      addEventListener() {},
    },
    navigator: {}, indexedDB: undefined,
    setTimeout, clearTimeout, confirm: () => true, prompt: () => '',
  };
  vm.createContext(sandbox);
  vm.runInContext(`${source}\n;globalThis.__testApi = {
    state, init, selectLayer, setSortMode, renderWordsList, renderDetail, findIncompleteEntries, applyCompletions,
    completionMeta: COMPLETION_FIELD_META, taxonomyRoots: TAG_TAXONOMY_ROOTS, routeTagByKeyword,
    setCompletionConfig: value => { completionConfig = value; },
  };`, sandbox);
  return { api: sandbox.__testApi, elements };
}

test('init selects the first layer, its first root, and its first entry', () => {
  const { api } = loadApp([
    { kana: 'みる', kanji: '見る', root: 'mi', layer: 'A', meaning: '看', analysis: '测试', tags: [] },
    { kana: 'はな', kanji: '花', root: 'ha', layer: 'B', meaning: '花', analysis: '测试', tags: [] },
  ]);

  api.init();

  assert.equal(api.state.filter.layer, 'A');
  assert.equal(api.state.filter.root, 'mi');
  assert.equal(api.state.selectedEntryId, 'default-0');
});

test('word list and detail put kanji before a distinct kana reading', () => {
  const { api, elements } = loadApp([]);
  const entry = {
    id: 'flower', kana: 'はな', kanji: '花', roman: 'hana', pron: '[hana]',
    root: 'ha', layer: 'B', meaning: '花', analysis: '测试', tags: [],
  };
  api.state.entries = [entry];
  api.state.selectedEntryId = entry.id;

  api.renderWordsList();
  api.renderDetail();

  assert.match(elements.get('words-list').innerHTML, /花（はな）/);
  assert.match(elements.get('words-list').innerHTML, /\[hana\]/);
  assert.match(elements.get('detail-panel').innerHTML, /detail-word">花（はな）/);
  assert.match(elements.get('detail-panel').innerHTML, /\/hana\//);
  assert.match(elements.get('detail-panel').innerHTML, /\[hana\]/);
  assert.doesNotMatch(elements.get('detail-panel').innerHTML, /\[\[hana\]\]/);

  api.state.entries = [{ ...entry, id: 'legacy-flower', kana: '花', kanji: '花' }];
  api.state.selectedEntryId = 'legacy-flower';
  api.renderWordsList();
  api.renderDetail();

  assert.doesNotMatch(elements.get('words-list').innerHTML, /（花）/);
  assert.match(elements.get('detail-panel').innerHTML, /detail-word">花 /);
});

test('AI completion treats legacy kanji-as-kana values as missing readings', () => {
  const { api } = loadApp([]);
  const entry = { id: 'legacy-flower', kana: '花', kanji: '花', root: 'ha', layer: 'B', meaning: '花', analysis: '测试', tags: [] };
  api.setCompletionConfig({ fields: ['kana'], onlyIfEmpty: true });
  api.state.entries = [entry];

  assert.deepEqual([...api.findIncompleteEntries()], [entry]);

  const updated = api.applyCompletions([entry], {
    results: [{ sourceKana: '花', kana: 'はな' }],
  });

  assert.equal(updated, 1);
  assert.equal(entry.kana, 'はな');
});

test('AI taxonomy uses the 12 official 類・部門 roots', () => {
  const { api } = loadApp([]);

  assert.deepEqual([...api.taxonomyRoots], [
    '体・関係', '体・主体', '体・活動', '体・生産物', '体・自然',
    '用・関係', '用・活動', '用・自然',
    '相・関係', '相・活動', '相・自然', 'その他',
  ]);
  assert.equal(api.routeTagByKeyword('植物'), '体・自然');
  assert.equal(api.routeTagByKeyword('動作'), '用・活動');
  assert.equal(api.routeTagByKeyword('状態'), '相・活動');
  assert.equal(api.routeTagByKeyword('助詞'), 'その他');
});

test('seed entries store pure kana readings separately from kanji spellings', () => {
  const readingsByKanji = new Map(ENTRIES.map(entry => [entry.kanji, entry.kana]));

  assert.equal(ENTRIES.length, 192);
  assert.deepEqual(ENTRIES.filter(entry => /[㐀-鿿豈-﫿]/.test(entry.kana)), []);
  assert.equal(readingsByKanji.get('見る'), 'みる');
  assert.equal(readingsByKanji.get('花'), 'はな');
  assert.equal(readingsByKanji.get('町'), 'まち');
  assert.equal(readingsByKanji.get('切符'), 'きっぷ');
});

test('init migrates saved default entries that still use kanji as kana', () => {
  const entries = [
    { kana: 'みる', kanji: '見る', root: 'mi', layer: 'A', meaning: '看', analysis: '测试', tags: [] },
    { kana: 'はな', kanji: '花', root: 'ha', layer: 'B', meaning: '花', analysis: '测试', tags: [] },
  ];
  const { api } = loadApp(entries, [{
    id: 'default-1', kana: '花', kanji: '花', root: 'ha', layer: 'B', meaning: '花', analysis: '测试', tags: [],
  }]);

  api.init();

  assert.equal(api.state.entries[0].kana, 'はな');
});

test('selecting a layer picks the first displayed root and word', () => {
  const entries = [
    { id: 'shi', kana: 'しずか', kanji: '静か', root: 'shi', layer: 'O', meaning: '安静', analysis: '测试', tags: [] },
    { id: 'he-later', kana: 'へる', kanji: '減る', root: 'he', layer: 'O', meaning: '减少', analysis: '测试', tags: [] },
    { id: 'he-first', kana: 'へだたる', kanji: '隔たる', root: 'he', layer: 'O', meaning: '隔开', analysis: '测试', tags: [] },
  ];
  const { api } = loadApp(entries);
  api.state.entries = entries;

  api.setSortMode('roman');
  api.selectLayer('O');

  assert.equal(api.state.filter.root, 'he');
  assert.equal(api.state.selectedEntryId, 'he-first');
});
