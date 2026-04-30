# AI 数据治理与合规 Agent 平台

一个中大型 AI 方向项目示例，定位为企业级数据治理、隐私合规、数据质量巡检与自动修复平台。项目包含 React + TypeScript + Vite 前端大屏、Express Mock API、项目文档与 GitHub Pages 自动部署配置。

## 核心能力

- 多 Agent 协同：隐私识别、血缘分析、质量巡检、权限审计、修复建议
- RAG 知识检索：结合数据字典、历史工单、数据规范、审计规则进行上下文增强
- Token 成本中心：展示日均 Token、峰值 Token、Agent 成本占比与趋势
- 数据治理工作台：展示敏感字段、权限风险、指标口径、链路异常
- 自动化闭环：风险发现后自动生成修复任务、SQL 建议、通知与复盘报告

## 本地运行

```bash
npm install
npm run dev
```

访问：`http://localhost:5173`

## Mock API

```bash
npm run mock
```

访问：`http://localhost:8787/api/overview`

## 构建

```bash
npm run build
npm run preview
```

## 部署到 GitHub Pages

1. 新建 GitHub 仓库，例如：`ai-data-governance-agent-platform`
2. 上传代码到 `main` 分支
3. 进入仓库 `Settings -> Pages`
4. Source 选择 `GitHub Actions`
5. push 后自动触发 `.github/workflows/deploy.yml`

## 项目定位

该项目适合用于社区申请、作品集、AI 平台方向展示、高校比赛、企业内部 AI Agent 平台 Demo。它强调中大型团队落地、后端数据交互、多 Agent 协同、Token 消耗规模与实际业务收益。
