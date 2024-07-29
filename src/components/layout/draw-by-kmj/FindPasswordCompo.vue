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
                    <input type="email" id="email" v-model="email" />
                </div>
                <LoginButton buttonClass="button" @click.prevent="sendResetCode">인증번호 발송</LoginButton>
            </form>
        </div>
        <div v-if="showModal" class="modal-overlay">
            <div class="modal-content">
                <p>인증번호가 발송되었습니다.</p>
            </div>
        </div>
    </div>
</template>

<script>
import LoginButton from '@/components/layout/atoms/item/button/LoginButton.vue';
import BackButton from '@/components/layout/atoms/item/button/BackButton.vue';

export default {
    components: {
        LoginButton,
        BackButton,
    },
    data() {
        return {
            email: '',
            showModal: false,
        };
    },
    methods: {
        sendResetCode() {
            this.showModal = true;
            setTimeout(() => {
                this.showModal = false;
                this.$router.push({ name: 'password-reset' });
            }, 2000);
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

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
.modal-content {
    background-color: #e2f3ff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.modal-content p {
    font-size: 20px;
    color: #000;
    font-weight: bold;
}
</style>
