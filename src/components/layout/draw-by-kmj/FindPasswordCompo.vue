<template>
    <div class="container">
        <div class="reset-box">
            <div class="header">
                <BackButton />
                <h1>비밀번호 찾기</h1>
            </div>
            <img :src="require('@/assets/runus_logo_skyblue.jpg')" alt="Runus Logo" class="logo" />
            <form @submit.prevent="sendResetCode">
                <div class="input-box">
                    <label for="email">가입한 이메일</label>
                    <input id="email" v-model="email" type="email" />
                </div>
                <LoginButton buttonClass="button" @click.prevent="sendResetCode">인증번호 발송</LoginButton>
            </form>
        </div>
        <confirm-alert-compo />
    </div>
</template>

<script>
import LoginButton from '@/components/layout/atoms/item/button/LoginButton.vue';
import BackButton from '@/components/layout/atoms/item/button/BackButton.vue';
import ConfirmAlertCompo from '@/components/combine/ConfirmAlertCompo.vue';

import { mapActions } from 'vuex';

export default {
    components: {
        LoginButton,
        BackButton,
        ConfirmAlertCompo,
    },
    data() {
        return {
            email: '',
            showModal: false,
        };
    },
    methods: {
        ...mapActions('alert', ['triggerAlert']),
        sendResetCode() {
            this.showModal = true;
            // 이메일로 인증번호 발송하는 로직 추가
            this.triggerAlert();
            setTimeout(() => {
                this.$router.push({ name: 'password-reset' });
            }, 2000); // 2초뒤 페이지 이동
        },
        goBack() {
            this.$router.go(-1);
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

.reset-box {
    width: 400px;
    height: 800px;
    padding: 20px;
    background-color: #e2f3ff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: center;
}
.logo {
    width: 300px;
    margin-bottom: 30px;
}
.header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 30px;
}
.header h1 {
    flex: 1;
    font-size: 32px;
    margin-right: 30px;
}

.input-box {
    margin-bottom: 20px;
}

label {
    display: block;
    text-align: left;
    margin-bottom: 5px;
    font-size: 16px;
}

input {
    width: 95%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 10px;
}
</style>
