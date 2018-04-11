export const commonConfig = {
  menus: [
    { name: '仪表盘', key: 'dashboard', path: '/', icon: 'dashboard' },
    { name: '素材管理', key: 'material', path: '/material', icon: 'appstore' },
    { name: '用户管理', key: 'user', path: '/user', icon: 'user' },
    { name: '账号管理', key: 'account', path: '/account', icon: 'idcard' },
    { name: '数据统计', key: 'report', path: '/report', icon: 'area-chart' },
    { name: '微信卡券', key: 'cardcoupon', path: '/cardcoupon', icon: 'credit-card' },
    { name: '微信门店', key: 'store', path: '/sotre', icon: 'shop' },
    { name: '微信小店', key: 'smallstore', path: '/smallstore', icon: 'gift' },
    {
      name: '系统设置',
      key: 'setting',
      icon: 'tool',
      children: [
        { name: '微信网页授权', key: 'web-apps', path: '/web-apps', icon: 'appstore-o' },
        { name: '没想好', key: 'setting-unknown', path: '/setting-unknown' }
      ]
    }
  ]
};
