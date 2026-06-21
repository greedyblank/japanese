// =========================================================================
// 日语音义地图数据 · Kana Phonetic-Symbolism Map Data
// =========================================================================
// 数据来源：用户整理的 A-R 层音义地图（基于古和语语音语义学）
//
// 结构说明：
//   LAYERS  : 18 个语义层级（A 生命 → R 特殊拍）
//   ROOTS   : 每个音根的核心语义、深层解析、代表词
//   ENTRIES : 具体词条（kana / root / layer / meaning / analysis / tags）
// =========================================================================

// =========================================================================
// 层级定义
// =========================================================================
const LAYERS = [
  { id:'A', name:'生命与存在层',   desc:'最底层、最古老 · 大和词的根',           color:'#10b981' },
  { id:'B', name:'显现与变化层',   desc:'生命如何"动起来"',                       color:'#06b6d4' },
  { id:'C', name:'感觉与评价层',   desc:'主观世界',                               color:'#8b5cf6' },
  { id:'D', name:'结构辅助层',     desc:'关系与边界',                             color:'#6366f1' },
  { id:'E', name:'接触与操控层',   desc:'身体作为工具',                           color:'#0ea5e9' },
  { id:'F', name:'虚实与间隙层',   desc:'日本美学核心 · 间与暗',                  color:'#a855f7' },
  { id:'G', name:'能量与根源层',   desc:'光、气、根 · 不可见的力量',              color:'#f59e0b' },
  { id:'H', name:'流动与循环层',   desc:'时间与自然的韵律 · R 行 + W 行',         color:'#14b8a6' },
  { id:'I', name:'紧缩与凝聚层',   desc:'生命力的实体化 · T 行 + N 行',           color:'#ef4444' },
  { id:'J', name:'直进与净化层',   desc:'S 行的补完 · 直线行进与透彻',            color:'#3b82f6' },
  { id:'K', name:'氛围与隐微层',   desc:'K 行 + H 行补完 · 气息与飘忽',           color:'#64748b' },
  { id:'L', name:'深渊与包含层',   desc:'M 行 + 元音补完 · 无、诞生、巨大',       color:'#7c3aed' },
  { id:'M', name:'萌发与聚焦层',   desc:'生命的破局与显现点',                     color:'#ec4899' },
  { id:'N', name:'舒展与衍生层',   desc:'核心元音 + Y 行补完',                    color:'#f43f5e' },
  { id:'O', name:'沉降与消解层',   desc:'S 行 + H 行补完 · 能量静止与衰减',       color:'#6b7280' },
  { id:'P', name:'质量与重态层',   desc:'浊化带来物理性质突变',                   color:'#dc2626' },
  { id:'Q', name:'扭曲与压缩层',   desc:'拗音的引入',                             color:'#9333ea' },
  { id:'R', name:'时空与张力层',   desc:'特殊拍：拨音 / 促音 / 长音',             color:'#0891b2' },
];

