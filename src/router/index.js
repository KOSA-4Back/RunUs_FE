import Vue from 'vue';
import VueRouter from 'vue-router';

import route from './route.js';
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
    routes: [...route, ...base_router],
});
