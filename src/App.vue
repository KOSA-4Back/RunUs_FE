<template>
    <v-app>
        <v-main>
            <!--<router-view />-->
            <!-- <body-compo></body-compo>
        <footer-compo></footer-compo> -->
            <kang-heewon></kang-heewon>
            <example-component></example-component>
        </v-main>
    </v-app>
</template>

<script>
import ExampleComponent from './components/page/khw/ExampleComponent.vue';
import KangHeewon from './components/page/khw/KangHeewon.vue';
// import BodyCompo from '@/components/combine/BodyCompo.vue';
// import FooterCompo from '@/components/layout/atoms/FooterCompo.vue';

export default {
    components: { KangHeewon, ExampleComponent },
    name: 'App',

    data: () => ({
        //
    }),

    // components: {
    //     BodyCompo,
    //     FooterCompo,
    // },
};
</script>
