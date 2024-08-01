<template>
  <div :class="['header', layoutClass]">
    <div v-if="layout === 'default'" class="default-layout">
      <back-button></back-button>
      <h2>{{ headerState.title }}</h2>
    </div>
    <div v-if="layout === 'profile_info'" class="profile-info-layout">
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
            <kebab-menu></kebab-menu>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div v-if="layout === 'running'" class="running-logo">
      <img :src="require('@/assets/runus_logo_horizon.png')" alt="Runus Logo" class="logo"/>
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
import {mapGetters} from 'vuex';

import RoundButtonItem from './item/button/RoundButtonItem.vue';
import ChatOptionButtonItem from './item/button/ChatOptionButtonItem.vue';
import BackButton from './item/button/BackButton.vue';
import KebabMenu from './item/kebabmenu/KebabMenu.vue';

export default {
  name: 'HeaderCompo',
  components: {
    RoundButtonItem,
    ChatOptionButtonItem,
    BackButton,
    KebabMenu,
  },
  computed: {
    ...mapGetters('header', ['currentLayout', 'header']),
    layout() {
      return this.currentLayout;
    },
    headerState() {
      return this.header;
    },
    layoutClass() {
      return {
        'default-layout': this.layout === 'default',
        'profile-info-layout': this.layout === 'profile_info',
        'running-logo': this.layout === 'running',
        'running-start': this.layout === 'running_start',
        'chat-list': this.layout === 'chat_list',
        'chat-room': this.layout === 'chat_room',
      };
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
  padding: 0 16px;
  border: 1px solid #000;
}

/* Default layout styles */
.default-layout {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.default-layout back-button {
  margin-right: auto;
}

.default-layout h2 {
  margin: 0 auto;
}

/* Profile info layout styles */
.profile-info-layout {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.notification-button {
  background-color: #e2f3ff; /* Adjust as needed */
  border-radius: 50%; /* Make the button round */
}

.kebab-menu-button {
  background-color: #e2f3ff; /* Adjust as needed */
  border-radius: 50%; /* Make the button round */
}

/* Running layout styles */
.running-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.logo {
  width: 80%;
  height: 80%;
  object-fit: cover;
}

/* Running start layout styles */
.running-start {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
}

.distance-info {
  font-size: 16px;
  font-weight: bold;
  color: #5d5c5c;
}

.distance-value {
  font-weight: bold;
  color: #2196f3;
  text-decoration: underline;
}

/* Chat list layout styles */
.chat-list {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0 16px;
}

/* Chat room layout styles */
.chat-room {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>