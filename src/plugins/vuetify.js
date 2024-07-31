import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'vuetify/dist/vuetify.min.css';
import ko from 'vuetify/lib/locale/ko'; // 한국어 로케일을 가져옵니다.

Vue.use(Vuetify);
new Vuetify({
    lang: {
        locales: { ko },
        current: 'ko', // 기본 로케일을 한국어로 설정합니다.
    },
});

export default new Vuetify({});
