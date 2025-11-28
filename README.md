# 🧬 AI 生命科学导航站 | AI BioScience Navigator

![Vue3](https://img.shields.io/badge/Vue-3.x-42b883?logo=vue.js)
![Vite](https://img.shields.io/badge/Vite-4.x-646cff?logo=vite)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?logo=vercel)
![License](https://img.shields.io/badge/License-MIT-blue)

🌐 **在线预览**：[nav.aibioo.cn](https://nav.aibioo.cn) | 📝 [更新日志](./CHANGELOG.md)

![预览图](./demo/show.png)

> 🎯 一站式 AI 生命科学资源导航，汇集蛋白质预测、分子对接、单细胞分析、AI 制药等领域的 **100+ 优质工具与学习资源**。

---

## ✨ 项目特色

- 🧬 **聚焦 AI + 生命科学** — 专注于 AI 在生物医药领域的应用
- 📚 **100+ 精选资源** — 涵盖工具、数据库、教程、论文等
- 🏷️ **标签分类系统** — 支持热门 🔥 / 最新 ✨ 标记，快速定位
- 📱 **响应式设计** — 完美适配桌面端与移动端
- ⚡ **Vite 极速构建** — 秒开体验，性能优异
- 🎨 **Bing 每日壁纸** — 每天不一样的视觉享受

---

## 📂 导航分类一览

| 分类 | 说明 |
|------|------|
| 🚀 入门上手 | ColabFold、AlphaFold 教程、生信课程 |
| 🛠️ 工具与平台 | AlphaFold Server、ESMFold、DiffDock、scGPT |
| 📊 数据库 | AlphaFold DB、UniProt、PDB、ChEMBL |
| 📚 学习资源 | 在线课程、视频教程、书籍推荐 |
| 🧪 AI 制药 | 药物发现、分子生成、ADMET 预测 |
| 🧬 基因组学 | 基因预测、变异分析、功能注释 |
| 🔬 单细胞分析 | scRNA-seq、空间转录组、细胞图谱 |
| 📄 论文平台 | arXiv、bioRxiv、PubMed、知网 |
| 💼 求职招聘 | 生信岗位、AI 制药公司、学术职位 |

---

## 🚀 快速开始

### 一键部署

点击按钮，一键部署到 Vercel：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdongyu19920904%2Fblog&repository-name=ai-bioscience-nav)

### 保持更新（推荐）

如果想持续同步上游更新，建议使用 Fork 方式：

1. **Fork 本项目**：点击右上角 `Fork` 按钮
2. **部署到 Vercel**：在 [Vercel](https://vercel.com) 导入你 Fork 的仓库
3. **同步更新**：后续可通过 GitHub 同步上游更新

### 修改配置

编辑 `/src/config.ts` 文件，自定义你的导航内容：

```ts
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "分类名称",
    sites: [
      {
        title: "网站标题",
        description: "网站描述",
        url: "https://example.com",
        icon: "",
        color: "#22C55E",
        emoji: "🧬",
        tags: ["标签1", "标签2"],
        isHot: true,  // 热门标记
        isNew: false, // 最新标记
      },
    ],
  },
];
```

提交更改后，Vercel 会自动重新部署。

---

## 🛠️ 本地开发

### 环境要求

- Node.js >= 18
- Yarn 1.22.19（可使用 [Volta](https://volta.sh/) 自动切换）

### 安装与运行

```bash
# 克隆项目
git clone https://github.com/dongyu19920904/blog.git
cd blog

# 安装依赖
yarn install

# 启动开发服务器
yarn dev

# 构建生产版本
yarn build
```

---

## 🤖 AI 辅助开发记录

本项目全程使用 AI 编程助手完成改造，以下是开发历程分享：

### 开发工具链

| 工具 | 用途 |
|------|------|
| **Windsurf / VS Code** | 代码编辑器 |
| **Claude Opus 4.5** | 主力 AI 助手（效果最佳） |
| **GPT-5.1** | 备用助手（无限使用） |
| **GitHub Desktop** | 版本管理，一键同步 |
| **Vercel** | 自动化部署 |

### 开发流程

```
Fork 原项目 → 一键部署 Vercel → GitHub Desktop 克隆
    ↓
Windsurf/VS Code + AI 助手改造代码
    ↓
GitHub Desktop 同步 → Vercel 自动更新
```

### AI 模型使用体验

| 模型 | 评分 | 体验 |
|------|------|------|
| Claude Opus 4.5 | ⭐⭐⭐⭐⭐ | 理解力强，代码质量高，Pro 试用额度有限 |
| GPT-5.1 | ⭐⭐⭐⭐ | 稳定可靠，无限使用，性价比高 |
| Gemini 3 | ⭐⭐⭐ | 官网体验好，与 Windsurf 兼容性一般 |

### 主要改动

- ✅ 将通用导航改造为 **AI 生命科学** 专题
- ✅ 新增 **9 大分类**、**100+ 精选资源**
- ✅ 添加 **标签系统**、热门/最新标记
- ✅ 修复错误链接、优化页面布局
- ✅ 使用 GitHub Copilot 进行最终优化

---

## 🙏 致谢

本项目基于 [EsunR/Blog-Index](https://github.com/EsunR/Blog-Index) 开发，感谢原作者的优秀开源项目！

- 🔗 原项目：[https://github.com/EsunR/Blog-Index](https://github.com/EsunR/Blog-Index)
- 🌐 原作者博客：[https://www.esunr.site](https://www.esunr.site)

---

## 🎁 AI 工具资源推荐

> 如果你也在使用 AI 编程工具，这里有一些超值资源 👇

🌐 **官网下单**：[aivora.cn](https://aivora.cn) · 24h 自助，卡密秒发 ⚡

| 产品 | 特点 | 价格 |
|------|------|------|
| **Windsurf 激活器** | 无限续杯 Pro，全平台支持 | 3.9 元/天起 |
| **Cursor Pro 换号器** | 7 天体验，支持 GPT-5.1/Claude | 8.9 元起 |
| **Claude Code 中转** | 200K 上下文，Opus 4.1+ | 4.9 元/日卡起 |
| **ChatGPT Business** | 稳定性超 Plus，支持 CodeX/Sora2 | 29.9 元/月 |
| **Gemini Plus 年卡** | 官方会员 + 2T 云盘（官方 $200/年） | 99.9 元/年 |

📱 更多详情请访问官网 [aivora.cn](https://aivora.cn)

---

## 📄 License

[MIT License](./LICENSE) © 2024

---

<p align="center">
  <b>⭐ 如果这个项目对你有帮助，欢迎 Star 支持！</b>
</p>
