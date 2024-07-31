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
            default: 'button',
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
.button {
    width: 100%;
    padding: 10px;
    background-color: #fff;
    color: #3897db;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 24px;
    font-weight: bold;
    margin-top: 30px;
}
</style>
