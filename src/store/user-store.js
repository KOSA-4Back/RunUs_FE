const store = {
    namespaced: true,
    // 상태관리 (user_info)
    state() {
        return {
            user_info: {},
        };
    },

    // 서비스로 봐야함
    mutations: {
        // 로그인 성공
        login(state, login_info) {
            state.user_info = login_info;
        },

        // 로그아웃 성공
        logout(state, login_info) {
            state.user_info = login_info;
        },

        // 로그인 실패
        failLogin(state, login_info) {
            state.user_info = login_info;
        },
    },

    actions: {
        // 로그인 성공
        login(context, login_info) {
            context.commit('login', login_info);
        },

        // 로그아웃 성공
        logout(context, login_info) {
            context.commit('logout', login_info);
        },

        // 로그인 실패
        failLogin(context, login_info) {
            context.commit('failLogin', login_info);
        },
    },

    getters: {
        // 사용자 정보 받아옴
        getUserInfo(state) {
            return state.user_info;
        },
    },
};

// 쓰는 사용자가 만들 수 있음
export default store;
