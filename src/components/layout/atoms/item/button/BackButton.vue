<template>
    <button class="back-button" @click="goBack">
        <img src="@/assets/back-arrow.png" alt="Back" />
    </button>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.go(-1);
        },
    },
};
</script>

<style scoped>
.back-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.back-button img {
    width: 50px;
}
</style>
