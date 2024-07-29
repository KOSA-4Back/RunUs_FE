<template>
    <div>
        <certification-alert-compo />
        <find-password-temp />
        <password-reset-temp />
        <create-chat-room-compo />
        <message-modal-compo avatar-src="https://www.w3schools.com/w3images/avatar2.png" sender-id="무지" message-content="반가워요" />
        <destination-modal-compo title="🎉 목표지점 도착 🎉" content="요아정에 도착했습니다!!" />
        <signup-complete-modal />
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
</script>

<style scoped></style>
