<template>
    <div class="container">
        <div class="details-box">
            <div class="header">
                <BackButton />
                <h1>회원가입</h1>
            </div>
            <form @submit.prevent="register">
                <div class="input-box">
                    <label-item name="생년월일" :required="true"></label-item>
                    <date-picker-input-item label="생년-월-일" v-model="birth"></date-picker-input-item>
                </div>
                <div class="input-box">
                    <label-item name="키 (cm)" :required="true"></label-item>
                    <input-item label="키 (cm)" v-model="height" prependIcon="mdi-human-male-height" inputType="number"></input-item>
                </div>
                <div class="input-box">
                    <label-item name="몸무게 (kg)" :required="true"></label-item>
                    <input-item2 label="몸무게 (kg)" v-model="weight" prependIcon="mdi-scale" inputType="number"></input-item2>
                </div>
                <LoginButton buttonClass="button" @click.prevent="register">회원가입</LoginButton>
            </form>
        </div>
        <SignupCompleteCompo :dialog="showDialog" @update:dialog="showDialog = $event" />
        <confirm-alert-compo :showAlert="showAlert" @hideAlert="hideAlert">{{ alertMessage }}</confirm-alert-compo>
    </div>
</template>

<script>
import axios from '../../api/axios';
import LoginButton from '@/components/layout/atoms/item/button/LoginButton.vue';
import BackButton from '@/components/layout/atoms/item/button/BackButton.vue';
import DatePickerInputItem from '@/components/layout/atoms/item/input/DatePickerInputItem.vue';
import InputItem from '@/components/layout/atoms/item/input/InputItem.vue';
import InputItem2 from '@/components/layout/atoms/item/input/InputItem.vue';
import LabelItem from '@/components/layout/atoms/item/label/LabelItem.vue';
import SignupCompleteCompo from '@/components/combine/SignupCompleteCompo.vue';
import ConfirmAlertCompo from '@/components/combine/ConfirmAlertCompo.vue';
import { mapState } from 'vuex';

export default {
    components: {
        DatePickerInputItem,
        InputItem,
        InputItem2,
        LabelItem,
        LoginButton,
        BackButton,
        SignupCompleteCompo,
        ConfirmAlertCompo,
    },
    computed: {
        ...mapState('imageStore', {
            email: (state) => state.userData.email,
            nickname: (state) => state.userData.nickname,
            password: (state) => state.userData.password,
            profileImageUrl: (state) => state.userData.profileImageUrl,
            profileImageFile: (state) => state.userData.profileImageFile,
        }),
    },
    data() {
        return {
            birth: '',
            height: '',
            weight: '',
            showDialog: false,
            showAlert: false,
            alertMessage: '',
        };
    },
    methods: {
        openModal() {
            this.showDialog = true;
            setTimeout(() => {
                this.showDialog = false;
                this.$router.push({ name: 'login' });
            }, 3000);
        },
        async register() {
            if (!this.birth) {
                this.alertMessage = '생년월일을 입력해 주세요.';
                this.showAlert = true;
                setTimeout(() => {
                    this.hideAlert();
                }, 2000);
                return;
            }
            if (!this.height) {
                this.alertMessage = '키를 입력해 주세요.';
                this.showAlert = true;
                setTimeout(() => {
                    this.hideAlert();
                }, 2000);
                return;
            }
            if (!this.weight) {
                this.alertMessage = '몸무게를 입력해 주세요.';
                this.showAlert = true;
                setTimeout(() => {
                    this.hideAlert();
                }, 2000);
                return;
            }
            try {
                const formData = new FormData();
                formData.append(
                    'form',
                    new Blob(
                        [
                            JSON.stringify({
                                email: this.email,
                                nickName: this.nickname,
                                password: this.password,
                                birth: this.birth,
                                height: this.height,
                                weight: this.weight,
                            }),
                        ],
                        { type: 'application/json' },
                    ),
                );
                if (this.profileImageFile) {
                    formData.append('file', this.profileImageFile);
                }
                const response = await axios.post('/auth/register', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                if (response.status === 201) {
                    this.openModal();
                } else {
                    this.alertMessage = '회원가입 실패. 다시 시도해주세요.';
                    this.showAlert = true;
                    setTimeout(() => {
                        this.hideAlert();
                    }, 2000);
                }
            } catch (error) {
                this.alertMessage = '에러가 발생했습니다: ' + error.message;
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
    margin-bottom: 30px;
}
.header h1 {
    flex: 1;
    font-size: 32px;
    margin-right: 45px;
}
.input-box {
    margin-bottom: 10px;
}
input {
    width: 95%;
    padding: 10px;
    font-size: 14px;
    border: none;
    border-radius: 10px;
}
</style>
