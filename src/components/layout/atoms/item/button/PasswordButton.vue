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
            default: 'password-button',
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
.password-button {
    padding: 10px;
    background-color: none;
    color: #757575;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 14px;
}
</style>
