import Vue from 'vue';
import App from './App.vue';

// 파일명까지 작성하는게 좋음
import router from './router/index';
import store from './store/index';

Vue.config.productionTip = false;

new Vue({
    router, // router를 Vue 인스턴스에 등록
    store, // store를 Vue 인스턴스에 등록
    render: (h) => h(App),
}).$mount('#app');
