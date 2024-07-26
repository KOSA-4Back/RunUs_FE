<template>
    <div class="container">
        <div class="register-box">
            <div class="header">
                <img src="@/assets/back-arrow.png" alt="Back" class="back-arrow" @click="goBack" />
                <h1>회원가입</h1>
            </div>
            <div class="profile-pic">
                <img :src="profileImageUrl" alt="Profile" class="profile-image" @click="selectProfileImage" />
                <img :src="require('@/assets/edit.png')" alt="Edit" class="edit-icon" @click="selectProfileImage" />
                <input type="file" ref="fileInput" @change="onFileChange" style="display: none" accept="image/*" />
            </div>
            <form @submit.prevent="goToProfileDetails">
                <div class="input-box">
                    <label for="email">이메일*</label>
                    <div class="input-with-button">
                        <input type="email" id="email" v-model="email" />
                        <button type="button" class="check-button">중복확인</button>
                    </div>
                </div>
                <div class="input-box">
                    <label for="nickname">닉네임*</label>
                    <div class="input-with-button">
                        <input type="text" id="nickname" v-model="nickname" />
                        <button type="button" class="check-button">중복확인</button>
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
                <button type="submit" class="register-button">다음</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
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
        selectProfileImage() {
            this.$refs.fileInput.click();
        },
        onFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.profileImageUrl = e.target.result;
                };
                reader.readAsDataURL(file);
            }
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
}
.back-arrow {
    width: 50px;
    margin-right: 10px;
    cursor: pointer;
}
h1 {
    flex: 1;
    font-size: 32px;
    margin-bottom: 30px;
    margin-right: 60px;
}
.profile-pic {
    position: relative;
    margin-bottom: 20px;
}
.profile-image {
    width: 200px;
    border-radius: 50%;
    cursor: pointer;
}
.edit-icon {
    position: absolute;
    bottom: 0;
    right: 135px;
    width: 24px;
    cursor: pointer;
    background-color: white;
    border-radius: 50%;
    padding: 2px;
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
    border: none;
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
.register-button {
    width: 100%;
    padding: 10px;
    background-color: #fff;
    color: #3897db;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 24px;
    font-weight: bold;
    margin-top: 10px;
}
</style>
