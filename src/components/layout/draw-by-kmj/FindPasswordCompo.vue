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
                    <label-item name="가입한 이메일" :required="true"></label-item>
                    <input-item label="이메일" v-model="email" prependIcon="mdi-email" inputType="email"></input-item>
                </div>
                <LoginButton buttonClass="button" @click.prevent="sendResetCode">인증번호 발송</LoginButton>
            </form>
        </div>
        <confirm-alert-compo :showAlert="showAlert" @hideAlert="hideAlert">인증번호가 발송되었습니다.</confirm-alert-compo>
    </div>
</template>

<script>
import axios from '../../api/axios'; // 상대 경로로 수정
import LoginButton from '@/components/layout/atoms/item/button/LoginButton.vue';
import BackButton from '@/components/layout/atoms/item/button/BackButton.vue';
import ConfirmAlertCompo from '@/components/combine/ConfirmAlertCompo.vue';
import InputItem from '@/components/layout/atoms/item/input/InputItem.vue';
import LabelItem from '@/components/layout/atoms/item/label/LabelItem.vue';

export default {
    components: {
        LoginButton,
        BackButton,
        ConfirmAlertCompo,
        InputItem,
        LabelItem,
    },
    data() {
        return {
            email: '',
            showAlert: false,
        };
    },
    methods: {
        async sendResetCode() {
            try {
                const response = await axios.post('/auth/forgot-password', { email: this.email });
                if (response.status === 200) {
                    this.showAlert = true;
                    setTimeout(() => {
                        this.hideAlert();
                    }, 2000);
                } else {
                    alert('인증번호 발송에 실패했습니다. 다시 시도해주세요.');
                }
            } catch (error) {
                alert('에러가 발생했습니다: ' + error.message);
            }
        },
        hideAlert() {
            this.showAlert = false;
            this.$router.push({ name: 'password-reset' });
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
</style>
