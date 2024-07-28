<template>
    <v-app>
        <v-main>
            <!--<router-view /> 라우터 뷰 잠시 비활성화 -->
            <yeong-hun />
            <!-- <body-compo></body-compo>
<footer-compo></footer-compo> -->
        </v-main>
    </v-app>
</template>

<script>
// import BodyCompo from '@/components/combine/BodyCompo.vue';
// import FooterCompo from '@/components/layout/atoms/FooterCompo.vue';

import YeongHun from '@/components/page/kyh/YeongHun.vue';

export default {
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
