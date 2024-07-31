<template>
    <div class="container">
        <div class="register-box">
            <div class="header">
                <BackButton />
                <h1>회원가입</h1>
            </div>
            <ProfileImageButton :imageUrl="profileImageUrl" @image-changed="updateProfileImage" />
            <form @submit.prevent="goToProfileDetails">
                <div class="input-box">
                    <label-item name="이메일" :required="true"></label-item>
                    <div class="input-with-button">
                        <input-item id="email-input-item" label="이메일" v-model="email" prependIcon="mdi-email" inputType="email"></input-item>
                        <RoundButtonItem class="check-button" @click="validateAndCheckEmail" :width="90" :height="40">중복확인</RoundButtonItem>
                    </div>
                </div>
                <div class="input-box">
                    <label-item name="닉네임" :required="true"></label-item>
                    <div class="input-with-button">
                        <input-item id="nickname-input-item" label="닉네임" v-model="nickname" prependIcon="mdi-account" inputType="text"></input-item>
                        <RoundButtonItem class="check-button" @click="checkNickname" :width="90" :height="40">중복확인</RoundButtonItem>
                    </div>
                </div>
                <div class="input-box">
                    <label-item name="비밀번호" :required="true"></label-item>
                    <input-item id="password-input-item" label="비밀번호" v-model="password" prependIcon="mdi-lock" inputType="password"></input-item>
                </div>
                <div class="input-box">
                    <label-item name="비밀번호 확인" :required="true"></label-item>
                    <input-item id="confirm-password-input-item" label="비밀번호 확인" v-model="confirmPassword" prependIcon="mdi-lock" inputType="password"></input-item>
                </div>
                <LoginButton buttonClass="button" @click.prevent="goToProfileDetails">다음</LoginButton>
            </form>
        </div>
        <confirm-alert-compo :showAlert="showAlert" @hideAlert="hideAlert">{{ alertMessage }}</confirm-alert-compo>
    </div>
</template>

<script>
import axios from '../../api/axios';
import LoginButton from '@/components/layout/atoms/item/button/LoginButton.vue';
import ProfileImageButton from '@/components/layout/atoms/item/button/ProfileImageButton.vue';
import BackButton from '@/components/layout/atoms/item/button/BackButton.vue';
import InputItem from '@/components/layout/atoms/item/input/InputItem.vue';
import LabelItem from '@/components/layout/atoms/item/label/LabelItem.vue';
import RoundButtonItem from '@/components/layout/atoms/item/button/RoundButtonItem.vue';
import ConfirmAlertCompo from '@/components/combine/ConfirmAlertCompo.vue';
import { mapActions } from 'vuex';

