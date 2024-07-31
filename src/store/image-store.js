import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const imageStore = {
    namespaced: true,
    state: {
        userData: {
            email: '',
            nickname: '',
            password: '',
            profileImageUrl: '',
            profileImageFile: null,
        },
    },
    mutations: {
        SET_USER_DATA(state, userData) {
            state.userData = userData;
        },
    },
    actions: {
        setUserData({ commit }, userData) {
            commit('SET_USER_DATA', userData);
        },
    },
};

export default imageStore;
