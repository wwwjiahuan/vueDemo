import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';
import App from './app';

Vue.use(VueRouter);

const RouterConfig = {
    routes: routes
}
const router = new VueRouter(RouterConfig);

new Vue({
    el: '#root',
    router: router,
    render: h => h(App)
})