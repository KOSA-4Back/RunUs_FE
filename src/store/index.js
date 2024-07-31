import Vue from 'vue';
import Vuex from 'vuex';
import UserStore from '@/store/user-store';
import AlertStore from '@/store/alert-store';
import ImageStore from '@/store/image-store';
import HeaderStore from '@/store/header-store';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        loginInfo: UserStore,
        alert: AlertStore,
        imageStore: ImageStore,
        header: HeaderStore,
    },
});

export default store;
