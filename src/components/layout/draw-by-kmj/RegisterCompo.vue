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
                    <label for="email">이메일*</label>
                    <div class="input-with-button">
                        <input type="email" id="email" v-model="email" />
                        <LoginButton buttonClass="check-button" @click.prevent="checkEmail">중복확인</LoginButton>
                    </div>
                </div>
                <div class="input-box">
                    <label for="nickname">닉네임*</label>
                    <div class="input-with-button">
                        <input type="text" id="nickname" v-model="nickname" />
                        <LoginButton buttonClass="check-button" @click.prevent="checkNickname">중복확인</LoginButton>
                    </div>
                </div>
                <div class="input-box">
                    <label for="password">비밀번호*</label>
                    <input type="password" id="password" v-model="password" />
                </div>
                <div class="input-box">
                    <label for="confirm-password">비밀번호 확인*</label>
                    <input type="password" id="confirm-password" v-model="confirmPassword" />
                </div>
                <LoginButton buttonClass="button" @click.prevent="goToProfileDetails">다음</LoginButton>
            </form>
        </div>
    </div>
</template>

<script>
import LoginButton from '@/components/layout/atoms/item/button/LoginButton.vue';
import ProfileImageButton from '@/components/layout/atoms/item/button/ProfileImageButton.vue';
import BackButton from '@/components/layout/atoms/item/button/BackButton.vue';

export default {
    components: {
        LoginButton,
        ProfileImageButton,
        BackButton,
    },
    data() {
        return {
            email: '',
            nickname: '',
            password: '',
            confirmPassword: '',
            profileImageUrl: require('@/assets/runus_logo.png'), // 기본 프로필 이미지
        };
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        updateProfileImage(newImageUrl) {
            this.profileImageUrl = newImageUrl;
        },
        goToProfileDetails() {
            this.$router.push({ name: 'profile-details' });
        },
        checkEmail() {
            // 이메일 중복 확인 로직 추가
        },
        checkNickname() {
            // 닉네임 중복 확인 로직 추가
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
    width: 400px; /* Galaxy S20 Ultra 비율에 맞춘 너비 */
    height: 800px; /* Galaxy S20 Ultra 비율에 맞춘 높이 */
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
    margin-bottom: 20px;
}

.input-with-button {
    display: flex;
    align-items: center;
}

label {
    display: block;
    text-align: left;
    margin-bottom: 5px;
    font-size: 16px;
}

input {
    width: 95%;
    flex: 1;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 10px;
}

.check-button {
    margin-left: 10px;
    padding: 10px;
    background-color: #3897db;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 14px;
}
</style>
