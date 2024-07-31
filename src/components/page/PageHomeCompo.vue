<template>
    <div id="home">
        <body-compo />
        <footer-compo />
    </div>
</template>

<script>
import BodyCompo from '../combine/BodyCompo.vue';
import FooterCompo from '../layout/atoms/FooterCompo.vue';

export default {
    components: {
        BodyCompo,
        FooterCompo,
    },
};
</script>

<style scoped>
#home {
    display: flex;
    height: 800px; /* body 700px + footer 100px */
    width: 100%;
}
</style>
