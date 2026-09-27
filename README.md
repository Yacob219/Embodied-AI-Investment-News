# 具身投资观察

Embodied AI Investment News — 为具身智能投资研究整理可追溯的融资与公司动态。

## 当前可用

- 行业周报：按 P1 / P2 / P3 分层展示，保留公告时间、轮次、金额和来源。
- 融资面板：按周次、地域、层级、核验状态和关键词联合筛选；榜单同步响应所有筛选。
- 历史归档：保留原周报期次生成周目录，支持直接链接到某周。
- 事件详情：原始来源、金额限定词和证据状态。
- 数据导出：当前筛选结果导出 CSV；浏览器打印 / 保存 PDF。
- 收录标准：证据分级、评分权重、发布门槛和统计口径。

当前沿用参考项目的 **6 期周报、407 条记录**，保留原摘要、分类、金额和新闻来源。页面与数据模型独立实现；资料尚未逐条独立复核，不代表最新新闻或完整市场覆盖。数据出处与转换方式见 [数据来源说明](docs/DATA_PROVENANCE.md)。

## 启动

无需安装前端依赖。使用 Python 3 启动静态服务：

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

打开 http://127.0.0.1:4173 。页面路由为 `#weekly`、`#dashboard`、`#archive` 和 `#methodology`，任意静态托管均可使用。

## 验证

需要 Node.js 22 或以上：

```sh
npm test
npm run validate
```

## 数据维护

原始资料保存在 `data/weekly/`，修改后运行 `node scripts/prepare-data.mjs` 生成 `dist/data.js`，再执行测试与校验。归档沿用原周报期次，来源日期另行保留。累计、多轮及模糊金额不会转换成精确单轮金额。

`dist/model.js` 执行校验、筛选、排行及 CSV 输出。默认人民币参考榜沿用原资料三期国内榜单，保留其汇率日期和近／超等限定词；它不是同日换算或独立核验的榜单。原币种榜只比较已完成、明确金额的同币种股权融资。全部筛选同步作用于榜单和明细。

## 自动化边界

`dist/rules.js` 提供可测试的评分与证据门槛函数，尚未接入抓取器或模型。自动采集、数据库、审核后台、工作日定时发布、飞书与后台 PDF **尚未实现**。没有假登录、假推送或伪造自动运行状态。

后续需求见 [产品说明](docs/PRD.md) 与 [实施记录](docs/PROGRESS.md)。

## 发布

`dist/` 是部署目录。Sites 配置保存在 `.openai/hosting.json`，凭证不进入仓库。仓库源码与私有预览的访问范围独立。

## 产品与后续开发文档

- [PRD：产品目标与规则](PRD.md)
- [新闻搜索、采集与周报收录规范](docs/NEWS_COLLECTION_SPEC.md)
- [融资核验和统计口径](FINANCING_DASHBOARD_SPEC.md)
- [31家初始重点公司](docs/INITIAL_WATCHLIST.md)
- [产品设计](design-document.md)
- [技术栈](TECH_STACK.md)与[系统架构](architecture.md)
- [实施计划](implementation-plan.md)与[实际进度](docs/PROGRESS.md)
- [统一术语与阅读顺序](SPEC.md)
- [文档来源与调整说明](docs/DOCUMENT_PROVENANCE.md)

这些文档保留参考项目关键要求并适配本项目；自动采集、模型、审核后台及定时发布均为后续计划。原始导入版本保留在 `codex/import-reference` 分支。
