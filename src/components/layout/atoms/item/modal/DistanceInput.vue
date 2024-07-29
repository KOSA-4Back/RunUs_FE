<template>
    <v-col cols="12" sm="8" md="20">
        <v-text-field label="거리" v-model="internalValue" class="black--text"></v-text-field>
    </v-col>
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
            default: '',
        },
    },
    data() {
        return {
            internalValue: this.value,
        };
    },
    watch: {
        value(newValue) {
            this.internalValue = newValue;
        },
        internalValue(newValue) {
            this.$emit('input', newValue);
        },
    },
};
</script>

<style scoped>
.black--text {
    color: black !important;
}
</style>
