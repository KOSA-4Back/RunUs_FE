<template>
    <div class="d-flex justify-space-between">
        <span class="black--text">{{ label }}</span>
        <span :class="[colorClass]">{{ value }}</span>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            default: 'black',
        },
    },
    computed: {
        colorClass() {
            return `${this.color}--text`;
        },
    },
};
</script>

<style scoped>
.black--text {
    color: black !important;
}

.red--text {
    color: red !important;
}
</style>
