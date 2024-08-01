<template>
    <div class="container">
        <div class="chatList-box">
            <div class="header">
                <BackButton />
                <div class="option-button-container">
                    <ChatOptionButtonItem :selectedChatType="selectedChatType" @chat-type-selected="handleChatTypeSelected" />
                </div>
            </div>
            <v-card-text class="scroll-box">
                <v-list class="no-gap-list">
                    <v-list-item v-for="chat in chatRooms" :key="chat.id" class="no-gap-item">
                        <v-list-item-content class="no-gap-content">
                            <ChatButton :text="chat.title" :imageUrl="chat.randomImageUrl" :id="chat.id" :clickHandler="openChatRoom" />
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <router-view />
            </v-card-text>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import ChatOptionButtonItem from '@/components/layout/atoms/item/button/ChatOptionButtonItem.vue';
import BackButton from '@/components/layout/atoms/item/button/BackButton.vue';
import ChatButton from '@/components/layout/atoms/item/button/ChatButtonItem.vue';
import axios from 'axios';

export default Vue.extend({
    components: { BackButton, ChatOptionButtonItem, ChatButton },
    data() {
        return {
            chatRooms: [],
            randomImages: [
                'https://cdn.pixabay.com/photo/2018/02/23/19/56/medal-3176449_1280.jpg',
                'https://cdn.pixabay.com/photo/2021/02/04/15/56/shoe-5981770_1280.jpg',
                'https://cdn.pixabay.com/photo/2018/06/17/20/14/skateboard-3481338_1280.jpg',
                'https://cdn.pixabay.com/photo/2021/08/03/06/30/skateboard-6518594_1280.jpg',
                'https://cdn.pixabay.com/photo/2016/11/20/09/10/clouds-1842317_1280.jpg',
                'https://cdn.pixabay.com/photo/2023/10/21/11/46/sunset-8331285_1280.jpg',
                'https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_1280.jpg',
                'https://cdn.pixabay.com/photo/2020/02/02/23/50/beach-4814418_1280.jpg',
            ],
            lastUsedImageIndex: null,
            selectedChatType: 'openChat', // 기본값을 오픈 채팅으로 설정
        };
    },
    created() {
        this.fetchOpenChats();
    },
    methods: {
        fetchMyChats() {
            //const userId = localStorage.getItem('userId');
            const userId = 49;
            axios
                .get(`http://localhost:8081/api/chatRoom/user/${userId}`)
                .then((response) => {
                    this.chatRooms = response.data.map((chatRoom) => {
                        return {
                            ...chatRoom,
                            randomImageUrl: this.getRandomImage(),
                        };
                    });
                })
                .catch((error) => {
                    console.error('Error fetching my chats:', error);
                });
        },
        fetchOpenChats() {
            axios
                .get('http://localhost:8081/api/chatRoom/all/chatRoom') // 오픈 채팅방 API 엔드포인트
                .then((response) => {
                    this.chatRooms = response.data.map((chatRoom) => {
                        return {
                            ...chatRoom,
                            randomImageUrl: this.getRandomImage(),
                        };
                    });
                })
                .catch((error) => {
                    console.error('Error fetching open chats:', error);
                });
        },
        openChatRoom(title, id) {
            if (!id) {
                console.error('_ID 문제');
                return;
            }
            this.$router.push({ name: 'chat-room-detail', params: { title: title, id: id } });
        },
        getRandomImage() {
            let newImageIndex;
            do {
                newImageIndex = Math.floor(Math.random() * this.randomImages.length);
            } while (newImageIndex === this.lastUsedImageIndex);
            this.lastUsedImageIndex = newImageIndex;
            return this.randomImages[newImageIndex];
        },
        handleChatTypeSelected(type) {
            this.selectedChatType = type;
            if (type === 'myChat') {
                this.fetchMyChats();
            } else if (type === 'openChat') {
                this.fetchOpenChats();
            }
        },
    },
});
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
    width: 380px;
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
}

.option-button-container {
    margin-left: auto;
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

.no-gap-list {
    margin: 0;
    padding: 0;
}

.no-gap-item {
    margin: 0;
    padding: 0;
    background-color: #e2f3ff; /* 채팅방 리스트의 배경색과 동일하게 설정 */
}

.no-gap-content {
    margin: 10px 0; /* 항목 사이 간격 조정 */
    padding: 0;
    background-color: #e2f3ff; /* 채팅방 리스트의 배경색과 동일하게 설정 */
}
</style>
