<template>
    <v-container>
        <custom-button :text="here" :imageUrl="require('@/assets/runus_logo.png')" :clickHandler="handleClick" />
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
    data() {
        return {
            here: 'intial Text',
        };
    },
    methods: {
        handleClick() {
            alert('Button clicked!');
        },
    },
};
</script>
