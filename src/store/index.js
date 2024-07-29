import Vue from 'vue';
import Vuex from 'vuex';
import UserStore from '@/store/user-store';
import AlertStore from '@/store/alert-store';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        loginInfo: UserStore,
        alert: AlertStore,
    },
});

export default store; // vuex store export default
