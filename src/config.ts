/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "🚀 入门上手",
    emoji: "🚀",
    sites: [
      {
        title: "AlphaFold 入门指南",
        description: "从零开始理解蛋白质结构预测，小白友好",
        url: "https://www.bilibili.com/video/BV1example",
        icon: "",
        color: "#22C55E",
        tags: ["入门", "蛋白质", "视频"],
        isHot: true,
      },
      {
        title: "AI+生命科学学习路线",
        description: "2025 最新版，从生信到 AI 制药的完整路径",
        url: "https://github.com/example/ai-bio-roadmap",
        icon: "",
        color: "#3B82F6",
        tags: ["路线图", "入门"],
        isNew: true,
      },
      {
        title: "生成式 AI 在生物学中的应用",
        description: "Nature 综述解读，一文搞懂 GenAI × Bio",
        url: "https://www.nature.com/articles/example",
        icon: "",
        color: "#A855F7",
        tags: ["综述", "论文解读"],
      },
      {
        title: "Coursera 生物信息学专项课",
        description: "UCSD 出品，系统学习生信基础",
        url: "https://www.coursera.org/specializations/bioinformatics",
        icon: "",
        color: "#F59E0B",
        tags: ["课程", "生信"],
      },
    ],
  },
  {
    title: "🛠️ 工具与平台",
    emoji: "🛠️",
    sites: [
      {
        title: "AlphaFold Server",
        description: "DeepMind 官方，一键预测蛋白质结构",
        url: "https://alphafoldserver.com/",
        icon: "",
        color: "#22C55E",
        tags: ["蛋白质", "在线工具"],
        isHot: true,
      },
      {
        title: "ESMFold",
        description: "Meta AI 出品，速度更快的结构预测",
        url: "https://esmatlas.com/resources?action=fold",
        icon: "",
        color: "#3B82F6",
        tags: ["蛋白质", "在线工具"],
        isHot: true,
      },
      {
        title: "DiffDock",
        description: "扩散模型做分子对接，SOTA 级别",
        url: "https://github.com/gcorso/DiffDock",
        icon: "",
        color: "#A855F7",
        tags: ["分子对接", "开源"],
      },
      {
        title: "scGPT",
        description: "单细胞数据的基础大模型",
        url: "https://github.com/bowang-lab/scGPT",
        icon: "",
        color: "#EC4899",
        tags: ["单细胞", "大模型", "开源"],
        isNew: true,
      },
      {
        title: "BioGPT",
        description: "微软生物医学领域预训练语言模型",
        url: "https://github.com/microsoft/BioGPT",
        icon: "",
        color: "#0EA5E9",
        tags: ["NLP", "大模型", "开源"],
      },
      {
        title: "Hugging Face Bio Models",
        description: "一站式生物 AI 模型库，即开即用",
        url: "https://huggingface.co/models?other=biology",
        icon: "",
        color: "#FBBF24",
        tags: ["模型库", "平台"],
      },
    ],
  },
  {
    title: "📚 论文与数据",
    emoji: "📚",
    sites: [
      {
        title: "bioRxiv",
        description: "生物学预印本，抢先看最新研究",
        url: "https://www.biorxiv.org/",
        icon: "",
        color: "#DC2626",
        tags: ["预印本", "论文"],
      },
      {
        title: "PubMed",
        description: "生物医学文献检索必备",
        url: "https://pubmed.ncbi.nlm.nih.gov/",
        icon: "",
        color: "#2563EB",
        tags: ["论文库", "检索"],
      },
      {
        title: "UniProt",
        description: "蛋白质序列与功能数据库",
        url: "https://www.uniprot.org/",
        icon: "",
        color: "#059669",
        tags: ["数据库", "蛋白质"],
      },
      {
        title: "PDB",
        description: "蛋白质 3D 结构数据库",
        url: "https://www.rcsb.org/",
        icon: "",
        color: "#7C3AED",
        tags: ["数据库", "结构"],
      },
      {
        title: "Papers With Code - Bio",
        description: "论文 + 代码 + 排行榜，一站搞定",
        url: "https://paperswithcode.com/area/biology",
        icon: "",
        color: "#0891B2",
        tags: ["论文", "代码", "Benchmark"],
        isHot: true,
      },
    ],
  },
  {
    title: "💡 实战案例",
    emoji: "💡",
    sites: [
      {
        title: "Kaggle 生物类竞赛",
        description: "边打比赛边学习，还能拿奖金",
        url: "https://www.kaggle.com/competitions?hostSegmentIdFilter=5",
        icon: "",
        color: "#20BEFF",
        tags: ["竞赛", "实战"],
        isHot: true,
      },
      {
        title: "AlphaFold Colab 教程",
        description: "Google Colab 一键跑通，零配置",
        url: "https://colab.research.google.com/github/deepmind/alphafold/blob/main/notebooks/AlphaFold.ipynb",
        icon: "",
        color: "#F59E0B",
        tags: ["教程", "Colab", "蛋白质"],
      },
      {
        title: "用 ChatGPT 辅助科研",
        description: "Prompt 技巧 + 实战案例，效率翻倍",
        url: "https://github.com/example/chatgpt-for-research",
        icon: "",
        color: "#10B981",
        tags: ["Prompt", "效率工具"],
        isNew: true,
      },
    ],
  },
  {
    title: "💼 从业与变现",
    emoji: "💼",
    sites: [
      {
        title: "AI 制药公司一览",
        description: "国内外 AI 制药公司名单，找工作必看",
        url: "https://github.com/example/ai-pharma-companies",
        icon: "",
        color: "#6366F1",
        tags: ["求职", "公司"],
      },
      {
        title: "生信/AI 制药招聘",
        description: "实时更新的招聘信息汇总",
        url: "https://example.com/jobs",
        icon: "",
        color: "#F43F5E",
        tags: ["招聘", "求职"],
        isHot: true,
      },
      {
        title: "AI 生科自媒体变现指南",
        description: "公众号、知识星球、咨询服务怎么做",
        url: "https://example.com/monetization",
        icon: "",
        color: "#EAB308",
        tags: ["变现", "自媒体"],
      },
    ],
  },
  {
    title: "🔗 友链与社区",
    emoji: "🔗",
    sites: [
      {
        title: "BioAI 交流群",
        description: "微信群 / Discord，和同行一起卷",
        url: "https://example.com/community",
        icon: "",
        color: "#22C55E",
        tags: ["社群"],
      },
      {
        title: "生信技能树",
        description: "国内生信学习社区，资源超多",
        url: "https://www.biotrainee.com/",
        icon: "",
        color: "#3B82F6",
        tags: ["社区", "学习"],
      },
    ],
  },
];

