<template>
    <div>
        <v-text-field v-model="inputValue" :label="label" :type="inputType" :prepend-icon="prependIcon" solo class="rounded-xl" @input="filterInput"></v-text-field>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            default: 'label',
        },
        prependIcon: {
            type: String,
            default: 'mdi-human-male-height',
        },
        inputType: {
            type: String,
            default: 'text',
        },
    },
    data() {
        return {
            inputValue: this.value,
        };
    },
    methods: {
        filterInput() {
            this.$emit('input', this.inputValue);
        },
    },
};
</script>

<style scoped>
@import '@/scss/variables.scss';

.custom-text-field {
    background-color: #e3f2fd !important;
    height: 45px !important;
}
</style>