// =========================================================================
// 音根定义 · ROOTS
// =========================================================================
const ROOTS = {
  // ===== A 生命与存在层 =====
  'mi': { layer:'A', kana:'み (mi)',  core:'已成形的生命 / 可被感知的本体',
    deep:'核心语义：生命、实体、水分。在原始和语中与"身(身体)"、"実(果实/实体)"、"海(うみ)"同源。代表具有实质感、能孕育生命的力量。',
    examples:['身 (み)','実 (み)','味 (み)','美 (み)','見る (みる)','海 (うみ)'] },
  'na': { layer:'A', kana:'な (na)',  core:'自然存在 / 不被干预',
    deep:'未加工、自然被指认的存在、尚未确定。代表事物在人之先的"本来面目"。',
    examples:['生 (なま)','名 (な)','何 (なに)','成る (なる)','七 (なな)'] },
  'ta': { layer:'A', kana:'た (ta)',  core:'供养 / 支撑生命循环',
    deep:'与"手 (te)"同源（古语 ta 的变体）。代表承担、立起、供养被生命依赖之物。',
    examples:['食べる (たべる)','田 (た)','民 (たみ)','保つ (たもつ)','建つ (たつ)','手 (て)'] },

  // ===== B 显现与变化层 =====
  'ha': { layer:'B', kana:'は (ha)',  core:'内部 → 外部的显现',
    deep:'古和语中含"边缘、末端、表面、突出部"的意象（葉/歯/端 同源）。时空一体：空间边缘=端っこ；时间边缘=初/始（はじ）。因此"开始"发音为 haji。',
    examples:['花 (はな)','鼻 (はな)','話す (はなす)','放つ (はなつ)','晴れる (はれる)','葉 (は)','歯 (は)','端 (は)','初め (はじめ)'] },
  'ka': { layer:'B', kana:'か (ka)',  core:'变化点 / 边界 / 力',
    deep:'双重语义：(1) 场所、固定状态（ありか/所在之地、すみか/栖息之所、しずか/安静的状态）；(2) 覆盖、外壳、上方、添加（皮 kawa、上 kami、壳 kara、加える kuwaeru）。',
    examples:['変わる (かわる)','切る (きる)','門 (かど)','火 (ひ)','皮 (かわ)','上 (かみ)','壳 (から)','静か (しずか)'] },
  'sa': { layer:'B', kana:'さ (sa)',  core:'分离 / 操作 / 清晰化',
    deep:'/s/ 音带"尖端、边缘、划分"含义（先 saki、狭み sami、境界 sakai、榊 sakaki）。Saru="那样(sa)存在/移动(ru)"，与 Kuru 是一对反义词。',
    examples:['刺す (さす)','指す (さす)','裂く (さく)','冷ます (さます)','咲く (さく)','先 (さき)','境 (さかい)'] },

  // ===== C 感觉与评价层 =====
  'ya': { layer:'C', kana:'や (ya)',  core:'柔和 / 非对抗 / 扩散',
    deep:'古日语中表示"某种状态正在模糊地展现或弥漫"（もや/雾霾、ぼんやり/发呆、やや/稍微）。像给事物加柔光滤镜的薄纱。[感官词根]+や(弥漫)+か(定型)="某种特质向四周散发并形成鲜明氛围"。',
    examples:['易しい (やさしい)','柔らかい (やわらかい)','痩せる (やせる)','矢 (や)','八 (や)'] },
  'i':  { layer:'C', kana:'い (i)',   core:'主观 / 精细 / 判断 · 当下 存在',
    deep:'元音 i 带有"生命、鲜活、极近、存在"的语义色彩。息 (iki)、居る (iru)、行く (iku)、此 (i，古语近称"这")。常作为"存在、生命、此地"的词根。',
    examples:['良い (いい)','小さい (ちいさい)','息 (いき)','居る (いる)','行く (いく)','此 (これ，古)'] },
  'u':  { layer:'C', kana:'う (u)',   core:'过程 / 持续 / 未完成',
    deep:'元音 u 表示动作的进行态与未完成性。',
    examples:['行く (いく)','生きる (いきる)','動く (うごく)','生む (うむ)','浮かぶ (うかぶ)'] },

  // ===== D 结构辅助层 =====
  'mo': { layer:'D', kana:'も (mo)',  core:'聚合 / 覆盖 / 包含',
    deep:'/m/ 音系带"包容、聚集、内敛、深沉"的物理体感。元音 /o/ 是圆唇后元音带"广阔、笼罩"之感。/m/+/o/ 结合形成"将外部事物包裹进来、囊括其中"的意象。这就是「も」表示"也、都"的根本来源。',
    examples:['物 (もの)','守る (まもる)','群れ (むれ)','盛る (もる)','森 (もり)','持つ (もつ)','重い (おもい)','思い (おもい)'] },
  'ku': { layer:'D', kana:'く (ku)',  core:'进入 / 摄取 / 潜入',
    deep:'趋向性的动词词尾。表示向内部、向此处的运动。',
    examples:['来る (くる)','食う (くう)','崩れる (くずれる)','下る (くだる)','暮れる (くれる)'] },
  'to': { layer:'D', kana:'と (to)',  core:'边界 / 门槛 / 内外之分',
    deep:'表示内外之间的界限、连接点。',
    examples:['戸 (と)','外 (と)','年 (とし)','時 (とき)','途 (と)','遂に (ついに)'] },

  // ===== E 接触与操控层 =====
  'te': { layer:'E', kana:'て (te)',  core:'手 / 方向 / 手段',
    deep:'古语 ta 的变体，与"ta 供养层"相连。用手去触及、指向、供奉。',
    examples:['手 (て)','照らす (てらす)','手向ける (たむける)','峠 (とうげ)','果て (はて)'] },
  'ashi':{layer:'E', kana:'あし (ashi)', core:'足 / 接触地面 / 奔跑',
    deep:'a (接头词) + shi (止/底)，或 so (奔跑)。',
    examples:['足 (あし)','走る (はしる)','底 (そこ)','朝 (あさ)'] },
  'ko': { layer:'E', kana:'こ (ko)',  core:'凝固 / 个体化 / 滚动',
    deep:'koro-koro 是滚动的、不稳定的核心。个体从群体中凝聚出来。',
    examples:['子 (こ)','凝る (こる)','心 (こころ)','此処 (ここ)','声 (こえ)','氷 (こおり)'] },

  // ===== F 虚实与间隙层（日本美学核心）=====
  'ma': { layer:'F', kana:'ま (ma)',  core:'真 / 满 / 空间 / 停顿',
    deep:'日语最神圣的音之一。代表纯粹与实在。也代表"目(眼)"，古语中"目"除读め(me)外也保留ま(ma)音（如まぶた/眼睑、まばたき/眨眼）。',
    examples:['真 (ま)','間 (ま)','待つ (まつ)','目 (め)','前 (まえ)','真心 (まごころ)','真っ直ぐ (まっすぐ)'] },
  'yo': { layer:'F', kana:'よ (yo)',  core:'避开 / 弯曲 / 夜晚 / 异界',
    deep:'与"直 (ji)"相对。代表视线无法到达、弯曲、非直线、异界。',
    examples:['夜 (よる)','黄泉 (よみ)','避ける (よける)','弱い (よわい)','呼ぶ (よぶ)','世 (よ)'] },
  'utsu':{layer:'F', kana:'うつ (utsu)', core:'内侧 / 虚空 / 包含',
    deep:'向物体内部施力；内部积压。本质是"内容"的移动。',
    examples:['内 (うち)','打つ (うつ)','鬱 (うつ)','写す (うつす)','移す (うつす)','空 (うつろ)','現す (うつす，古)'] },

  // ===== G 能量与根源层 =====
  'ki': { layer:'G', kana:'き (ki)',  core:'气 / 隐形能量 / 发生源',
    deep:'看不见的能量。「にぎ」代表事物饱满、丰富、充满活力与生机的状态。',
    examples:['気 (き)','木 (き)','聞く (きく)','来る (くる)','効く (きく)','機 (き)','記 (き)'] },
  'hi': { layer:'G', kana:'ひ (hi)',  core:'日 / 火 / 干燥 / 灵性',
    deep:'上古日语发音近 pi，具有尖锐、干燥、高能量的意象。',
    examples:['日 (ひ)','火 (ひ)','干す (ひす)','人 (ひと)','東 (ひがし)','氷 (こおり)'] },
  'ne': { layer:'G', kana:'ね (ne)',  core:'根 / 声音 / 睡眠 / 粘性',
    deep:'古代认为声音发自大地或喉根。休息即回归根部。',
    examples:['根 (ね)','音 (ね)','寝る (ねる)','練る (ねる)','値 (ね)','猫 (ねこ)'] },

  // ===== H 流动与循环层 =====
  'ra': { layer:'H', kana:'ら (ra)',  core:'流动 / 卷动 / 被动 / 复数',
    deep:'古和语中的复数接尾词（彼ら kare-ra）。表示"面"或"复数集合体"，而非一个点。R 行本土大和词很少以此作词头，更多代表"被动流转"或"动态圆环"。',
    examples:['流る (ながる)','羅 (ら)','螺旋 (らせん)','呂 (ろ)','彼ら (かれら)'] },
  'wa': { layer:'H', kana:'わ (wa)',  core:'环 / 和 / 整体 / 自身',
    deep:'圆环、调和、无棱角。自我在此意为"完满的圆"，不同于主观的 i。',
    examples:['輪 (わ)','和 (わ)','我 (われ)','沸く (わく)','話 (はなし)','別れる (わかれる)'] },
  'meguri':{layer:'H', kana:'めぐ (meguri)', core:'回旋 / 巡游',
    deep:'ma (圆) + wa (环) + ru (流)。循环往复的恩赐非单向给予。',
    examples:['回る (まわる)','巡る (めぐる)','恵み (めぐみ)','巡る (めぐる)'] },
  'ri': { layer:'H', kana:'り (ri)',  core:'锐利 / 持续的刻画 / 剥离的进行态',
    deep:'/r/ 流动 + /i/ 当下/尖锐 → 连续不断、细密且带切割感的流动。',
    examples:['削り (けずり)','散り (ちり)','縁 (ゆかり)','完了助动词「り」(古)'] },
  're': { layer:'H', kana:'れ (re)',  core:'游离 / 剥离 / 客体化 / 自然而然',
    deep:'/r/ 流动与被动 + /e/ 向外的分化与结果 → 顺着时间流势脱离主干，成为可见的独立状态。',
    examples:['これ/それ/あれ','離れる (はなれる)','割れ (われ)','切れ (きれ)','枯れる (かれる)','群れ (むれ)','〜れる (受身/自発)'] },

  // ===== I 紧缩与凝聚层 =====
  'chi':{ layer:'I', kana:'ち (chi)', core:'灵力 / 血液 / 浓缩 · 微小碎裂',
    deep:'双重语义：(1) 古语 ti 代表生命能量极度浓缩，核心语义是"路(道路)/地(土地)"或方向与神灵后缀（いのち Inochi、をろち Orochi）；(2) /chi/ 是破擦音，舌尖抵上颚气流挤过产生"细微、摩擦、碎裂"的物理实在感（塵/散る/ちまちま）。',
    examples:['血 (ち)','乳 (ちち)','地 (ち)','力 (ちから)','近い (ちかい)','塵 (ちり)','散る (ちる)','命 (いのち)','町 (まち)'] },
  'tsu':{ layer:'I', kana:'つ (tsu)', core:'连接点 / 唾液 / 传递',
    deep:'像念珠一样连在一起。水陆连接点、手中液体、连接手与地的支点。',
    examples:['津 (つ)','唾 (つば)','続く (つづく)','伝える (つたえる)','杖 (つえ)','月 (つき)','妻 (つま)'] },
  'ni': { layer:'I', kana:'に (ni)',  core:'粘着 / 重负 / 潜藏',
    deep:'助词「に」与断定助动词「なり」(ni+ari→nari) 同源，天生带着"存在、断定、不可动摇的状态"基因。空间认知逻辑：「に」是"坐标大头针"，静态归属。古语中常与"柔软、细腻、饱满"相关（和毛 niko-ge）。',
    examples:['荷 (に)','煮る (にる)','沼 (ぬま)','主 (ぬし)','肉 (にく)','虹 (にじ)'] },

  // ===== J 直进与净化层 =====
  'su': { layer:'J', kana:'す (su)',  core:'笔直 / 纯粹 / 无阻碍 · 清澈完结安定',
    deep:'事物趋于平静、落脚、清澈、安定下来。"清澈、无杂质、平静的完结状态"。浊音「ず (Zu)」赋予"重量感、停滞感、稳定性"。',
    examples:['素 (す)','砂 (すな)','澄む (すむ)','進む (すすむ)','過ぎる (すぎる)','済む (すむ)','住む (すむ)','座る (すわる)'] },
  'se': { layer:'J', kana:'せ (se)',  core:'狭窄 / 急流 / 迫近',
    deep:'空间压缩，水流变窄处、身体后方不可见的迫近面。',
    examples:['瀬 (せ)','背 (せ)','狭い (せまい)','攻める (せめる)','迫る (せまる)','関 (せき)'] },

  // ===== K 氛围与隐微层 =====
  'ke': { layer:'K', kana:'け (ke)',  core:'异样 / 气息 / 感觉',
    deep:'某种感觉的迹象、身体发出的细微物、难以名状的非日常感。',
    examples:['気配 (けはい)','毛 (け)','怪 (け)','化け物 (ばけもの)','枯れる (かれる)','家 (いえ，古け)'] },
  'fu': { layer:'K', kana:'ふ (fu)',  core:'吹气 / 膨胀 / 模糊 · 反复',
    deep:'气息、风、飘动（吹く/風/振る）。动词后缀表示动作反反复复。同源词：ぶらぶら、ふらふら。',
    examples:['吹く (ふく)','振る (ふる)','舟 (ふね)','穂 (ほ)','頬 (ほほ)','降る (ふる)','古い (ふるい)','深い (ふかい)'] },

  // ===== L 深渊与包含层 =====
  'mu': { layer:'L', kana:'む (mu)',  core:'闭合 / 孕育 / 模糊',
    deep:'源自古和语「群れる (むれる)」意为聚集、成群。/mu/ 闭口音带"密集、内聚"的压力感。',
    examples:['産す (むす)','結ぶ (むすぶ)','虫 (むし)','室 (むろ)','眠る (ねむる)','無い (ない，古む)','夢 (ゆめ)'] },
  'o':  { layer:'L', kana:'お (o)',   core:'巨大 / 笼罩 / 敬畏',
    deep:'规模广阔、盖住、被笼罩的深处。面对巨大未知时的颤抖。',
    examples:['大 (おお)','覆う (おおう)','奥 (おく)','恐れる (おそれる)','重い (おもい)','斧 (おの)','雄 (お)'] },

  // ===== M 萌发与聚焦层 =====
  'me': { layer:'M', kana:'め (me)',  core:'萌发 / 焦点 / 阴性母体',
    deep:'/m/ 内敛的生命体 + /e/ 向外的分化与延伸 → 内部生命突破表层、向外指认的"端点"。词根是眼睛的「目(me)」，作为后缀把抽象空间具象化为特定"点"或"缝隙"。',
    examples:['芽 (め)','目 (め)','女・雌 (め)','愛でる (めでる)','珍しい (めずらしい)','境目 (さかいめ)','折り目 (おりめ)'] },

  // ===== N 舒展与衍生层 =====
  'a':  { layer:'N', kana:'あ (a)',   core:'敞开 / 明亮 / 显现的起点',
    deep:'开口度最大的元音，代表向外的完全开放、光与自我。',
    examples:['明 (あ)','明かり (あかり)','赤 (あか)','吾/我 (あ)','上がる (あがる)','開く (あく)','秋 (あき)'] },
  'e':  { layer:'N', kana:'え (e)',   core:'分化 / 延伸 / 获得',
    deep:'由 a 向 i 过渡的元音，表示从主干分化出去的末端或触及。',
    examples:['枝 (え)','得る (える)','笑む (えむ)','選ぶ (えらぶ)','絵 (え)','江 (え)'] },
  'yu': { layer:'N', kana:'ゆ (yu)',  core:'弛缓 / 摇晃 / 释放紧张',
    deep:'词根代表"摇曳、流逝、生命气息的延伸"（ゆらゆら、湯/Yu 热气、息/Yuki 呼吸）。',
    examples:['湯 (ゆ)','緩む (ゆるむ)','揺れる (ゆれる)','許す (ゆるす)','行く (ゆく，古)','雪 (ゆき)'] },

  // ===== O 沉降与消解层 =====
  'shi':{ layer:'O', kana:'し (shi)', core:'静止 / 沉降 / 终结',
    deep:'/sh/ 是摩擦音带"嘘(shh)"的安静感。常与微风、气息相关，也常与"下方、贴近地面"的概念关联。气息绵长收束，带来安静与向下的重力感。',
    examples:['静か (しずか)','下 (した)','沈む (しずむ)','死 (し)','知る (しる)','潮 (しお)','塩 (しお)','白い (しろい)'] },
  'he': { layer:'O', kana:'へ (he)',  core:'边缘 / 减退 / 隔离',
    deep:'事物的最外沿、即将脱离本体的边界。数量/体积/能量的向外流失与衰退。',
    examples:['辺 (へ)','減る (へる)','隔たる (へだたる)','経る (へる)','入る (はいる，古へ)'] },

  // ===== P 质量与重态层 =====
  'no': { layer:'P', kana:'の (no)',  core:'平坦 / 延伸 / 覆盖面',
    deep:'二维空间的平铺扩散。平坦无阻碍的开阔土地。',
    examples:['野 (の)','延びる (のびる)','乗る (のる)','宣る (のる)','希 (のどか)','農 (のう)'] },
  'wo': { layer:'P', kana:'を (wo)',  core:'线 / 尾端 / 持续的细流',
    deep:'古语中 /wo/ 带有细长、连续不断却即将结束的意象。一维的线条延续。',
    examples:['尾 (お)','緒 (お)','終わる (おわる)','丘 (おか)','斧 (おの)'] },

  // ===== Q 扭曲与压缩层 =====
  'daku':{layer:'Q', kana:'濁音 (ga/za/da/ba)', core:'重力 / 粗糙 / 浑浊 / 巨量',
    deep:'在清音基础上增加声带振动，带来"粘滞、沉重、粗糙、负面或巨大"的意象。K(轻快变化)→G(沉重阻滞)；S(顺滑分离)→Z(粗糙摩擦)；T(轻巧接触)→D(沉重打击)；H(轻柔显现)→B(剧烈爆裂)。',
    examples:['ぎらぎら (刺眼)','ざらざら (粗糙)','どんどん (砸门)','ばらばら (破碎)','重い (おもい)','濁る (にごる)'] },
  'handaku':{layer:'Q', kana:'半濁音 (pa/pi/pu/pe/po)', core:'破裂 / 弹跳 / 原始生命力',
    deep:'上古日语的 H 行其实发 P 音，它是大和词最古老的"爆破层"。',
    examples:['ぱんぱん (爆开)','ぽんぽん (反弹)','ぴかぴか (闪光)','屁 (へ)','屁理屈 (へりくつ)'] },

  // ===== R 拗音 + 特殊拍 =====
  'yau':{ layer:'R', kana:'拗音 (kya/nya/shu...)', core:'扭曲 / 粘黏 / 混沌 / 复杂态',
    deep:'/y/ 音的强行楔入，打破原本一个辅音配一个元音的平稳，带来空间的扭曲与力量的压缩。',
    examples:['くちゃくちゃ (揉捏)','ぐにゃぐにゃ (扭曲)','しゅっと (压缩喷射)','今日 (きょう)','東京 (とうきょう)'] },
  'n':  { layer:'R', kana:'ん (n)',   core:'拨音 · 内聚 / 蓄力 / 共鸣',
    deep:'闭上口腔，让声音在鼻腔内回荡，不向外释放。能量在内部的堆积与回旋。',
    examples:['踏ん張る (ふんばる)','本人 (ほんにん)','本 (ほん)','音 (おと)','山 (やま)'] },
  'sokuon':{layer:'R', kana:'っ (sokuon)', core:'促音 · 屏息 / 阻断 / 顿挫',
    deep:'气流突然被掐断，形成一个无声的"微型黑洞"。爆发前的极度紧张与停顿，像拉满弓弦的瞬间。',
    examples:['はっと (惊觉)','きっと (一定)','まっすぐ (笔直)','やっぱり (果然)','切符 (きっぷ)'] },
  'chouon':{layer:'R', kana:'ー (chouon)', core:'长音 · 延展 / 弛缓 / 惯性',
    deep:'不改变口型，纯粹拉长元音的时间轴。状态的无限拉长与释放，解除紧张感。',
    examples:['ぼーっと (涣散)','コーヒー (coffee)','お母さん (おかあさん)','通り (とおり)'] },
};

