<template>
    <button :class="buttonClass" @click="onClick">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        buttonClass: {
            type: String,
            default: 'update-button',
        },
    },
    methods: {
        onClick(event) {
            this.$emit('click', event);
        },
    },
};
</script>

<style scoped>
.update-button {
    width: 80%;
    padding: 10px;
    background-color: #3897db;
    color: #fff;
    border: 2px solid #4dd4ff;
    border-radius: 10px;
    cursor: pointer;
    font-size: 24px;
    font-weight: bold;
    margin-top: 30px;
}
</style>
