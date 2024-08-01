const store = {
    namespaced: true,
    state() {
        return {
            currentLayout: '',
            header: {
                title: '',
                logo: '',
                chatTitle: '',
                goalKm: 0,
            },
        };
    },
    mutations: {
        setLayout(state, layout) {
            state.currentLayout = layout;
        },
        setHeaderTitle(state, title) {
            state.header.title = title;
        },
        setLogo(state, logo) {
            state.header.logo = logo;
        },
        setGoalKm(state, goalKm) {
            state.header.goalKm = goalKm;
        },
        setChatTitle(state, chatTitle) {
            state.header.chatTitle = chatTitle;
        },
    },
    actions: {
        updateLayout({ commit }, layout) {
            commit('setLayout', layout);
        },
        updateHeaderTitle({ commit }, title) {
            commit('setHeaderTitle', title);
        },
        updateGoalKm({ commit }, goalKm) {
            commit('setGoalKm', goalKm);
        },
        updateLogo({ commit }, logo) {
            commit('setLogo', logo);
        },
        updateChatTitle({ commit }, chatTitle) {
            commit('setChatTitle', chatTitle);
        },
    },
    getters: {
        currentLayout(state) {
            return state.currentLayout;
        },
        header(state) {
            return state.header;
        },
        goalKm(state) {
            return state.header.goalKm;
        },
    },
};

export default store;