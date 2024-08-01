<template>
    <div>
        <certification-alert-compo />
        <find-password-temp />
        <password-reset-temp />
        <create-chat-room-compo />
        <message-modal-compo avatar-src="https://www.w3schools.com/w3images/avatar2.png" message-content="반가워요" sender-id="무지" />
        <destination-modal-compo content="요아정에 도착했습니다!!" title="🎉 목표지점 도착 🎉" />
        <signup-complete-modal />
        <logout-confirm-modal message="로그아웃 하시겠습니까?" />
        <logout-confirm-modal message="정말 탈퇴하시겠습니까?" />
        <set-destination-modal-compo />
        <status-modal-compo />
        <web-socket></web-socket>
    </div>
</template>
<script setup>
import CertificationAlertCompo from '@/components/combine/ConfirmAlertCompo.vue';
import PasswordResetTemp from '@/components/page/kyh/PasswordResetTemp.vue';
import CreateChatRoomCompo from '@/components/combine/CreateChatRoomCompo.vue';
import FindPasswordTemp from '@/components/page/kyh/FindPasswordTemp.vue';
import MessageModalCompo from '@/components/combine/MessageModalCompo.vue';
import DestinationModalCompo from '@/components/combine/DestinationModalCompo.vue';
import SignupCompleteModal from '@/components/combine/SignupCompleteCompo.vue';
import LogoutConfirmModal from '@/components/combine/LogoutConfirmCompo.vue';
import SetDestinationModalCompo from '@/components/combine/SetDestinationModalCompo.vue';
import StatusModalCompo from '@/components/combine/StatusModalCompo.vue';
import WebSocket from '@/components/page/kyh/WebSocket.vue';
</script>

<style scoped></style>
