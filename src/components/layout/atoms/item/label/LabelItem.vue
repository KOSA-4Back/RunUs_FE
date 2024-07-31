<template>
    <label :class="customClass">{{ sanitizedLabel }}</label>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: 'Label',
        },
        required: {
            type: Boolean,
            default: false,
        },
        customClass: {
            type: String,
            default: '',
        },
    },
    computed: {
        sanitizedLabel() {
            return this.required ? this.name + '*' : this.name;
        },
    },
};
</script>

<style scoped>
label {
    display: block;
    text-align: left;
    margin-bottom: 5px;
    font-size: 16px;
}
.header_label {
    font-weight: bold;
    font-size: 24;
}
</style>
