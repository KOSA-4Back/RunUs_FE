<template>
    <v-btn class="chatCre-button" @click="handleClick" color="#3897DB" fab dark small bottom>
        <v-icon>mdi-plus</v-icon>
    </v-btn>
</template>

<script>
export default {
    name: 'ChatCreButton',
    methods: {
        handleClick() {
            this.$emit('button-click');
        },
    },
};
</script>

<style scoped></style>
