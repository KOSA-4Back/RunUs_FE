<template>
    <div class="container">
        <div class="reset-box">
            <div class="header">
                <img alt="Back" class="back-arrow" src="@/assets/back-arrow.png" @click="goBack" />
                <h1>비밀번호 찾기</h1>
            </div>
            <img :src="require('@/assets/runus_logo_skyblue.jpg')" alt="Runus Logo" class="logo" />
            <form @submit.prevent="sendResetCode">
                <div class="input-box">
                    <label for="email">가입한 이메일</label>
                    <input id="email" v-model="email" type="email" />
                </div>
                <button class="reset-button" type="submit">인증번호 발송</button>
            </form>
        </div>
        <confirm-alert-compo :showAlert="showAlert" @hideAlert="hideAlert">인증번호가 발송되었습니다.</confirm-alert-compo>
        <!--
:showAlert = 부모 -> 자식 Props 를 통한 값 전달
@hideAlert = 자식 -> 부모 Events 전달
-->
    </div>
</template>

<script>
import ConfirmAlertCompo from '@/components/combine/ConfirmAlertCompo.vue';

export default {
    components: {
        ConfirmAlertCompo,
    },
    data() {
        return {
            email: '',
            //////////////////////showAlert: false,
        };
    },
    methods: {
        sendResetCode() {
            // 이메일로 인증번호 발송하는 로직 추가
            this.showAlert = true;
            setTimeout(() => {
                //this.$router.push({ name: 'password-reset' });
                this.showAlert = false;
            }, 2000); // 2초뒤 페이지 이동
        },
        hideAlert() {
            this.showAlert = false;
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
</style>
