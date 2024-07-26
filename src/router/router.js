import Vue from 'vue';
import Router from 'vue-router';
import LoginCompo from '@/components/LoginCompo.vue';
import RegisterCompo from '@/components/RegisterCompo.vue';
import ProfileDetailsCompo from '@/components/ProfileDetailsCompo.vue';
import FindPasswordCompo from '@/components/FindPasswordCompo.vue';
import PasswordResetCompo from '@/components/PasswordResetCompo.vue';

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
    ],
});
