import Vue from 'vue';
import Router from 'vue-router';

import LoginCompo from '@/components/page/kmj/LoginCompo.vue';
import RegisterCompo from '@/components/page/kmj/RegisterCompo.vue';
import ProfileDetailsCompo from '@/components/page/kmj/ProfileDetailsCompo.vue';
import FindPasswordCompo from '@/components/page/kmj/FindPasswordCompo.vue';
import PasswordResetCompo from '@/components/page/kmj/PasswordResetCompo.vue';
import Test from '@/components/page/kmj/test-test.vue'; //test임 나중에 지우기

import RunningStartCompo from '@/components/page/khw/PageRunningKhw.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'login',
            component: LoginCompo,
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterCompo,
        },
        {
            path: '/profile-details',
            name: 'profile-details',
            component: ProfileDetailsCompo,
        },
        {
            path: '/find-password',
            name: 'find-password',
            component: FindPasswordCompo,
        },
        {
            path: '/password-reset',
            name: 'password-reset',
            component: PasswordResetCompo,
        },

        //test임 나중에 지우기

        {
            path: '/test', // test.vue 경로 추가
            name: 'test',
            component: Test,
        },
        {
            path: '/running-start',
            name: 'running-start',
            component: RunningStartCompo,
        },
    ],
});