// =========================================================================
// 词条 · ENTRIES
// =========================================================================
// 字段：
//   kana    : 纯假名读音（历史种子已回填）
//   kanji   : 汉字写法（无则留空）
//   root    : 所属音根（与 ROOTS key 一致）
//   layer   : 所属层（与 LAYERS id 一致）
//   meaning : 中文释义
//   analysis: 语音语义分析（20-80 字）
//   tags    : 1-3 个语义/语法标签
// =========================================================================
const ENTRIES = [
  // ===== A 生命与存在层 =====
  { kana:'みる',   kanji:'見る',   root:'mi',  layer:'A', meaning:'看',           analysis:'mi (生命/感知) + ru (流向此处) → 使生命状态进入感知。', tags:['动词','感知'] },
  { kana:'み',     kanji:'身',     root:'mi',  layer:'A', meaning:'身体；本人',   analysis:'mi 的最直接具象：可被感知的生命主体。', tags:['名词','身体'] },
  { kana:'み',     kanji:'実',     root:'mi',  layer:'A', meaning:'果实；真实',   analysis:'mi 的成熟结果态：生命孕育出的实质。', tags:['名词'] },
  { kana:'あじ',     kanji:'味',     root:'mi',  layer:'A', meaning:'味道；滋味',   analysis:'mi 的感官体验面：生命通过味觉被感知。', tags:['名词','感官'] },
  { kana:'び',     kanji:'美',     root:'mi',  layer:'A', meaning:'美',           analysis:'mi 的完成态正向评价：生命达到圆满状态时的赞美。', tags:['形容动词','评价'] },
  { kana:'うみ',     kanji:'海',     root:'mi',  layer:'A', meaning:'海',           analysis:'u (包藏) + mi (生命实体) → 孕育生命的广阔水体。', tags:['名词'] },
  { kana:'なま',     kanji:'生',     root:'na',  layer:'A', meaning:'生的；未加工', analysis:'na 的最素朴状态：尚未被人为干预的自然存在。', tags:['名词','形容动词'] },
  { kana:'な',     kanji:'名',     root:'na',  layer:'A', meaning:'名字',         analysis:'na 被指认的存在：自然事物获得标识。', tags:['名词'] },
  { kana:'なに',     kanji:'何',     root:'na',  layer:'A', meaning:'什么',         analysis:'na 的不确定面：尚未被指认的存在。', tags:['代词'] },
  { kana:'なる',   kanji:'成る',   root:'na',  layer:'A', meaning:'成为；变成',   analysis:'na 的自然变化结果：事物顺其自然地到达某种状态。', tags:['动词'] },
  { kana:'たべる', kanji:'食べる', root:'ta',  layer:'A', meaning:'吃',           analysis:'ta 供养生命：将外部食物转化为生命能量。', tags:['动词','二段'] },
  { kana:'た',     kanji:'田',     root:'ta',  layer:'A', meaning:'水田',          analysis:'ta 的生命来源：孕育稻米即孕育民。', tags:['名词'] },
  { kana:'たみ',     kanji:'民',     root:'ta',  layer:'A', meaning:'民众',         analysis:'ta + mi (生命) → 被田地供养的群体。', tags:['名词'] },
  { kana:'たもつ',   kanji:'保つ',   root:'ta',  layer:'A', meaning:'维持；保持',   analysis:'ta 的承担延续：使状态不至于崩解。', tags:['动词'] },
  { kana:'たつ',   kanji:'建つ',   root:'ta',  layer:'A', meaning:'建起；竖立',   analysis:'ta 的立起：承担重量向上立起。', tags:['动词'] },

  // ===== B 显现与变化层 =====
  { kana:'はな',     kanji:'花',     root:'ha',  layer:'B', meaning:'花',           analysis:'ha 的生命外显：植物生命通过花展现于外。', tags:['名词'] },
  { kana:'はな',     kanji:'鼻',     root:'ha',  layer:'B', meaning:'鼻',           analysis:'ha 的呼吸出口：生命气息外显的通道。', tags:['名词','身体'] },
  { kana:'はなす',   kanji:'話す',   root:'ha',  layer:'B', meaning:'说；讲',       analysis:'ha 的内在信息放出：内在思想向外释放。', tags:['动词'] },
  { kana:'はなつ',   kanji:'放つ',   root:'ha',  layer:'B', meaning:'放；释放',     analysis:'ha 的向外释放动作的纯粹化。', tags:['动词'] },
  { kana:'はれる', kanji:'晴れる', root:'ha',  layer:'B', meaning:'放晴',         analysis:'ha 的状态展开：云雾散开，天空明朗。', tags:['动词','气象'] },
  { kana:'は',     kanji:'葉',     root:'ha',  layer:'B', meaning:'叶',           analysis:'ha 的"边缘、末端"：树的边缘即叶。', tags:['名词'] },
  { kana:'は',     kanji:'歯',     root:'ha',  layer:'B', meaning:'牙',           analysis:'ha 的骨骼突出端：骨的边缘即齿。', tags:['名词','身体'] },
  { kana:'はじめ',   kanji:'初め',   root:'ha',  layer:'B', meaning:'开始；起源',   analysis:'ha + ji (状态/方向) → 时间的边缘就是起点。与"端"同源。', tags:['名词'] },
  { kana:'かわる', kanji:'変わる', root:'ka',  layer:'B', meaning:'变化；改变',   analysis:'ka 的变化点：状态从一个稳态转向另一个。', tags:['动词'] },
  { kana:'かど',     kanji:'門',     root:'ka',  layer:'B', meaning:'门；大门',     analysis:'ka 的空间节点：内外之间的边界点（かど→門）。', tags:['名词'] },
  { kana:'かわ',     kanji:'皮',     root:'ka',  layer:'B', meaning:'皮；表皮',     analysis:'ka 的"覆盖在表面"：肉体表面的覆盖物。', tags:['名词'] },
  { kana:'かみ',     kanji:'上',     root:'ka',  layer:'B', meaning:'上；上方',     analysis:'ka 的"位置在上面"（かみ）：与神、头发、上座同音。', tags:['名词'] },
  { kana:'しずか',   kanji:'静か',   root:'ka',  layer:'B', meaning:'安静',         analysis:'shi (静) + zu (浊滞) + ka (固定状态) → 把动态钉在安静的状态里。', tags:['形容动词'] },
  { kana:'さす',   kanji:'刺す',   root:'sa',  layer:'B', meaning:'刺；扎',       analysis:'sa 的点对点介入：尖锐物穿过表面。', tags:['动词'] },
  { kana:'さす',   kanji:'指す',   root:'sa',  layer:'B', meaning:'指；指向',     analysis:'sa 的明确指向：将注意力集中到一点。', tags:['动词'] },
  { kana:'さく',   kanji:'裂く',   root:'sa',  layer:'B', meaning:'撕开；分裂',   analysis:'sa 的分离整体：将完整之物沿缝隙分开。', tags:['动词'] },
  { kana:'さく',   kanji:'咲く',   root:'sa',  layer:'B', meaning:'花开放',       analysis:'sa 的"裂开向前"：花瓣如撕开般绽开。', tags:['动词'] },
  { kana:'さき',     kanji:'先',     root:'sa',  layer:'B', meaning:'前端；先前',   analysis:'sa 的尖端：空间的前端 = 时间的先前。', tags:['名词'] },

  // ===== C 感觉与评价层 =====
  { kana:'やさしい', kanji:'易しい', root:'ya',  layer:'C', meaning:'容易；简单',   analysis:'ya 的柔和非对抗：不需费力即可达成。', tags:['形容词'] },
  { kana:'やわらかい',kanji:'柔らかい',root:'ya', layer:'C', meaning:'柔软',         analysis:'ya 的扩散无棱角：缺乏刚性的抵抗。', tags:['形容词'] },
  { kana:'やせる', kanji:'痩せる', root:'ya',  layer:'C', meaning:'瘦；消瘦',     analysis:'ya 的延展方向（矢）：向外延展即消减。', tags:['动词'] },
  { kana:'よい',   kanji:'良い',   root:'i',   layer:'C', meaning:'好',           analysis:'i 的主观精细评价：当下直接的判断。', tags:['形容词','评价'] },
  { kana:'ちいさい', kanji:'小さい', root:'i',   layer:'C', meaning:'小',           analysis:'chi (微小) + i (评价强化) + sai (状态) → 主观上感到微小。', tags:['形容词'] },
  { kana:'いき',     kanji:'息',     root:'i',   layer:'C', meaning:'呼吸；气息',   analysis:'i 的"生命鲜活"最直接体现：呼吸即生命。', tags:['名词'] },
  { kana:'いる',   kanji:'居る',   root:'i',   layer:'C', meaning:'在；有（人/动物）', analysis:'i 的存在性：人或动物存在于此地。', tags:['动词','一段'] },
  { kana:'いく',   kanji:'行く',   root:'i',   layer:'C', meaning:'去',           analysis:'i (生命) + ku (趋向) → 生命体的移动。', tags:['动词','五段'] },
  { kana:'うごく',   kanji:'動く',   root:'u',   layer:'C', meaning:'动；移动',     analysis:'u 的过程持续：从一个状态持续转向另一个。', tags:['动词'] },
  { kana:'いきる', kanji:'生きる', root:'u',   layer:'C', meaning:'活；生存',     analysis:'i (生命) + ki (能量) + ru (流动) → 生命能量持续流动。', tags:['动词','一段'] },
  { kana:'うむ',   kanji:'生む',   root:'u',   layer:'C', meaning:'生产；产生',   analysis:'u 的未完成过程：新生命从此处显现。', tags:['动词'] },

  // ===== D 结构辅助层 =====
  { kana:'もの',     kanji:'物',     root:'mo',  layer:'D', meaning:'物；事物',     analysis:'mo 的聚合包容：可被感知的存在集合。', tags:['名词'] },
  { kana:'まもる',   kanji:'守る',   root:'mo',  layer:'D', meaning:'守护；保护',   analysis:'ma (空间) + mo (覆盖) + ru (流动持续) → 在空间中持续覆盖保护。', tags:['动词'] },
  { kana:'もり',     kanji:'森',     root:'mo',  layer:'D', meaning:'森林',         analysis:'mo 的聚集：树木聚集之地（もり）。', tags:['名词'] },
  { kana:'もつ',   kanji:'持つ',   root:'mo',  layer:'D', meaning:'拿；拥有',     analysis:'mo 的包揽：将外部之物纳入自身。', tags:['动词'] },
  { kana:'おもい',   kanji:'重い',   root:'mo',  layer:'D', meaning:'重；沉',       analysis:'o (巨大/下沉) + mo (聚集) + i (评价) → 聚集下沉的物理感。', tags:['形容词'] },
  { kana:'くる',   kanji:'来る',   root:'ku',  layer:'D', meaning:'来',           analysis:'ku 的趋向性词尾典范：向此处的运动。', tags:['动词','力変'] },
  { kana:'くう',   kanji:'食う',   root:'ku',  layer:'D', meaning:'吃（粗鲁）',   analysis:'ku 的摄取：将外物纳入体内。', tags:['动词'] },
  { kana:'と',     kanji:'戸',     root:'to',  layer:'D', meaning:'门（单扇）',   analysis:'to 的边界典范：内外之间的木制界限。', tags:['名词'] },
  { kana:'とき',     kanji:'時',     root:'to',  layer:'D', meaning:'时；时间',     analysis:'to (边界) + ki (节点) → 时间段的分界点。', tags:['名词'] },
  { kana:'ついに',   kanji:'遂に',   root:'to',  layer:'D', meaning:'终于',         analysis:'to (完成边界) → 走到边界的最终时刻。', tags:['副词'] },

  // ===== E 接触与操控层 =====
  { kana:'て',     kanji:'手',     root:'te',  layer:'E', meaning:'手',           analysis:'te 的本体：身体最直接的工具，古语 ta 的变体。', tags:['名词','身体'] },
  { kana:'てらす', kanji:'照らす', root:'te',  layer:'E', meaning:'照耀；对照',   analysis:'te (手/抚摸) + ra (流动) + su (直线) → 用光去抚摸物体表面。', tags:['动词'] },
  { kana:'はて',   kanji:'果て',   root:'te',  layer:'E', meaning:'尽头；极限',   analysis:'ha (边缘) + te (手指所及) → 手指所指的极尽之处。', tags:['名词'] },
  { kana:'あし',     kanji:'足',     root:'ashi',layer:'E', meaning:'脚；足够',     analysis:'a (接头) + shi (止/底) → 接触地面支撑身体之处。', tags:['名词','身体'] },
  { kana:'はしる',   kanji:'走る',   root:'ashi',layer:'E', meaning:'跑',           analysis:'ha (快速显现) + shi (足) + ru (流动) → 双足快速交替流动。', tags:['动词','五段'] },
  { kana:'そこ',     kanji:'底',     root:'ashi',layer:'E', meaning:'底；底部',     analysis:'ashi 的接地之处：物体最下的接触面。', tags:['名词'] },
  { kana:'こ',     kanji:'子',     root:'ko',  layer:'E', meaning:'孩子；子',     analysis:'ko 的个体化典范：独立的小生命。', tags:['名词'] },
  { kana:'こころ',     kanji:'心',     root:'ko',  layer:'E', meaning:'心；内心',     analysis:'ko (滚动) + ko (个体) + ro (流转) → 滚动的不稳定核心。', tags:['名词'] },
  { kana:'ここ',   kanji:'此処',   root:'ko',  layer:'E', meaning:'此处；这里',   analysis:'ko (凝聚) + ko (点) → 凝聚于脚下的点。', tags:['代词'] },

  // ===== F 虚实与间隙层（日本美学核心）=====
  { kana:'ま',     kanji:'間',     root:'ma',  layer:'F', meaning:'间；空间；停顿', analysis:'ma 的神圣音：实体与实体之间的"存在"（负空间）。日本"间"美学之源。', tags:['名词','美学'] },
  { kana:'まつ',   kanji:'待つ',   root:'ma',  layer:'F', meaning:'等；等待',     analysis:'ma (间) + tsu (连接点) → 维持"间"的状态。', tags:['动词'] },
  { kana:'まえ',     kanji:'前',     root:'ma',  layer:'F', meaning:'前；之前',     analysis:'ma (正对) + e (方向) → 正对着的方向。', tags:['名词'] },
  { kana:'まごころ',   kanji:'真心',   root:'ma',  layer:'F', meaning:'真心；诚心',   analysis:'ma (真) + kokoro (心) → 纯粹真实的心。', tags:['名词'] },
  { kana:'め',     kanji:'目',     root:'ma',  layer:'F', meaning:'眼；眼珠',     analysis:'ma (空间/真) + i (出口) → mai → me 心灵之窗。', tags:['名词','身体'] },
  { kana:'よる',     kanji:'夜',     root:'yo',  layer:'F', meaning:'夜；夜里',     analysis:'yo 的视线无法到达：光明消退的时间。', tags:['名词'] },
  { kana:'よみ',   kanji:'黄泉',   root:'yo',  layer:'F', meaning:'黄泉；冥界',   analysis:'yo (异界) + mi (看/身) → 看不见的世界。', tags:['名词'] },
  { kana:'よける', kanji:'避ける', root:'yo',  layer:'F', meaning:'避开；躲开',   analysis:'yo 的身体弯曲移开：非直线地避开。', tags:['动词','一段'] },
  { kana:'よぶ',   kanji:'呼ぶ',   root:'yo',  layer:'F', meaning:'呼唤；叫做',   analysis:'yo (异界/彼方) + bu (fu 反复) → 向彼方反复送出声音。', tags:['动词'] },
  { kana:'うち',     kanji:'内',     root:'utsu',layer:'F', meaning:'内；里面',     analysis:'utsu 的内侧空间：被边界包裹的内部。', tags:['名词'] },
  { kana:'うつ',   kanji:'打つ',   root:'utsu',layer:'F', meaning:'打；敲',       analysis:'utsu 的向物体内部施力：力量穿透表面。', tags:['动词'] },
  { kana:'うつす',   kanji:'写す',   root:'utsu',layer:'F', meaning:'抄写；拍照',   analysis:'utsu 的"内容移动"：将内容物复制到另一载体。', tags:['动词'] },
  { kana:'うつす',   kanji:'移す',   root:'utsu',layer:'F', meaning:'移动；转移',   analysis:'utsu 的本质：内部内容的迁移。', tags:['动词'] },
  { kana:'うつろ',   kanji:'空ろ',   root:'utsu',layer:'F', meaning:'空洞；空虚',   analysis:'utsu (空虚) + ho (突出) → 树洞般的内部虚空。', tags:['名词','形容动词'] },

  // ===== G 能量与根源层 =====
  { kana:'き',     kanji:'気',     root:'ki',  layer:'G', meaning:'气；气息；精神', analysis:'ki 的看不见的能量：贯穿万物的生命之源。', tags:['名词'] },
  { kana:'き',     kanji:'木',     root:'ki',  layer:'G', meaning:'树；木',       analysis:'ki 的大地能量具象：生命树，连接天地。', tags:['名词'] },
  { kana:'きく',   kanji:'聞く',   root:'ki',  layer:'G', meaning:'听；问',       analysis:'ki (探寻) + ku (潜入) → 探寻看不见的信息（听觉/嗅觉）。', tags:['动词'] },
  { kana:'ひ',     kanji:'日',     root:'hi',  layer:'G', meaning:'日；太阳',     analysis:'hi 的尖锐高能量典范：太阳是最高能的显现。', tags:['名词'] },
  { kana:'ひ',     kanji:'火',     root:'hi',  layer:'G', meaning:'火',           analysis:'hi 的燃烧：能量的剧烈释放。', tags:['名词'] },
  { kana:'ほす',   kanji:'干す',   root:'hi',  layer:'G', meaning:'晾晒；弄干',   analysis:'hi 的干燥面：用太阳/风使水分消失。', tags:['动词'] },
  { kana:'ひと',     kanji:'人',     root:'hi',  layer:'G', meaning:'人',           analysis:'hi (灵性/日) + to (容器) → 承载灵性的容器。', tags:['名词'] },
  { kana:'ね',     kanji:'根',     root:'ne',  layer:'G', meaning:'根；基础',     analysis:'ne 的植物基础：不可见却支撑可见。', tags:['名词'] },
  { kana:'おと',     kanji:'音',     root:'ne',  layer:'G', meaning:'声音；音色',   analysis:'ne 的震动根源：古代认为声音发自大地或喉根。', tags:['名词'] },
  { kana:'ねる',   kanji:'寝る',   root:'ne',  layer:'G', meaning:'睡觉',         analysis:'ne 的回归根部：意识退回生命的根基休息。', tags:['动词','一段'] },
  { kana:'ねる',   kanji:'練る',   root:'ne',  layer:'G', meaning:'揉；推敲',     analysis:'ne 的粘性面：反复操作使之有粘性。', tags:['动词'] },

  // ===== H 流动与循环层 =====
  { kana:'ながれる', kanji:'流れる', root:'ra',  layer:'H', meaning:'流；流动',     analysis:'ru (动词结尾本质) 的典范：像水一样被动流转。', tags:['动词','一段'] },
  { kana:'らせん',   kanji:'螺旋',   root:'ra',  layer:'H', meaning:'螺旋',         analysis:'ra (旋转面) + sen (线) → 旋转上升的线条。', tags:['名词'] },
  { kana:'わ',     kanji:'輪',     root:'wa',  layer:'H', meaning:'环；圈',       analysis:'wa 的圆环典范：闭合的循环。', tags:['名词'] },
  { kana:'わ',     kanji:'和',     root:'wa',  layer:'H', meaning:'调和；和平',   analysis:'wa 的无棱角：各方圆融共存。', tags:['名词','形容动词'] },
  { kana:'われ',     kanji:'我',     root:'wa',  layer:'H', meaning:'我；自己',     analysis:'wa 的"完满的圆"：与主观的 i 相对的整全体自我。', tags:['代词'] },
  { kana:'わく',   kanji:'沸く',   root:'wa',  layer:'H', meaning:'沸腾；涌出',   analysis:'wa 的水流回旋：能量从内部涌出。', tags:['动词'] },
  { kana:'まわる',   kanji:'回る',   root:'meguri',layer:'H', meaning:'转；旋转',   analysis:'ma (圆) + wa (环) + ru (流) → 圆环式流转。', tags:['动词'] },
  { kana:'めぐる',   kanji:'巡る',   root:'meguri',layer:'H', meaning:'巡游；循环', analysis:'me (焦点) + guri (回旋) → 焦点沿环道再次回到此处。', tags:['动词'] },
  { kana:'めぐみ',   kanji:'恵み',   root:'meguri',layer:'H', meaning:'恩惠；恩赐', analysis:'meguri 的循环恩赐：非单向给予，而是循环回流。', tags:['名词'] },
  { kana:'これ',   kanji:'これ',   root:'re',  layer:'H', meaning:'这个',         analysis:'re 的空间析出：将眼前之物从环境剥离指认。', tags:['代词'] },
  { kana:'それ',   kanji:'それ',   root:'re',  layer:'H', meaning:'那个（中距离）',analysis:'re 的析出：从背景中指认为独立客体。', tags:['代词'] },
  { kana:'はなれる', kanji:'離れる', root:'re',  layer:'H', meaning:'离开；分离',   analysis:'re 的物理剥离：从依附状态脱离。', tags:['动词','一段'] },
  { kana:'かれる', kanji:'枯れる', root:'re',  layer:'H', meaning:'枯萎；凋零',   analysis:'re 的生命游离：内在气与水分脱落干瘪。', tags:['动词','一段'] },

  // ===== I 紧缩与凝聚层 =====
  { kana:'ち',     kanji:'血',     root:'chi', layer:'I', meaning:'血；血液',     analysis:'chi 的生命液体能量：浓缩的生命精华。', tags:['名词'] },
  { kana:'ち',     kanji:'地',     root:'chi', layer:'I', meaning:'地；土地',     analysis:'chi 的坚实基础面：与"路"同源。', tags:['名词'] },
  { kana:'ちから',     kanji:'力',     root:'chi', layer:'I', meaning:'力；力量',     analysis:'chi (灵力) + kara (发出源) → 灵力的发出处。', tags:['名词'] },
  { kana:'ちかい',   kanji:'近い',   root:'chi', layer:'I', meaning:'近；接近',     analysis:'chi 的空间紧缩：距离被压缩到极小。', tags:['形容词'] },
  { kana:'いのち',     kanji:'命',     root:'chi', layer:'I', meaning:'生命；寿命',   analysis:'i (生命) + no (所属) + chi (浓缩灵力) → 浓缩的生命精华。', tags:['名词'] },
  { kana:'まち',     kanji:'町',     root:'chi', layer:'I', meaning:'町；街镇',     analysis:'ma (空间) + chi (凝结点) → 凝聚在一片空间中的居所。', tags:['名词'] },
  { kana:'ちり',     kanji:'塵',     root:'chi', layer:'I', meaning:'尘埃；灰尘',   analysis:'chi 的微观面：微小零碎的物理感知（破擦音的"碎裂"听感）。', tags:['名词'] },
  { kana:'ちる',   kanji:'散る',   root:'chi', layer:'I', meaning:'散落；飘零',   analysis:'chi 的碎裂飘落：花瓣如尘埃般分散。', tags:['动词'] },
  { kana:'つ',     kanji:'津',     root:'tsu', layer:'I', meaning:'港口；渡口',   analysis:'tsu 的连接点典范：水陆交接之处。', tags:['名词'] },
  { kana:'つづく',   kanji:'続く',   root:'tsu', layer:'I', meaning:'继续；相连',   analysis:'tsu (连接) + tsuku (附着) → 像念珠一样连在一起。', tags:['动词'] },
  { kana:'つたえる', kanji:'伝える', root:'tsu', layer:'I', meaning:'传达；转告',   analysis:'tsu 的传递：经过连接点送达。', tags:['动词','一段'] },
  { kana:'つえ',     kanji:'杖',     root:'tsu', layer:'I', meaning:'手杖',         analysis:'tsu 的支点：连接手与地的支撑物。', tags:['名词'] },
  { kana:'に',     kanji:'荷',     root:'ni',  layer:'I', meaning:'行李；负担',   analysis:'ni 的重负典范：压在身上的重物。', tags:['名词'] },
  { kana:'にる',   kanji:'煮る',   root:'ni',  layer:'I', meaning:'煮；炖',       analysis:'ni 的粘着软化：用湿热使食物变软。', tags:['动词','一段'] },
  { kana:'ぬま',     kanji:'沼',     root:'ni',  layer:'I', meaning:'沼泽；泥潭',   analysis:'nu 的粘稠吞噬：柔软湿润的深渊。', tags:['名词'] },
  { kana:'ぬし',     kanji:'主',     root:'ni',  layer:'I', meaning:'主人；物主',   analysis:'nu 的潜藏：沼泽深处不可见的主人（古语ぬし）。', tags:['名词'] },

  // ===== J 直进与净化层 =====
  { kana:'す',     kanji:'素',     root:'su',  layer:'J', meaning:'素；本来',     analysis:'su 的纯粹本质：未经装饰的本真。', tags:['名词'] },
  { kana:'すな',     kanji:'砂',     root:'su',  layer:'J', meaning:'沙',           analysis:'su 的细碎纯净：颗粒细小无杂质。', tags:['名词'] },
  { kana:'すむ',   kanji:'澄む',   root:'su',  layer:'J', meaning:'清澈；澄清',   analysis:'su 的杂质沉淀：水变清澈的心境平和。', tags:['动词'] },
  { kana:'すむ',   kanji:'済む',   root:'su',  layer:'J', meaning:'完毕；解决',   analysis:'su 的平静完结：事情了结、债务还清。', tags:['动词'] },
  { kana:'すむ',   kanji:'住む',   root:'su',  layer:'J', meaning:'居住',         analysis:'su 的安定：人定居下来不再漂泊。', tags:['动词'] },
  { kana:'すすむ',   kanji:'進む',   root:'su',  layer:'J', meaning:'前进',         analysis:'su 的笔直向前：无阻碍地直行。', tags:['动词'] },
  { kana:'すぎる', kanji:'過ぎる', root:'su',  layer:'J', meaning:'经过；过度',   analysis:'su 的穿过流走：事物从眼前穿过后流走。', tags:['动词','一段'] },
  { kana:'せ',     kanji:'瀬',     root:'se',  layer:'J', meaning:'急流；浅滩',   analysis:'se 的河流变窄处：水流因压缩而湍急。', tags:['名词'] },
  { kana:'せまい',   kanji:'狭い',   root:'se',  layer:'J', meaning:'狭窄',         analysis:'se 的空间压缩：宽度被限制。', tags:['形容词'] },
  { kana:'せめる', kanji:'攻める', root:'se',  layer:'J', meaning:'攻击；攻打',   analysis:'se 的向狭窄处施压：集中力量突破。', tags:['动词','一段'] },
  { kana:'せまる',   kanji:'迫る',   root:'se',  layer:'J', meaning:'逼近；迫近',   analysis:'se 的迫近：距离快速缩小到极限。', tags:['动词'] },

  // ===== K 氛围与隐微层 =====
  { kana:'けはい',   kanji:'気配',   root:'ke',  layer:'K', meaning:'迹象；氛围',   analysis:'ke (气息) + hai (配) → 难以名状的感觉迹象。', tags:['名词'] },
  { kana:'け',     kanji:'毛',     root:'ke',  layer:'K', meaning:'毛；毛发',     analysis:'ke 的身体细微物：身体表面发出的细微之物。', tags:['名词'] },
  { kana:'ばけもの', kanji:'化け物', root:'ke',  layer:'K', meaning:'妖怪；怪物',   analysis:'ke (怪) 的极致：难以名状的非日常感（もののけ）。', tags:['名词'] },
  { kana:'ふく',   kanji:'吹く',   root:'fu',  layer:'K', meaning:'吹',           analysis:'fu 的气流运动典范：呼吸或风的物理化。', tags:['动词'] },
  { kana:'ふる',   kanji:'振る',   root:'fu',  layer:'K', meaning:'挥；摇',       analysis:'fu 的不稳定摇动：来回反复的动作。', tags:['动词'] },
  { kana:'ふね',     kanji:'舟',     root:'fu',  layer:'K', meaning:'船',           analysis:'fu 的漂浮物：在水上摇曳漂浮的容器。', tags:['名词'] },
  { kana:'ほ',     kanji:'穂',     root:'fu',  layer:'K', meaning:'穗',           analysis:'ho 的植物顶端蓬松部分：成熟后的蓬松展现。', tags:['名词'] },
  { kana:'ふる',   kanji:'降る',   root:'fu',  layer:'K', meaning:'下（雨/雪）',  analysis:'fu 的飘动：从空中飘摇而下。', tags:['动词'] },
  { kana:'ふるい',   kanji:'古い',   root:'fu',  layer:'K', meaning:'古老；旧',     analysis:'fu (反复经历岁月) + i (评价) → 经过长时间反复的状态。', tags:['形容词'] },

  // ===== L 深渊与包含层 =====
  { kana:'むすぶ',   kanji:'結ぶ',   root:'mu',  layer:'L', meaning:'系；结',       analysis:'mu 的连接并产生结果：闭合而孕育。', tags:['动词'] },
  { kana:'むし',     kanji:'虫',     root:'mu',  layer:'L', meaning:'虫；昆虫',     analysis:'mu 的"在此处自然产生的小生命"。', tags:['名词'] },
  { kana:'むろ',     kanji:'室',     root:'mu',  layer:'L', meaning:'房间；内室',   analysis:'mu 的封闭空间：用来发酵或储藏。', tags:['名词'] },
  { kana:'ねむる',   kanji:'眠る',   root:'mu',  layer:'L', meaning:'睡眠',         analysis:'ne (根) + mu (闭合/深处) → 意识退回根部深处闭合。', tags:['动词'] },
  { kana:'ゆめ',     kanji:'夢',     root:'mu',  layer:'L', meaning:'梦',           analysis:'mu 的模糊深处：睡眠中浮现的闭合影像。', tags:['名词'] },
  { kana:'おお',     kanji:'大',     root:'o',   layer:'L', meaning:'大；巨大',     analysis:'o 的规模广阔典范：感官上的笼罩感。', tags:['名词','形容动词'] },
  { kana:'おおう',   kanji:'覆う',   root:'o',   layer:'L', meaning:'盖；蒙',       analysis:'o 的盖住：从上方笼罩下来。', tags:['动词'] },
  { kana:'おく',     kanji:'奥',     root:'o',   layer:'L', meaning:'深处；内殿',   analysis:'o 的被笼罩深处：无法一眼看透的内里。', tags:['名词'] },
  { kana:'おそれる', kanji:'恐れる', root:'o',   layer:'L', meaning:'害怕；畏惧',   analysis:'o 的敬畏面：面对巨大未知时的颤抖。', tags:['动词','一段'] },

  // ===== M 萌发与聚焦层 =====
  { kana:'め',     kanji:'芽',     root:'me',  layer:'M', meaning:'芽',           analysis:'me 的萌发：潜藏生命（mu/mi）破土而出的尖端。', tags:['名词'] },
  { kana:'おんな',     kanji:'女',     root:'me',  layer:'M', meaning:'女；雌',       analysis:'me 的阴性母体：孕育、繁衍、衍生生命的本质（与雄/男 お 相对）。', tags:['名词'] },
  { kana:'めでる', kanji:'愛でる', root:'me',  layer:'M', meaning:'欣赏；喜爱',   analysis:'me (目光) + deru (向外延伸) → 将目光和情感长久投注到事物上。', tags:['动词','一段'] },
  { kana:'めずらしい', kanji:'珍しい', root:'me',  layer:'M', meaning:'稀罕；珍贵',   analysis:'me (吸引目光) + zuru (异样) + shii (评价) → 引人聚焦的稀有事物。', tags:['形容词'] },

  // ===== N 舒展与衍生层 =====
  { kana:'あかり', kanji:'明かり', root:'a',   layer:'N', meaning:'光；灯',       analysis:'a 的敞开明亮：完全开放的光明状态。', tags:['名词'] },
  { kana:'あかい',   kanji:'赤い',   root:'a',   layer:'N', meaning:'红',           analysis:'a 的明亮显现：红色是最显眼的颜色（明 = aka + ri）。', tags:['形容词'] },
  { kana:'あがる', kanji:'上がる', root:'a',   layer:'N', meaning:'上升；上去',   analysis:'a 的向外扩展空间：从低处向高处展开。', tags:['动词'] },
  { kana:'あく',   kanji:'開く',   root:'a',   layer:'N', meaning:'开；打开',     analysis:'a 的敞开典范：从闭合走向完全敞开。', tags:['动词'] },
  { kana:'えだ',     kanji:'枝',     root:'e',   layer:'N', meaning:'树枝',         analysis:'e 的从主干延伸出去：植物的分叉。', tags:['名词'] },
  { kana:'える',   kanji:'得る',   root:'e',   layer:'N', meaning:'得到；获得',   analysis:'e 的向外伸出抓住：手臂如枝桠伸出捕获。', tags:['动词','一段'] },
  { kana:'えらぶ',   kanji:'選ぶ',   root:'e',   layer:'N', meaning:'选择',         analysis:'e 的从众多分支中挑出：在分叉中选定一条。', tags:['动词'] },
  { kana:'ゆ',     kanji:'湯',     root:'yu',  layer:'N', meaning:'热水；澡',     analysis:'yu 的弛缓典范：温暖带来的物理放松。', tags:['名词'] },
  { kana:'ゆるむ',   kanji:'緩む',   root:'yu',  layer:'N', meaning:'松懈；变松',   analysis:'yu 的紧张解开：收缩状态被释放。', tags:['动词'] },
  { kana:'ゆれる', kanji:'揺れる', root:'yu',  layer:'N', meaning:'摇动；摇晃',   analysis:'yu 的失去固定重心：不稳定地晃动。', tags:['动词','一段'] },
  { kana:'ゆるす',   kanji:'許す',   root:'yu',  layer:'N', meaning:'允许；宽恕',   analysis:'yu 的边界放宽：释放原有的限制。', tags:['动词'] },

  // ===== O 沉降与消解层 =====
  { kana:'しずか',   kanji:'静か',   root:'shi', layer:'O', meaning:'安静',         analysis:'shi 的静止沉降：声音与动作完全平息。', tags:['形容动词'] },
  { kana:'した',     kanji:'下',     root:'shi', layer:'O', meaning:'下；下面',     analysis:'shi 的空间沉降方向：低处。', tags:['名词'] },
  { kana:'しずむ',   kanji:'沈む',   root:'shi', layer:'O', meaning:'沉；下沉',     analysis:'shi 的向下重力：向水底或地平线下坠。', tags:['动词'] },
  { kana:'し',     kanji:'死',     root:'shi', layer:'O', meaning:'死；死亡',     analysis:'shi 的生命机能停止：彻底的平息。', tags:['名词'] },
  { kana:'しる',   kanji:'知る',   root:'shi', layer:'O', meaning:'知道；知晓',   analysis:'shi 的信息沉淀：流动的信息在心中变为固定的固态。', tags:['动词'] },
  { kana:'しろい',   kanji:'白い',   root:'shi', layer:'O', meaning:'白',           analysis:'shi (干净/纯粹) + roi (评价) → 无杂色的纯粹。', tags:['形容词'] },
  { kana:'へる',   kanji:'減る',   root:'he',  layer:'O', meaning:'减少；减',     analysis:'he 的能量向外流失：数量/体积的衰退。', tags:['动词'] },
  { kana:'へだたる', kanji:'隔たる', root:'he',  layer:'O', meaning:'隔开；远离',   analysis:'he 的隔离：产生空间距离。', tags:['动词'] },
  { kana:'へる',   kanji:'経る',   root:'he',  layer:'O', meaning:'经过；经历',   analysis:'he 的时间边界流逝：跨越时间的边界。', tags:['动词','一段'] },

  // ===== P 质量与重态层 =====
  { kana:'の',     kanji:'野',     root:'no',  layer:'P', meaning:'野；原野',     analysis:'no 的平坦典范：开阔无阻碍的土地。', tags:['名词'] },
  { kana:'のびる', kanji:'延びる', root:'no',  layer:'P', meaning:'延长；延伸',   analysis:'no 的线性拉长：平面或线条的顺滑延展。', tags:['动词','一段'] },
  { kana:'のる',   kanji:'乗る',   root:'no',  layer:'P', meaning:'乘；登上',     analysis:'no 的平整覆盖：依附在某个平面之上。', tags:['动词'] },
  { kana:'おわる', kanji:'終わる', root:'wo',  layer:'P', meaning:'结束；完毕',   analysis:'wo 的线条拉到最末端：进程走到尽头。', tags:['动词'] },
  { kana:'お',     kanji:'尾',     root:'wo',  layer:'P', meaning:'尾；尾巴',     analysis:'wo 的细长延续：动物身体末端的延伸。', tags:['名词'] },
  { kana:'おか',     kanji:'丘',     root:'wo',  layer:'P', meaning:'丘陵',         analysis:'wo 的绵延地形：像线一样起伏的土地。', tags:['名词'] },

  // ===== Q 扭曲与压缩层 =====
  { kana:'おもい',   kanji:'重い',   root:'daku',layer:'Q', meaning:'重；沉',       analysis:'o (笼罩) + mo (聚集) + i (评价) 浊化 → 沉重粘滞的物理感。', tags:['形容词'] },
  { kana:'にごる',   kanji:'濁る',   root:'daku',layer:'Q', meaning:'变浑；污浊',   analysis:'浊音典范：清音（透明）→ 浊音（浑浊）。', tags:['动词'] },
  { kana:'げらげら',kanji:'げらげら',root:'daku',layer:'Q',meaning:'哈哈大笑',     analysis:'ke (气息) 浊化为 ge → 沉重粗犷的笑声。', tags:['拟态词'] },
  { kana:'ざらざら',kanji:'ざらざら',root:'daku',layer:'Q',meaning:'粗糙',         analysis:'sa (顺滑分离) 浊化为 za → 失去顺滑的粗糙摩擦。', tags:['拟态词'] },
  { kana:'ぴかぴか',kanji:'ぴかぴか',root:'handaku',layer:'Q',meaning:'闪闪发光',   analysis:'半浊音 pa 行：能量在极小点的瞬间高频爆发。', tags:['拟态词'] },
  { kana:'ぽんぽん',kanji:'ぽんぽん',root:'handaku',layer:'Q',meaning:'砰砰（声）', analysis:'半浊音的空心反弹感：带有内部空气的爆裂。', tags:['拟态词'] },
  { kana:'くちゃくちゃ',kanji:'くちゃくちゃ',root:'yau',layer:'Q',meaning:'揉捏',     analysis:'拗音：破坏原本结构、混合在一起的咀嚼或揉捏感。', tags:['拟态词'] },
  { kana:'ぐにゃぐにゃ',kanji:'ぐにゃぐにゃ',root:'yau',layer:'Q',meaning:'软绵绵',   analysis:'拗音：失去 su (直线) 性质，呈现柔软扭曲的状态。', tags:['拟态词'] },

  // ===== R 时空与张力层 =====
  { kana:'ほん',     kanji:'本',     root:'n',   layer:'R', meaning:'书；本',       analysis:'ho (树枝) + n (拨音内聚) → 树枝的根数 → 书本的计数单位。', tags:['名词'] },
  { kana:'ほんにん',   kanji:'本人',   root:'n',   layer:'R', meaning:'本人',         analysis:'ho (这个) + n (内聚) + nin (人) → 聚焦于此人本身。', tags:['名词'] },
  { kana:'ふんばる',kanji:'踏ん張る',root:'n',  layer:'R', meaning:'用力支撑',     analysis:'拨音典范：能量在内部堆积不释放，蓄力对抗。', tags:['动词'] },
  { kana:'きっと', kanji:'きっと', root:'sokuon',layer:'R', meaning:'一定；必定', analysis:'促音典范：气流被掐断形成张力，像拉满弓弦的瞬间。', tags:['副词'] },
  { kana:'まっすぐ',kanji:'まっすぐ',root:'sokuon',layer:'R', meaning:'笔直',       analysis:'ma (真) + っ (屏息阻断) + su (直) + gu → 极度紧张的直线性。', tags:['副词'] },
  { kana:'きっぷ',   kanji:'切符',   root:'sokuon',layer:'R', meaning:'票；车票',   analysis:'ki (切) + っ (切断的瞬间张力) + pu (附符) → 切断式的凭证。', tags:['名词'] },
  { kana:'コーヒー',kanji:'コーヒー',root:'chouon',layer:'R', meaning:'咖啡',       analysis:'长音典范：外来语中元音时间轴的拉长。', tags:['名词','外来语'] },
  { kana:'おかあさん',kanji:'お母さん',root:'chouon',layer:'R', meaning:'母亲',       analysis:'长音使称呼更柔和、更具延续感。', tags:['名词','称呼'] },
];

// =========================================================================
// 导出
// =========================================================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LAYERS, ROOTS, ENTRIES };
}
if (typeof window !== 'undefined') {
  window.KANA_DATA = { LAYERS, ROOTS, ENTRIES };
}
