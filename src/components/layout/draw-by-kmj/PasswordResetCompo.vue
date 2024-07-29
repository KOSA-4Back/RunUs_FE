<template>
    <div class="container">
        <div class="reset-box">
            <div class="header">
                <BackButton />
                <h1>비밀번호 찾기</h1>
            </div>
            <img :src="require('@/assets/runus_logo_skyblue.jpg')" alt="Runus Logo" class="logo" />
            <form @submit.prevent="resetPassword">
                <div class="input-box">
                    <label for="email">가입한 이메일</label>
                    <input type="email" id="email" v-model="email" />
                </div>
                <div class="input-box">
                    <label for="code">인증 번호</label>
                    <div class="input-with-button">
                        <input type="text" class="verify-input" v-model="code" />
                        <LoginButton buttonClass="verify-button" @click.prevent="verifyCode">인증</LoginButton>
                    </div>
                </div>
                <div class="input-box">
                    <label for="new-password">비밀번호 변경</label>
                    <input type="password" id="new-password" v-model="newPassword" />
                </div>
                <div class="input-box">
                    <label for="confirm-password">비밀번호 확인</label>
                    <input type="password" id="confirm-password" v-model="confirmPassword" />
                </div>
                <LoginButton buttonClass="reset-button" @click.prevent="resetPassword">비밀번호 변경</LoginButton>
            </form>
        </div>
        <div v-if="showModal" class="modal-overlay">
            <div class="modal-content">
                <p>비밀번호가 변경되었습니다.</p>
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
            code: '',
            newPassword: '',
            confirmPassword: '',
            showModal: false,
        };
    },
    methods: {
        resetPassword() {
            // 비밀번호 변경 로직을 여기에 추가합니다.
            this.showModal = true;
            setTimeout(() => {
                this.showModal = false;
                this.$router.push({ name: 'login' }); // 로그인 페이지로 라우팅
            }, 2000); // 2초 후에 모달을 닫고 페이지 이동
        },
        verifyCode() {
            // 인증 번호 확인 로직 추가
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
.logo {
    width: 300px;
    margin-bottom: 20px;
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
.input-with-button {
    display: flex;
    align-items: center;
}
input {
    width: 95%;
    padding: 10px;
    font-size: 14px;
    border: none;
    border-radius: 10px;
}
.verify-input {
    width: calc(100% - 100px); /* Adjust width to fit button beside */
    padding: 10px;
    font-size: 14px;
    border: none;
    border-radius: 10px;
}
.verify-button {
    margin-left: 10px;
    padding: 10px;
    background-color: #ffffff;
    color: #3897db;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    width: 100px; /* Adjust width of the button */
}
.reset-button {
    width: 100%;
    padding: 10px;
    background-color: #fff;
    color: #3897db;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 24px;
    font-weight: bold;
    margin-top: 30px;
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
