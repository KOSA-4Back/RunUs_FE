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
                        <input-item label="이메일" v-model="email" prependIcon="mdi-email" inputType="email"></input-item>
                        <RoundButtonItem class="check-button" @click.prevent="checkEmail" :width="90" :height="40">중복확인</RoundButtonItem>
                    </div>
                </div>
                <div class="input-box">
                    <label-item name="닉네임" :required="true"></label-item>
                    <div class="input-with-button">
                        <input-item label="닉네임" v-model="nickname" prependIcon="mdi-account" inputType="text"></input-item>
                        <RoundButtonItem class="check-button" @click.prevent="checkNickname" :width="90" :height="40">중복확인</RoundButtonItem>
                    </div>
                </div>
                <div class="input-box">
                    <label-item name="비밀번호" :required="true"></label-item>
                    <input-item label="비밀번호" v-model="password" prependIcon="mdi-lock" inputType="password"></input-item>
                </div>
                <div class="input-box">
                    <label-item name="비밀번호 확인" :required="true"></label-item>
                    <input-item label="비밀번호 확인" v-model="confirmPassword" prependIcon="mdi-lock" inputType="password"></input-item>
                </div>
                <LoginButton buttonClass="button" @click.prevent="goToProfileDetails">다음</LoginButton>
            </form>
        </div>
    </div>
</template>

<script>
import axios from '../../api/axios'; // 상대 경로로 수정
import LoginButton from '@/components/layout/atoms/item/button/LoginButton.vue';
import ProfileImageButton from '@/components/layout/atoms/item/button/ProfileImageButton.vue';
import BackButton from '@/components/layout/atoms/item/button/BackButton.vue';
import InputItem from '@/components/layout/atoms/item/input/InputItem.vue';
import LabelItem from '@/components/layout/atoms/item/label/LabelItem.vue';
import RoundButtonItem from '@/components/layout/atoms/item/button/RoundButtonItem.vue';

export default {
    components: {
        LoginButton,
        ProfileImageButton,
        BackButton,
        InputItem,
        LabelItem,
        RoundButtonItem,
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
        async checkEmail() {
            try {
                const response = await axios.get(`/auth/check-email`, {
                    params: { email: this.email },
                });
                alert(response.data.message || '이메일 확인 성공');
            } catch (error) {
                alert('이메일 확인 실패: ' + error.message);
            }
        },
        async checkNickname() {
            try {
                const response = await axios.get(`/auth/check-nickname`, {
                    params: { nickname: this.nickname },
                });
                alert(response.data.message || '닉네임 확인 성공');
            } catch (error) {
                alert('닉네임 확인 실패: ' + error.message);
            }
        },
        goBack() {
            this.$router.go(-1);
        },
        updateProfileImage(newImageUrl) {
            this.profileImageUrl = newImageUrl;
        },
        goToProfileDetails() {
            this.$router.push({ name: 'profile-details' });
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
    margin-top: 20px;
}

.check-button {
    margin-bottom: 25px;
    display: flex;
    align-items: center; /* 수직 가운데 정렬 */
    justify-content: center; /* 수평 가운데 정렬 */
}
</style>
