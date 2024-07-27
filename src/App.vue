<template>
    <div id="app">
        <body-compo></body-compo>
        <footer-compo></footer-compo>
    </div>
</template>

<script>
import BodyCompo from '@/components/combine/BodyCompo.vue';
import FooterCompo from '@/components/layout/atoms/FooterCompo.vue';

export default {
    name: 'App',
    components: {
        BodyCompo,
        FooterCompo,
    },
};
</script>

<style scoped>
#app {
    display: flex;
    flex-direction: column;
    height: 800px;
    width: 104%;
    background-color: #e2f3ff;
}
</style>
