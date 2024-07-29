<template>
    <v-container fluid class="fill-height d-flex align-center justify-center pa-0">
        <v-row justify="center" align="center" class="fill-height">
            <v-col cols="auto">
                <v-card class="pa-4" width="350" elevation="5">
                    <v-card-title class="text-h5 justify-center">채팅 방 제목</v-card-title>
                    <v-card-text>
                        <insert-title-item v-model="chatTitle" />
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" @click="createChatRoom">생성</v-btn>
                        <v-btn color="secondary" @click="cancel">취소</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import InsertTitleItem from '@/components/layout/atoms/item/modal/InsertTitleItem.vue';

export default {
    components: { InsertTitleItem },
    data() {
        return {
            chatTitle: '',
        };
    },
    methods: {
        createChatRoom() {
            this.$emit('create', this.chatTitle);
        },
        cancel() {
            this.$emit('cancel');
        },
    },
};
</script>

<style scoped>
.fill-height {
    height: 100vh;
}

.pa-0 {
    padding: 0 !important;
}
</style>
