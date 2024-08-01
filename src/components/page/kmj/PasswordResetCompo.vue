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
                    <CustomTextField v-model="email" label="가입한 이메일" inputType="email" prependIcon="mdi-email" />
                </div>
                <div class="input-box input-with-button">
                    <CustomTextField v-model="code" label="인증 번호" inputType="text" prependIcon="mdi-numeric" class="verify-input" @input="resetVerificationStatus" />
                    <LoginButton buttonClass="verify-button" @click.prevent="verifyCode">인증</LoginButton>
                </div>
                <div class="input-box">
                    <CustomTextField v-model="newPassword" label="비밀번호 변경" inputType="password" prependIcon="mdi-lock" />
                </div>
                <div class="input-box">
                    <CustomTextField v-model="confirmPassword" label="비밀번호 확인" inputType="password" prependIcon="mdi-lock-check" />
                </div>
                <LoginButton buttonClass="button" @click.prevent="resetPassword">비밀번호 변경</LoginButton>
            </form>
        </div>
        <confirm-alert-compo :showAlert="showAlert" @hideAlert="hideAlert">{{ alertMessage }}</confirm-alert-compo>
    </div>
</template>

<script>
import axios from '../../api/axios'; // 상대 경로로 수정
import LoginButton from '@/components/layout/atoms/item/button/LoginButton.vue';
import BackButton from '@/components/layout/atoms/item/button/BackButton.vue';
import ConfirmAlertCompo from '@/components/combine/ConfirmAlertCompo.vue';
import CustomTextField from '@/components/layout/atoms/item/input/InputItem.vue';

export default {
    components: {
        LoginButton,
        BackButton,
        ConfirmAlertCompo,
        CustomTextField,
    },
    data() {
        return {
            email: '',
            code: '',
            newPassword: '',
            confirmPassword: '',
            showAlert: false,
            alertMessage: '',
            isVerified: false, // 인증 상태 추가
        };
    },
    methods: {
        resetVerificationStatus() {
            this.isVerified = false;
        },
        async verifyCode() {
            try {
                const response = await axios.post('/auth/verify-code', { email: this.email, code: this.code });
                if (response.status === 200) {
                    this.alertMessage = '인증이 완료되었습니다.';
                    this.isVerified = true; // 인증 성공 시 상태 업데이트
                } else {
                    this.alertMessage = '인증에 실패했습니다.';
                    this.isVerified = false; // 인증 실패 시 상태 초기화
                }
            } catch (error) {
                this.alertMessage = '인증번호를 확인해주세요.';
                this.isVerified = false; // 인증 실패 시 상태 초기화
            }
            this.showAlert = true;
            setTimeout(() => {
                this.hideAlert();
            }, 2000);
        },
        async resetPassword() {
            if (!this.isVerified) {
                this.alertMessage = '먼저 인증을 완료해 주세요.';
                this.showAlert = true;
                setTimeout(() => {
                    this.hideAlert();
                }, 2000);
                return;
            }
            if (this.newPassword !== this.confirmPassword) {
                this.alertMessage = '비밀번호가 일치하지 않습니다.';
                this.showAlert = true;
                setTimeout(() => {
                    this.hideAlert();
                }, 2000);
                return;
            }
            try {
                const response = await axios.put('/auth/change-password', { email: this.email, changePassword: this.newPassword });
                if (response.status === 200) {
                    this.showAlert = true;
                    this.alertMessage = '비밀번호가 변경되었습니다.';
                    setTimeout(() => {
                        this.showAlert = false;
                        this.$router.push({ name: 'login' });
                    }, 2000);
                } else {
                    this.alertMessage = '비밀번호 변경에 실패했습니다.';
                    this.showAlert = true;
                    setTimeout(() => {
                        this.hideAlert();
                    }, 2000);
                }
            } catch (error) {
                this.alertMessage = '에러: ' + error.response.data;
                this.showAlert = true;
                setTimeout(() => {
                    this.hideAlert();
                }, 2000);
            }
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
    margin-bottom: 10px;
    align-items: center;
}
.input-with-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
label {
    display: block;
    text-align: left;
    margin-bottom: 5px;
    font-size: 16px;
}
.verify-input {
    flex: 1;
}
.verify-button {
    margin-left: 10px;
    margin-bottom: 30px;
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
</style>