/** 专题/合集配置 */
const TOPICS: TopicItem[] = [
  {
    title: "AlphaFold 全家桶",
    description: "从入门到进阶，蛋白质结构预测一网打尽",
    emoji: "🧬",
    color: "#22C55E",
    urls: [
      "https://alphafoldserver.com/",
      "https://www.bilibili.com/video/BV1example",
      "https://colab.research.google.com/github/deepmind/alphafold/blob/main/notebooks/AlphaFold.ipynb",
    ],
  },
  {
    title: "AI 制药入门包",
    description: "零基础入坑 AI 制药，这些就够了",
    emoji: "💊",
    color: "#A855F7",
    urls: [
      "https://github.com/example/ai-bio-roadmap",
      "https://github.com/gcorso/DiffDock",
      "https://www.coursera.org/specializations/bioinformatics",
    ],
  },
  {
    title: "大模型速查",
    description: "生物领域大模型合集，按需取用",
    emoji: "🤖",
    color: "#3B82F6",
    urls: [
      "https://github.com/bowang-lab/scGPT",
      "https://github.com/microsoft/BioGPT",
      "https://huggingface.co/models?other=biology",
    ],
  },
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 站点名称
   */
  BLOG_NAME: "BioAI 导航",
  /**
   * 站点副标题
   */
  SITE_SUBTITLE: "生命科学 × 生成式 AI 的一站式资源入口",
  /**
   * 主站链接（点击 Logo 跳转）
   */
  BLOG_URL: "#",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * Github 链接
   */
  GITHUB_URL: "https://github.com/your-repo/bioai-nav",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://api.dujin.org/bing/1920.php",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "",
  ICP_URL: "https://beian.miit.gov.cn/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语（年轻化、口语化）
   */
  SLOGANS: [
    "🧬 AI + 生科，未来已来",
    "🚀 从入门到上手，这里都有",
    "💡 别光收藏，用起来！",
    "🔬 让 AI 帮你做科研",
    "🎯 找工具？找资源？找对地方了",
    "📚 论文太多？先看精选",
    "💼 想入行？先看这里",
    "🤖 GenAI × Bio = ∞",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * 专题/合集配置
   */
  TOPICS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "BioAI 导航 - AI 生命科学资源站",
    keywords:
      "AI生命科学,生成式AI,AlphaFold,AI制药,生物信息学,蛋白质结构预测,BioGPT,scGPT,AI医药",
    description:
      "BioAI 导航 - 生命科学 × 生成式 AI 的一站式资源入口，收录 AI 制药、蛋白质预测、生物大模型等领域的工具、教程、论文与数据资源。",
  },
  /**
   * 主题色配置
   */
  THEME: {
    primaryColor: "#22C55E", // 基因绿
    secondaryColor: "#3B82F6", // 分子蓝
    accentColor: "#A855F7", // 细胞紫
  },
};

export default GLOBAL_CONFIG;
