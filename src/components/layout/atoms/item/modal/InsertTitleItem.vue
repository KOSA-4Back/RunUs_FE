<template>
    <div>
        <!-- :label="label"(Props) :placeholder="placeholder"(Props) @input="updateValue"(Events) -->
        <v-text-field class="rounded-xl" v-model="inputValue" :placeholder="placeholder" @input="updateValue" outlined label="채팅방 이름"></v-text-field>
    </div>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            inputValue: this.value,
        };
    },
    methods: {
        updateValue() {
            this.$emit('keyup', this.inputValue);
        },
    },
};
</script>

<style scoped></style>
