# 如何运行

```bash
# Install deps
npm i

# Run dev
npm start
# or
npm run dev

# Run test
npm test
```

# 目录结构

```bash
src/
  bizs/ # 业务层，被routes中的路由调用
    sqlstore/ # 业务层调用的sql语句
    validators/ # 被业务层调用的数据校验
  common/ # 业务相关公共类、库等
  config/ # 配置文件目录
  routes/ # 用于放置路由
  utils/ # 业务无关工具库函数，各种helper
  index.ts # 入口文件
```

# 重要说明

为了保证代码规范一致，请遵从如下规则：

1. 使用 `VS Code` 作为默认代码编辑器
2. 安装 `EditorConfig, Prettier, sort-imports, eslint` 等四个必备插件（项目中以配置上相关格式）
