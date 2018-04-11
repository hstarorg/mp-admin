# DB_Design

## 记录 App 跳转信息（web_apps）

| 字段        | 类型          | 描述                                                      |
| ----------- | ------------- | --------------------------------------------------------- |
| id          | int           | 自增，主键                                                |
| name        | varchar(50)   | App 名称，全英文构成，用于拼接到路径中                    |
| displayName | varchar(50)   | App 的显示名称                                            |
| description | varchar(2000) | 描述信息                                                  |
| createDate  | bigint        | 创建时间                                                  |
| updateDate  | bigint        | 最后更新时间                                              |
| status      | varchar(50)   | 状态，默认 active, 可选 ['active', 'inactive', 'deleted'] |

##
