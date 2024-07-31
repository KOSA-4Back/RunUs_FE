<template>
    <div class="header">
        <div v-if="layout === 'default'" class="default-layout">
            <back-button></back-button>
            <h2>{{ headerState.title }}</h2>
        </div>
        <div v-if="layout === 'profile_info'">
            <v-container>
                <v-row justify="end" align="center">
                    <v-col cols="auto">
                        <v-btn icon color="primary" @click="onNotificationClick" class="notification-button">
                            <v-badge :content="1" color="red" overlap>
                                <v-icon large>mdi-bell-outline</v-icon>
                            </v-badge>
                        </v-btn>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn icon color="primary" @click="onKebabMenuClick" class="kebab-menu-button">
                            <v-icon large>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div v-if="layout === 'running'" class="runningLogo">
            <img :src="require('@/assets/runus_logo_horizon.png')" alt="Runus Logo" class="logo" />
        </div>
        <div v-if="layout === 'running_start'" class="running-start">
            <div class="distance-info">
                <span>목표거리 <span class="distance-value">3.5</span> km</span>
            </div>
            <round-button-item class="check-button" :width="68" :height="30">종료</round-button-item>
        </div>
        <div v-if="layout === 'chat_list'" class="chat-list">
            <chat-option-button-item></chat-option-button-item>
        </div>
        <div v-if="layout === 'chat_room'">
            <label>{{ headerState.chatTitle }}</label>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import RoundButtonItem from './item/button/RoundButtonItem.vue';
import ChatOptionButtonItem from './item/button/ChatOptionButtonItem.vue';
import BackButton from './item/button/BackButton.vue';

export default {
    name: 'HeaderCompo',
    components: {
        RoundButtonItem,
        ChatOptionButtonItem,
        BackButton,
    },
    computed: {
        ...mapGetters('header', ['currentLayout', 'header']),
        layout() {
            return this.currentLayout;
        },
        headerState() {
            return this.header;
        },
    },
};
</script>

<style scoped>
.header {
    width: 100%;
    height: 70px;
    background-color: #e2f3ff;
    margin-top: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    position: relative; /* Add relative positioning for absolute children */
    border: 1px solid #000;
}

.default-layout {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
}

.default-layout back-button {
    position: absolute;
    left: 16px; /* Adjust as needed */
}

.default-layout h2 {
    margin: 0 auto;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.notification-button {
  background-color: #e2f3ff; /* Adjust as needed */
  border-radius: 50%; /* Make the button round */
}

.kebab-menu-button {
  background-color: #e2f3ff; /* Adjust as needed */
  border-radius: 50%; /* Make the button round */
}

.runningLogo {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
}

.logo {
    width: 80%;
    height: 80%;
    object-fit: cover;
}

.running-start {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0 16px;
    height: 100%;
}

.distance-info {
    font-size: 16px;
    font-weight: bold;
    color: #5D5C5C;
}

.distance-value {
    font-weight: bold;
    color: #2196f3;
    text-decoration: underline;
}

.chat-list {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0 16px;
}
</style>
