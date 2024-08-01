<template>
    <div class="container">
        <div class="details-box">
            <div class="header">
                <BackButton />
                <h1>비밀번호 변경</h1>
            </div>
            <form @submit.prevent="changePassword">
                <div class="input-box">
                    <InputItem label="기존 비밀번호" v-model="currentPassword" inputType="password" prependIcon="mdi-lock"></InputItem>
                </div>
                <div class="input-box">
                    <InputItem label="변경할 비밀번호" v-model="newPassword" inputType="password" prependIcon="mdi-lock-reset"></InputItem>
                </div>
                <div class="input-box">
                    <InputItem label="비밀번호 확인" v-model="confirmPassword" inputType="password" prependIcon="mdi-lock-check"></InputItem>
                </div>
                <InformationUpdateButton @click.prevent="changePassword">비밀번호 변경</InformationUpdateButton>
            </form>
        </div>
        <confirm-alert-compo :showAlert="showAlert" @hideAlert="hideAlert">{{ alertMessage }}</confirm-alert-compo>
    </div>
</template>

<script>
import axios from '../../api/axios';
import BackButton from '@/components/layout/atoms/item/button/BackButton.vue';
import InputItem from '@/components/layout/atoms/item/input/InputItem.vue';
import InformationUpdateButton from '@/components/layout/atoms/item/button/InformationUpdateButton.vue';
import ConfirmAlertCompo from '@/components/combine/ConfirmAlertCompo.vue';

export default {
    components: {
        BackButton,
        InputItem,
        InformationUpdateButton,
        ConfirmAlertCompo,
    },
    data() {
        return {
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
            showAlert: false,
            alertMessage: '',
        };
    },
    methods: {
        async changePassword() {
            if (!this.currentPassword || !this.newPassword || !this.confirmPassword) {
                this.alertMessage = '모든 필드를 입력해주세요.';
                this.showAlert = true;
                this.autoHideAlert(false);
                return;
            }
            if (this.newPassword !== this.confirmPassword) {
                this.alertMessage = '비밀번호가 일치하지 않습니다.';
                this.showAlert = true;
                this.autoHideAlert(false);
                return;
            }
            try {
                const userId = localStorage.getItem('user_id'); // user_id를 로컬 저장소에서 가져옵니다.
                if (!userId) {
                    this.alertMessage = '사용자 ID를 찾을 수 없습니다. 다시 로그인해주세요.';
                    this.showAlert = true;
                    this.autoHideAlert(false);
                    return;
                }
                await axios.put(`/member/change-password/${userId}`, {
                    password: this.currentPassword,
                    changePassword: this.newPassword,
                });
                this.alertMessage = '비밀번호가 변경되었습니다.';
                this.showAlert = true;
                this.autoHideAlert(true);
            } catch (error) {
                console.error('비밀번호 변경 오류:', error);
                this.alertMessage = '비밀번호 변경 중 오류가 발생했습니다. 다시 시도해주세요.';
                this.showAlert = true;
                this.autoHideAlert(false);
            }
        },
        hideAlert() {
            this.showAlert = false;
        },
        autoHideAlert(success) {
            setTimeout(() => {
                this.hideAlert();
                if (success) {
                    this.$router.go(-1);
                }
            }, 1500); // 1.5초 후에 모달 창을 자동으로 숨김
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
    position: relative; /* 부모 요소에 상대적 위치 설정 */
    background-color: #fff;
}
.details-box {
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
    margin-bottom: 100px;
}
.header h1 {
    flex: 1;
    font-size: 32px;
    margin-right: 20px;
}
.input-box {
    margin-bottom: 15px;
}
input {
    width: 95%;
    padding: 10px;
    font-size: 14px;
    border: none;
    border-radius: 10px;
}
</style>
