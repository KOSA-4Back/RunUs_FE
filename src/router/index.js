import Vue from 'vue';
import VueRouter from 'vue-router';

import route from './router';
import PageNotFound from '../components/page/PageNotFound.vue';

Vue.use(VueRouter);

const base_router = [
    {
        path: '*',
        component: PageNotFound,
    },
];

export default new VueRouter({
    mode: 'history',
    base: '/runus',
    routes: [...route, ...base_router],
});
