<template>
    <div class="white-text">
        <h3 class="font-weight-bold">{{ senderId }}</h3>
        <p>{{ messageContent }}</p>
    </div>
</template>

<script>
export default {
    props: {
        senderId: {
            type: String,
            required: true,
        },
        messageContent: {
            type: String,
            default: '',
        },
    },
};
</script>

<style scoped>
.white-text {
    color: white !important;
}
</style>
