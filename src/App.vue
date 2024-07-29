<template>
    <v-app>
        <v-main>
            <router-view />
            <!-- <body-compo></body-compo>
        <footer-compo></footer-compo> -->
            <kang-heewon></kang-heewon>
            <example-component></example-component>
            <br />
            <hr />
            <br />
            <!--<router-view /> 라우터 뷰 잠시 비활성화 -->
            <yeong-hun />
            <hr />
            <br />
            <profile-details-compo></profile-details-compo>
            <!-- <body-compo></body-compo>
<footer-compo></footer-compo> -->

        </v-main>
    </v-app>
</template>

<script>
export default {
    components: {},

    name: 'App',

    data: () => ({}),
};
</script>
