import LoginCompo from '@/components/page/kmj/LoginCompo.vue';
import RegisterCompo from '@/components/page/kmj/RegisterCompo.vue';
import ProfileDetailsCompo from '@/components/page/kmj/ProfileDetailsCompo.vue';
import FindPasswordCompo from '@/components/page/kmj/FindPasswordCompo.vue';
import PasswordResetCompo from '@/components/page/kmj/PasswordResetCompo.vue';
import PasswordChangeCompo from '@/components/page/kmj/PasswordChangeCompo.vue';
import Test from '@/components/page/kmj/test-test.vue'; //test임 나중에 지우기

import PageHomeCompo from '@/components/page/PageHomeCompo.vue';
import RunningStartCompo from '@/components/page/khw/PageRunningKhw.vue';

const routes = [
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
        path: '/password-change',
        name: 'password-change',
        component: PasswordChangeCompo,
    },
    {
        path: '/test',
        name: 'test',
        component: Test,
    },
    {
        path: '/running-start',
        name: 'running-start',
        component: RunningStartCompo,
    },
    {
        path: '/content',
        name: 'content',
        component: PageHomeCompo,
        children: [
            {
                path: 'PageRunningKhw',
                name: 'PageRunningKhw',
                component: () => import('@/components/page/khw/PageRunningKhw.vue'),
            },
            {
                path: 'profile',
                name: 'PageProfileKejCompo',
                component: () => import('@/components/page/kej/PageProfileKejCompo.vue'),
            },
        ],
    },
];

export default routes;
