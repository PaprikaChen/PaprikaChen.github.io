const translations = {
  en: {
    'nav.research': 'Research',
    'nav.project': 'Project',
    'nav.game': 'Game',
    'nav.about': 'About Me',
    'home.subtitle': 'designer · researcher · creative technologist',

    'research.title1': 'Hierarchical Finetuning for Visual Reasoning in VLMs',
    'research.authors1': 'Advised by Ehsan Adeli | Stanford University',
    'research.desc1': 'HiTune is a hierarchical fine-tuning framework designed to improve quantitative visual reasoning in vision-language models. It teaches models to decompose video-based physics problems and explicitly use tools for tasks such as object tracking, pixel measurement, scale conversion, and numerical calculation. Using LoRA-based supervised fine-tuning and STaR-style bootstrapping, HiTune aims to produce more accurate and interpretable answers instead of relying on plausible guesses.',
    'research.venue1': 'Aiming for ICLR 2027',

    'research.title2': 'QuantiPhy: A Quantitative Benchmark Evaluating Physical Reasoning Abilities of Vision-Language Models',
    'research.authors2': 'Advised by Fei-Fei Li and Ehsan Adeli | Stanford University',
    'research.desc2': 'QuantiPhy is the first benchmark that asks vision-language models to perform physical reasoning with numerical accuracy. Across more than 3,300 video-text instances, we show that today’s VLMs often produce plausible-sounding responses but fail quantitatively on physical reasoning tasks. They rely more heavily on memorized world knowledge from pretraining than on the actual video and text inputs.',
    'research.venue2': 'CVPR 2026 · Read paper →',

    'research.title3': 'Real-Time Watermarking for VR Motion',
    'research.authors3': 'Advised by Prof. Dianna Xu and Prof. Aline Normoyle',
    'research.desc3': 'Developed a real-time watermark embedding system using Quantization Index Modulation (QIM), optimized for VR motion data with angular velocity-based filtering. Simulated various real-world distortions—including frame rate resampling, partial frame loss, and motion blending—to test watermark robustness. Evaluated performance using both text and image watermarks, comparing accuracy, visual impact, and resilience under different attack types.',
    'research.venue3': 'View slides →',

    'game.tag3': 'OpenGL · C++',
    'game.title3': 'OpenGL: Interactive 3D Mini-Minecraft World',
    'game.desc3': 'A custom OpenGL game engine with player physics, flight/gravity modes, and ray-cast terrain interaction. Features procedural world generation via 3D Perlin noise — distinct biomes, cave systems, and lava pools. Rendering pipeline supports animated textures, transparency, and water/lava overlays; multithreaded terrain expansion keeps performance smooth.',
    'game.link3': 'Watch demo →',
    'game.tag2': 'Unity · C#',
    'game.title2': 'Unity: First-Person Shooter RPG Game Design',
    'game.desc2': 'An adventure game about a skeleton postman delivering a mysterious letter to a haunted maze. Peaceful by day, the maze fills with ghosts at night — players must manage time and health to survive. Features NPC hints, train transitions, and layered tasks for an immersive experience.',
    'game.link2': 'View on GitHub →',
    'project.tag3': 'Maya · Substance Painter',
    'project.title3': 'Maya + Substance Painter: Interactive Organic Modeling and Rendering',
    'project.desc3': 'A 3D scene featuring a bathroom environment with an orchid plant as the hero model. Created in Maya with materials and textures authored in Substance Painter.',
    'project.link3': 'View on Sketchfab →',
    'project.expand': 'Details',
    'game.expand': 'Details',
    'game.sectionDev': 'In Development',
    'game.sectionReleased': 'Released',
    'game.emptyReleased': 'Coming soon.',
    'game.sectionExp': 'Experiments',
    'game.tag1': 'Godot · 2.5D',
    'game.title1': 'You Yuan Jing Meng 《游园惊梦》',
    'game.teaser1': 'A 2.5D Chinese psychological horror game in Godot — platforming and light puzzles wrapped in surreal, oppressive dreamscapes.',
    'game.desc1': 'A 2.5D Chinese psychological horror game developed in Godot, blending platformer mechanics with light puzzle design. Surreal, dream-like scenes infused with Chinese horror aesthetics build a subtle and oppressive narrative atmosphere. Currently in active <strong>Demo development</strong>.',
    'game.teaser3': 'A custom OpenGL game engine with procedural terrain generation, player physics, and advanced rendering.',
    'game.teaser2': 'An adventure game about a skeleton postman delivering a mysterious letter to a haunted maze.',
    'game.tag4': 'Web · 2-Player Online',
    'game.title4': 'Spoon Fight',
    'game.teaser4': 'A two-player online restaurant game: you used to cook together, now you\'re rivals racing for the Golden Spoon.',
    'game.desc4': 'Over 5 days, two players each run their own restaurant — hire staff, race each other for food at a live market, play ad cards (some to boost yourself, some to trip up your rival), and serve guests in real time. Whoever ends with more money and stars wins the Golden Spoon. Designed for players 13+ as a playful introduction to running a business: costs add up, food spoils, unhappy guests hurt your reputation, and every choice is a trade-off. Create a room and share the 4-letter code to play online — no account needed — or practice alone.<br><br>A team project, shaped through many rounds of playtesting. Team: Paprika Chen, Oluwole Oyetoke, Saharat (Game) Laksanasut, and Emma Keiko Wong.',
    'game.link4play': 'Play in browser →',
    'game.link4itch': 'Play on itch.io →',
    'game.link4gh': 'View on GitHub →',
    'game.tag5': 'Ren\'Py · Visual Novel',
    'game.title5': 'How Do I Remember You',
    'game.teaser5': 'An interactive visual novel about a summer of volunteer teaching in a mountain village, and a girl named Mai.',
    'game.desc5': 'You are a university student spending thirty days teaching at a village school deep in the mountains. On the first evening you meet <strong>Mai</strong>, a thin, sharp-eyed girl the other kids keep their distance from. You want to help her — but you are an outsider who will leave, and every time you step in, Mai or the village pays some of the cost. The game asks how far an outsider should step in, and what these days mean to each of you, without answering either.<br><br>Three inner voices — the Teacher, the Passerby and the Lens — argue at every key moment. Mai\'s trust is never shown as a meter, only in what she calls you and whether she keeps the braid you made her. A camera you may never use, a countdown calendar, and small hands-on scenes (braiding hair, framing photos, chatting by phone after you\'ve gone home) lead to different goodbyes. Backgrounds come from photos taken on a real volunteer-teaching trip.<br><br>Free · about 40 minutes · English / 中文. Written, photographed and designed by Paprika Chen.',
    'game.link5play': 'Play in browser →',
    'game.link5gh': 'View on GitHub →',
    'project.teaser3': 'A 3D bathroom scene with an orchid plant as the hero model, built in Maya and textured in Substance Painter.',
    'project.link': 'View project →',

    'about.name': 'Paprika Chen',
    'about.role': 'Designer · Researcher · Creative Technologist',
    'about.bio': 'I\'m Paprika, an M.S. student in Computer Science at <strong>Stanford University</strong>, specializing in <strong>Visual Computing</strong>. I work on a physical reasoning project co-advised by <strong>Prof. Fei-Fei Li</strong> and <strong>Prof. Ehsan Adeli</strong>. Before Stanford, I graduated from <strong>Bryn Mawr College</strong>, where my research explored VR immersive theater, digital doppelgängers, and motion data watermarking.',
    'about.bio2': 'I have over five years of <strong>graphic design</strong> experience, which has shaped my visual sensibility and attention to detail. Beyond research, I\'m passionate about <strong>independent game development</strong> and the possibilities at the intersection of technology, art, and storytelling.',
    'about.bio3': 'I\'m currently leading <strong>You Yuan Jing Meng (《游园惊梦》)</strong> — a 2D Chinese horror game blending narrative puzzle-solving with platforming. Inspired by Chinese folklore and stories of female growth, it spans programming, visual direction, and narrative to create a world that is both unsettling and emotionally resonant.',
    'about.bio4': 'My interests lie at the intersection of <strong>visual computing</strong>, <strong>interactive systems</strong>, and <strong>creative expression</strong> — building experiences that are technically thoughtful, visually distinctive, and emotionally meaningful.',
    'about.photoPlaceholder': 'Photo',
    'about.storyIntro': 'Ready to know more about Paprika?',
    'about.scrollDown': 'Scroll down.',
    'about.story1': 'Paprika is an artist of makeup.',
    'about.story2': "She loves dancing with her friends.",
    'about.story3': "She can't hold a tune, but that doesn't stop her from singing a cappella with friends.",
    'about.story4': 'She is devoted to public service, and once taught in remote mountain villages.',
    'about.story5': "Her graphic design work has appeared on Weibo's homepage and the Chongqing Twin Towers.",
    'about.story6': 'She once dyed her hair <span class="text-pink">pink</span>.',
    'about.story7': 'She loves Bryn Mawr College so dearly.',
  },

  zh: {
    'nav.research': '研究',
    'nav.project': '项目',
    'nav.game': '游戏',
    'nav.about': '关于我',
    'home.subtitle': '设计师 · 研究者 · 创意技术人',

    'research.title1': '面向视觉语言模型视觉推理的分层微调',
    'research.authors1': '由斯坦福大学 Ehsan Adeli 教授指导',
    'research.desc1': 'HiTune 是一个旨在提升视觉语言模型定量视觉推理能力的分层微调框架。它训练模型将基于视频的物理问题拆解为多个步骤，并显式调用物体追踪、像素测量、尺度转换和数值计算等工具。通过基于 LoRA 的监督微调和 STaR 风格的自举训练，HiTune 希望模型能够生成更加准确、可解释的答案，而不是依赖看似合理的猜测。',
    'research.venue1': '目标投稿 ICLR 2027',

    'research.title2': 'QuantiPhy：评估视觉语言模型定量物理推理能力的基准',
    'research.authors2': '由斯坦福大学李飞飞教授与 Ehsan Adeli 教授指导',
    'research.desc2': 'QuantiPhy 是首个要求视觉语言模型以数值精度完成物理推理的评测基准。通过超过 3,300 个视频与文本实例，我们发现当前的视觉语言模型虽然经常能够生成听起来合理的回答，却难以在物理推理任务中获得准确的定量结果。相比真正理解视频和文本输入，这些模型往往更加依赖预训练阶段记忆的世界知识。',
    'research.venue2': 'CVPR 2026 · 阅读论文 →',

    'research.title3': 'VR 动作数据实时水印嵌入',
    'research.authors3': '由 Dianna Xu 教授与 Aline Normoyle 教授联合指导',
    'research.desc3': '基于量化索引调制（QIM）开发了一套实时水印嵌入系统，针对 VR 动作数据的角速度特征进行了专项优化。模拟了多种真实场景下的干扰方式——包括帧率重采样、帧丢失及动作混合——以测试水印的鲁棒性。分别采用文本水印与图像水印评估嵌入效果，在准确率、视觉影响及抗攻击能力等维度进行了对比分析。',
    'research.venue3': '查看幻灯片 →',

    'game.tag3': 'OpenGL · C++',
    'game.title3': 'OpenGL：交互式3D迷你我的世界',
    'game.desc3': '基于 OpenGL 构建的自定义游戏引擎，支持飞行与重力双模式及射线碰撞交互。使用三维 Perlin 噪声程序化生成地形——不同生物群系、洞穴与熔岩池一应俱全。后处理管线支持动态纹理、透明度与水/熔岩叠加效果；多线程地形扩展保障流畅性能。',
    'game.link3': '观看演示 →',
    'game.tag2': 'Unity · C#',
    'game.title2': 'Unity：第一人称射击 RPG 游戏设计',
    'game.desc2': '以骷髅邮差为主角的冒险游戏，需将神秘信件送达幽灵迷宫。白天平静，入夜幽灵袭来——玩家须合理分配时间并管理生命值。包含 NPC 提示、火车过场与多层任务，打造沉浸式游戏体验。',
    'game.link2': '在 GitHub 上查看 →',
    'project.tag3': 'Maya · Substance Painter',
    'project.title3': 'Maya + Substance Painter：有机体建模与渲染',
    'project.desc3': '以浴室为场景的三维作品，主角模型为一株兰花。在 Maya 中完成建模，并使用 Substance Painter 制作材质与贴图。',
    'project.link3': '在 Sketchfab 上查看 →',
    'project.expand': '详情',
    'game.expand': '详情',
    'game.sectionDev': '开发中',
    'game.sectionReleased': '已上线',
    'game.emptyReleased': '敬请期待。',
    'game.sectionExp': '实验作品',
    'game.tag1': 'Godot · 2.5D',
    'game.title1': '《游园惊梦》',
    'game.teaser1': '使用 Godot 开发的 2.5D 中式微恐游戏，以平台跳跃与轻度解谜为核心，营造含蓄压抑的叙事氛围。',
    'game.desc1': '使用 Godot 开发的 2.5D 中式微恐游戏，以平台跳跃与轻度解谜为核心玩法，通过诡谲梦境般的场景与中式恐怖元素，营造含蓄而压抑的叙事氛围。目前项目正处于 <strong>Demo 制作阶段</strong>。',
    'game.teaser3': '自定义 OpenGL 游戏引擎，包含程序化地形生成、玩家物理模拟与高级渲染技术。',
    'game.teaser2': '以骷髅邮差为主角的冒险游戏，需将神秘信件送达幽灵迷宫。',
    'game.tag4': 'Web · 双人联机',
    'game.title4': 'Spoon Fight',
    'game.teaser4': '双人联机餐厅经营游戏：曾经一起下厨的搭档，如今成了争夺金汤勺的对手。',
    'game.desc4': '在 5 天里，两名玩家各自经营一家餐厅——雇佣员工、在实时市场上抢购食材、打出广告卡（有的给自己引流，有的给对手使绊子），并实时接待顾客。最终金钱与星级更高的一方赢得金汤勺。游戏面向 13 岁以上玩家，以轻松的方式介绍经营的基本逻辑：成本每天累积、食材会变质、不满意的顾客会损害口碑，每个选择都是取舍。创建房间并分享 4 位房间码即可联机，无需注册；也可以单人练习。<br><br>团队项目，经过多轮试玩迭代完成。团队成员：Paprika Chen、Oluwole Oyetoke、Saharat (Game) Laksanasut、Emma Keiko Wong。',
    'game.link4play': '在浏览器中游玩 →',
    'game.link4itch': '在 itch.io 上游玩 →',
    'game.link4gh': '在 GitHub 上查看 →',
    'game.tag5': 'Ren\'Py · 视觉小说',
    'game.title5': '我不知道该如何回忆你',
    'game.teaser5': '一部关于山村支教的夏天，和一个叫小麦的女孩的视觉互动小说。',
    'game.desc5': '大二暑假，“我”报名支教队，去山里的一所村小待一个月。第一天傍晚，“我”遇见了<strong>小麦</strong>：干瘦、黝黑，眼睛又圆又亮，同学们都不太愿意靠近她。“我”想帮她，可“我”是一个三十天后就会离开的外来者，每一次出手，都要小麦或者村子付出些什么。游戏抛出两个问题但不给答案：外来者应该介入到什么程度？这些日子对我们双方究竟意味着什么？<br><br>“老师”“过客”和“摄影师”三个内心声音在每个关键时刻争论；屏幕上没有信任数值，小麦怎么称呼你、你编的辫子还在不在，都是她的回答。一台不一定会用的相机、右上角的倒计时日历，以及编辫子、取景拍照、回家后用手机聊天等小游戏，通向不同的告别。背景来自一次真实支教时拍下的照片。<br><br>免费 · 约 40 分钟 · 中文 / English。编剧、摄影与设计：Paprika Chen。',
    'game.link5play': '在浏览器中游玩 →',
    'game.link5gh': '在 GitHub 上查看 →',
    'project.teaser3': '以兰花为主角模型的三维浴室场景，在 Maya 中建模并用 Substance Painter 制作材质。',
    'project.link': '查看项目 →',

    'about.name': 'Paprika Chen',
    'about.role': '设计师 · 研究者 · 创意技术人',
    'about.bio': '我是 Paprika，<strong>斯坦福大学计算机科学硕士</strong>在读，专注于<strong>视觉计算</strong>方向。在<strong>李飞飞教授</strong>与 <strong>Ehsan Adeli 教授</strong>的联合指导下开展物理推理研究。本科毕业于<strong>布林茅尔学院</strong>，研究涵盖 <strong>VR 沉浸式剧场</strong>、<strong>数字分身</strong>与<strong>动作数据水印</strong>——动作水印成为我本科毕业论文的核心课题。',
    'about.bio2': '我拥有超过<strong>五年的平面设计经验</strong>，深刻塑造了我的视觉审美与细节把控能力。研究之外，我对<strong>独立游戏开发</strong>充满热情，着迷于技术、艺术与叙事交汇时涌现的可能性。',
    'about.bio3': '我目前主导开发<strong>《游园惊梦》</strong>（You Yuan Jing Meng）——一款融合叙事解谜与横版跳台的 <strong>2D 中式心理恐怖游戏</strong>。以中国民间传说与女性成长叙事为灵感，游戏横跨编程、视觉方向与叙事开发，构建一个既令人不安又具情感共鸣的世界。',
    'about.bio4': '我的兴趣横跨<strong>视觉计算</strong>、<strong>交互系统</strong>与<strong>创意表达</strong>——构建技术上经得起推敲、视觉上独树一帜、情感上触动人心的体验。',
    'about.photoPlaceholder': '照片',
    'about.storyIntro': '想更多地了解 Paprika 吗？',
    'about.scrollDown': '往下滑。',
    'about.story1': 'paprika是个化妆的艺术家。',
    'about.story2': '她动作不协调，但是喜欢和朋友们跳舞。',
    'about.story3': '她五音不全，但这不影响她和朋友们唱阿卡贝拉。',
    'about.story4': '她是个公益热爱者，并且曾去到大山中支教。',
    'about.story5': '她的平面设计作品曾经登上过微博首页，和重庆双子塔。',
    'about.story6': '她曾经染过<span class="text-pink">粉色</span>的头发。',
    'about.story7': '她是如此地热爱 Bryn Mawr College。',
  }
};


const LANG_KEY = 'paprika_lang';

function getLang() {
  return localStorage.getItem(LANG_KEY) || 'en';
}

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = lang === 'en' ? '中文' : 'EN';
}

function initI18n() {
  const lang = getLang();
  applyLang(lang);

  const btn = document.getElementById('langToggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const current = getLang();
      const next = current === 'en' ? 'zh' : 'en';
      localStorage.setItem(LANG_KEY, next);
      applyLang(next);
    });
  }
}

document.addEventListener('DOMContentLoaded', initI18n);
