<template>
    <v-badge color="pink" overlap bordered class="badge">
        <slot></slot>
    </v-badge>
</template>

<script>
export default {};
</script>

<style scoped>
.badge {
    position: absolute;
    top: -10px;
    right: -5px;
}
</style>
