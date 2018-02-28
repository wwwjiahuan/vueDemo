const routes = [
    {
        path: '/', redirect: '/home'
    },
    {
        path: '/home', name: 'home', meta: { title: '首页' },
        component: (resolve) => require(['./views/home.vue'], resolve)
    },
    {
        path: '/detail', name: 'detail', meta: { title: '详情' },
        component: (resolve) => require(['./views/detail.vue'], resolve)
    },
];

module.exports = routes;