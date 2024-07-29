<template>
    <v-container>
        <custom-button text="요아정 정석 조합" :imageUrl="require('@/assets/runus_logo.png')" :clickHandler="handleClick" />
        <ChatOptionButton></ChatOptionButton>
    </v-container>
</template>

<script>
import CustomButton from '../../atoms/item/button/ChatButtonItem.vue';
import ChatOptionButton from '../../atoms/item/button/ChatOptionButtonItem.vue';

export default {
    name: 'ExampleComponent',
    components: {
        CustomButton,
        ChatOptionButton,
    },
    methods: {
        handleClick() {
            alert('Button clicked!');
        },
    },
};
</script>
