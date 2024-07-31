<template>
    <v-container>
        <custom-button text="요아정 정석 조합" :imageUrl="require('@/assets/runus_logo.png')" :clickHandler="handleClick" />
        <ChatOptionButton></ChatOptionButton>
        <ChatCreateItem></ChatCreateItem>
    </v-container>
</template>

<script>
import CustomButton from '../../layout/atoms/item/button/ChatButtonItem.vue';
import ChatOptionButton from '../../layout/atoms/item/button/ChatOptionButtonItem.vue';
import ChatCreateItem from '../../layout/atoms/item/button/ChatCreateItem.vue';

export default {
    name: 'ExampleComponent',
    components: {
        CustomButton,
        ChatOptionButton,
        ChatCreateItem,
    },
    methods: {
        handleClick() {
            alert('Button clicked!');
        },
    },
};
</script>
