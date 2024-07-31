<template>
    <div class="content">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'ContentCompo',
};
</script>

<style scoped>
.content {
    width: 400px;
    height: 630px;
    background-color: #e2f3ff;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #000;
}
</style>
