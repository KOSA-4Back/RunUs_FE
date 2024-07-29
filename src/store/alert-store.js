const store = {
    namespaced: true,
    state() {
        return { showAlert: false };
    },

    mutations: {
        SHOW_ALERT(state) {
            state.showAlert = true;
        },
        HIDE_ALERT(state) {
            state.showAlert = false;
        },
    },
    actions: {
        triggerAlert({ commit }) {
            commit('SHOW_ALERT');
            setTimeout(() => {
                commit('HIDE_ALERT');
            }, 2000);
        },
    },
    getters: {
        showAlert(state) {
            return state.showAlert;
        },
    },
};

export default store;
