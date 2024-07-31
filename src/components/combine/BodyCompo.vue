<template>
    <div class="body">
        <header-compo></header-compo>
        <content-compo></content-compo>
    </div>
</template>

<script>
import ContentCompo from '../layout/atoms/ContentCompo.vue';
import HeaderCompo from '../layout/atoms/HeaderCompo.vue';

export default {
    name: 'bodyCompo',
    components: {
        HeaderCompo,
        ContentCompo,
    },
};
</script>

<style scoped>
.body {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: #e2f3ff;
    box-sizing: border-box;
}
</style>
