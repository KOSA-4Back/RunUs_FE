const store = {
    namespaced: true,
    state() {
        return {
            currentLayout: '',
            header: {
                title: '',
                logo: '',
                chatTitle: '',
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
        setChatTitle(state, chatTitle) {
            state.header.chatTitle = chatTitle;
        },
    },
    actions: {
        updateLayout({ commit }, layout) {
            commit('setLayout', layout);
        },
        updateHeaderTitle({ commit }, headerTitle) {
            commit('setHeaderTitle', headerTitle);
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
    },
};

export default store;
