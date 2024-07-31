import Vue from 'vue';
import App from './App.vue';

import vuetify from './plugins/vuetify';
import moment from 'moment';

// 파일명까지 작성하는게 좋음
// import router from './router/index';
import store from './store/index';
import router from './router/index';

Vue.config.productionTip = false;

// moment를 전역으로 사용 가능하도록 설정
Vue.prototype.$moment = moment;

new Vue({
    vuetify,
    router, // router를 Vue 인스턴스에 등록
    store, // store를 Vue 인스턴스에 등록
    render: (h) => h(App),
}).$mount('#app');
