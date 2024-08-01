<template>
    <div class="container">
        <div class="chatList-box">
            <div class="header">
                <BackButton />
                <h2>{{ dynamicTitle }}</h2>
            </div>
            <v-card-text class="scroll-box">
                <v-list>
                    <v-list-item v-for="message in messages" :key="message._id" class="message-item">
                        <v-list-item-avatar>
                            <v-img :src="message.sender_profile_url" alt="Avatar"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="user-name">{{ message.sender_nick_name }}</v-list-item-title>
                            <v-list-item-subtitle class="message-content">{{ message.content }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card-text>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import BackButton from '@/components/layout/atoms/item/button/BackButton.vue';

export default {
    components: { BackButton },
    props: {
        id: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            default: '채팅방 이름',
        },
    },
    data() {
        return {
            dynamicTitle: this.title,
            messages: [],
        };
    },
    watch: {
        title(newTitle) {
            this.dynamicTitle = newTitle;
        },
    },
    created() {
        this.fetchMessages();
    },
    methods: {
        fetchMessages() {
            //  const chatRoomId = this.id;
            const userId = 49; // 실제 userId로 교체

            axios
                .get('http://localhost:8081/api/message/chatRoom', {
                    params: {
                        chatRoomId: '66a9c29fe5d4af5d2a724efd',
                        userId: userId,
                    },
                })
                .then((response) => {
                    this.messages = response.data;
                })
                .catch((error) => {
                    console.error('Error fetching messages:', error);
                });
        },
    },
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fff;
}

.chatList-box {
    width: 400px;
    height: 800px;
    padding: 20px;
    background-color: #e2f3ff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: center;
}

.header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px; /* 간격 조정 */
}

.header h2 {
    flex: 1;
    margin-right: 45px;
}

.scroll-box {
    height: calc(100% - 70px);
    overflow-y: auto;
    background-color: #e2f3ff;
}

/* Hide scrollbar for WebKit browsers */
.scroll-box::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for other browsers */
.scroll-box {
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
}

.message-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.user-name {
    font-weight: bold;
    color: #1e1e1e;
}

.message-content {
    background-color: #2196f3;
    color: white;
    padding: 10px;
    border-radius: 15px;
    max-width: 60%;
    word-break: break-word;
}

v-list-item-avatar img {
    border-radius: 50%;
}
</style>
