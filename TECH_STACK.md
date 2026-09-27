# 技术栈与技术决定

2026-09-27；来源见 [适配说明](docs/DOCUMENT_PROVENANCE.md)。

## 当前实际采用

- 前端：原生HTML、CSS、JavaScript ES Modules，无前端安装依赖。
- 数据：`data/weekly/*.json`原始资料，Node脚本生成`dist/data.js`。
- 逻辑：`dist/model.js`筛选、校验、排行、导出；`dist/rules.js`规则辅助，不调用模型。
- 验证：Node内置测试、资源校验、本地浏览器检查。
- 本地预览：Python静态HTTP服务；部署：Sites，`dist/`为静态目录。
- 源码交付：GitHub；部署源版本与GitHub提交分别管理。

## 自动化架构候选（尚未选定、安装或购买）

参考项目提出Next.js/TypeScript、FastAPI/Python、PostgreSQL、RQ/Redis、对象存储、模型网关及Playwright PDF。保留其模块边界思想，但不把整套参考栈宣称为本项目已冻结技术栈。
先用可重放的离线采集/整理流程验证质量。确有持久化审核、并发队列或多用户需求时再选择数据库、后端和队列，避免仅为复刻架构而迁移现有网站。
搜索发现与站内查询分开：未来数据库可用全文检索与中文分词；站外搜索需单独配置供应商/来源和执行预算。向量检索不是必需前置。

## 技术约束

来源适配器实现discover、fetch、extract、checkpoint、health；采集不直接发布。模型由统一网关隔离，保存输入证据与结构化输出、模型/提示词版本、预算及错误；不保存隐藏推理。
外部抓取和模型不进入每次普通单测；使用固定样本，真实连通性检查单独执行。凭据放安全运行配置，不写仓库。现有Sites站点不因文档新增而迁移托管平台。
