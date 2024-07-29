<template>
    <h3 class="black--text mb-4">{{ text }}</h3>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.black--text {
    color: black !important;
}

.mb-4 {
    margin-bottom: 16px !important;
}
</style>
