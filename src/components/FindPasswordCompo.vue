<template>
    <div class="container">
        <div class="reset-box">
            <div class="header">
                <img src="@/assets/back-arrow.png" alt="Back" class="back-arrow" @click="goBack" />
                <h1>비밀번호 찾기</h1>
            </div>
            <img :src="require('@/assets/runus_logo_skyblue.jpg')" alt="Runus Logo" class="logo" />
            <form @submit.prevent="sendResetCode">
                <div class="input-box">
                    <label for="email">가입한 이메일</label>
                    <input type="email" id="email" v-model="email" />
                </div>
                <button type="submit" class="reset-button">인증번호 발송</button>
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
export default {
    data() {
        return {
            email: '',
            showModal: false,
        };
    },
    methods: {
        sendResetCode() {
            // 여기에 이메일로 인증번호를 발송하는 로직을 추가합니다.
            this.showModal = true;
            setTimeout(() => {
                this.showModal = false;
                this.$router.push({ name: 'password-reset' });
            }, 2000); // 2초 후에 모달을 닫고 페이지 이동
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
    width: 412px; /* Galaxy S20 Ultra 비율에 맞춘 너비 */
    height: 915px; /* Galaxy S20 Ultra 비율에 맞춘 높이 */
    padding: 20px;
    background-color: #e2f3ff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: center;
}
.header {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.back-arrow {
    width: 50px;
    margin-right: 10px;
    cursor: pointer;
}
.logo {
    width: 300px;
    margin-bottom: 30px;
}
h1 {
    flex: 1;
    font-size: 32px;
    margin-bottom: 30px;
    margin-right: 60px;
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
