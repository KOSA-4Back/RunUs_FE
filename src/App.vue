<template>
    <v-app>
        <v-main>
            <!--<router-view />-->
            <!-- <body-compo></body-compo>
        <footer-compo></footer-compo> -->
            <kang-heewon></kang-heewon>
            <example-component></example-component>
            
            <!--<router-view /> 라우터 뷰 잠시 비활성화 -->
            <yeong-hun />
            <!-- <body-compo></body-compo>
<footer-compo></footer-compo> -->
        </v-main>
    </v-app>
</template>

<script>
import ExampleComponent from './components/page/khw/ExampleComponent.vue';
import KangHeewon from './components/page/khw/KangHeewon.vue';
// import BodyCompo from '@/components/combine/BodyCompo.vue';
// import FooterCompo from '@/components/layout/atoms/FooterCompo.vue';

import YeongHun from '@/components/page/kyh/YeongHun.vue';

export default {
    components: { KangHeewon, ExampleComponent },
    name: 'App',
    components: { YeongHun },

    data: () => ({
        //
    }),

    // components: {
    //     BodyCompo,
    //     FooterCompo,
    // },
};
</script>
