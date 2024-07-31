<template>
    <div class="body">
        <header-compo></header-compo>
        <content-compo></content-compo>
    </div>
</template>

<script>
import HeaderCompo from '../layout/atoms/HeaderCompo.vue';
import ContentCompo from '../layout/atoms/ContentCompo.vue';

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
    width: 100%;
    height: 100%;
}

.header {
    flex: 0 1 auto; /* Header의 크기는 콘텐츠에 맞춰지고, 필요하면 늘어남 */
}

.content {
    flex: 1 1 auto; /* Content는 남은 공간을 채움 */
}
</style>
