<template>
    <div class="home">
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
    created() {},
    methods: {},
};
</script>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #e2f3ff !important;
}
</style>
