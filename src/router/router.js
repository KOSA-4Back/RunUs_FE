import Vue from 'vue';
import Router from 'vue-router';
import LoginCompo from '@/components/layout/draw-by-kmj/LoginCompo.vue';
import RegisterCompo from '@/components/layout/draw-by-kmj/RegisterCompo.vue';
import ProfileDetailsCompo from '@/components/layout/draw-by-kmj/ProfileDetailsCompo.vue';
import FindPasswordCompo from '@/components/layout/draw-by-kmj/FindPasswordCompo.vue';
import PasswordResetCompo from '@/components/layout/draw-by-kmj/PasswordResetCompo.vue';
import Test from '@/components/layout/draw-by-kmj/test-test.vue';
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