export default {
    components: {
        LoginButton,
        ProfileImageButton,
        BackButton,
        InputItem,
        LabelItem,
        RoundButtonItem,
        ConfirmAlertCompo,
    },
    data() {
        return {
            email: '',
            nickname: '',
            password: '',
            confirmPassword: '',
            profileImageUrl: require('@/assets/runus_logo.png'),
            emailChecked: false,
            nicknameChecked: false,
            profileImageFile: null,
            showAlert: false,
            alertMessage: '',
        };
    },
    methods: {
        ...mapActions('imageStore', ['setUserData']), // 네임스페이스를 지정하여 액션 맵핑
        async validateAndCheckEmail() {
            if (!this.validateEmail(this.email)) {
                this.alertMessage = '올바른 이메일 형식이 아닙니다.';
                this.showAlert = true;
                setTimeout(() => {
                    this.hideAlert();
                }, 1300);
                return;
            }
            await this.checkEmail();
        },
        async checkEmail() {
            console.log('이메일 중복 확인 클릭');
            try {
                console.log('이메일:', this.email);

                const response = await axios.get('/auth/check-email', {
                    params: { email: this.email },
                });
                console.log('이메일 중복 확인 응답:', response);
                if (response.data.code === 'D95') {
                    this.alertMessage = '이미 사용 중인 이메일입니다.';
                    this.emailChecked = false;
                } else {
                    this.alertMessage = '사용 가능한 이메일입니다.';
                    this.emailChecked = true;
                }
            } catch (error) {
                console.error('이메일 확인 실패:', error.response);
                this.alertMessage = '이메일 확인 실패: ' + error.message;
                this.emailChecked = false;
            }
            this.showAlert = true;
            setTimeout(() => {
                this.hideAlert();
            }, 1300);
        },
        async checkNickname() {
            console.log('닉네임 중복 확인 클릭');
            try {
                const response = await axios.get('/auth/check-nickname', {
                    params: { nickname: this.nickname },
                });
                console.log('닉네임 중복 확인 응답:', response);
                if (response.data.code === 'D96') {
                    this.alertMessage = '이미 사용 중인 닉네임입니다.';
                    this.nicknameChecked = false;
                } else {
                    this.alertMessage = '사용 가능한 닉네임입니다.';
                    this.nicknameChecked = true;
                }
            } catch (error) {
                console.error('닉네임 확인 실패:', error);
                this.alertMessage = '닉네임 확인 실패: ' + error.message;
                this.nicknameChecked = false;
            }
            this.showAlert = true;
            setTimeout(() => {
                this.hideAlert();
            }, 1300);
        },
        goBack() {
            console.log('뒤로 가기 클릭');
            this.$router.go(-1);
        },
        updateProfileImage(newImageUrl, file) {
            console.log('프로필 이미지 업데이트:', newImageUrl);
            this.profileImageUrl = newImageUrl;
            this.profileImageFile = file;
        },
        validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        },
        goToProfileDetails() {
            console.log('다음 클릭');
            if (!this.email) {
                this.alertMessage = '이메일을 입력해 주세요.';
                this.showAlert = true;
                setTimeout(() => {
                    this.hideAlert();
                }, 1300);
                return;
            }
            if (!this.validateEmail(this.email)) {
                this.alertMessage = '올바른 이메일 형식이 아닙니다.';
                this.showAlert = true;
                setTimeout(() => {
                    this.hideAlert();
                }, 1300);
                return;
            }
            if (!this.nickname) {
                this.alertMessage = '닉네임을 입력해 주세요.';
                this.showAlert = true;
                setTimeout(() => {
                    this.hideAlert();
                }, 1300);
                return;
            }
            if (!this.password) {
                this.alertMessage = '비밀번호를 입력해 주세요.';
                this.showAlert = true;
                setTimeout(() => {
                    this.hideAlert();
                }, 1300);
                return;
            }
            if (!this.confirmPassword) {
                this.alertMessage = '비밀번호 확인을 입력해 주세요.';
                this.showAlert = true;
                setTimeout(() => {
                    this.hideAlert();
                }, 1300);
                return;
            }
            if (!this.emailChecked) {
                this.alertMessage = '이메일 중복 확인을 해주세요.';
                this.showAlert = true;
                setTimeout(() => {
                    this.hideAlert();
                }, 1300);
                return;
            }
            if (!this.nicknameChecked) {
                this.alertMessage = '닉네임 중복 확인을 해주세요.';
                this.showAlert = true;
                setTimeout(() => {
                    this.hideAlert();
                }, 1300);
                return;
            }
            if (this.password !== this.confirmPassword) {
                this.alertMessage = '비밀번호가 일치하지 않습니다.';
                this.showAlert = true;
                setTimeout(() => {
                    this.hideAlert();
                }, 1300);
                return;
            }
            this.setUserData({
                email: this.email,
                nickname: this.nickname,
                password: this.password,
                profileImageUrl: this.profileImageUrl,
                profileImageFile: this.profileImageFile,
            });
            this.$router.push({ name: 'profile-details' });
        },
        hideAlert() {
            this.showAlert = false;
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

.register-box {
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
    margin-bottom: 20px; /* 간격 조정 */
}

.header h1 {
    flex: 1;
    font-size: 32px;
    margin-right: 45px;
}

.input-box {
    margin-bottom: 5px; /* 입력 필드 간의 간격 줄이기 */
}

.input-with-button {
    display: flex;
    align-items: center;
    justify-content: space-between; /* 버튼을 오른쪽 끝에 정렬 */
}

label {
    display: block;
    text-align: left;
    margin-bottom: 5px;
    font-size: 16px;
}

input {
    width: calc(100% - 80px); /* 버튼 너비를 제외한 공간 할당 */
    flex: 1;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 10px;
}

.button {
    margin-top: 15px;
}

.check-button {
    margin-bottom: 25px;
    display: flex;
    align-items: center; /* 수직 가운데 정렬 */
    justify-content: center; /* 수평 가운데 정렬 */
}
</style>
