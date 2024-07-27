<template>
    <div class="container">
        <div class="login-box">
            <img :src="require('@/assets/runus_logo_skyblue.jpg')" alt="Runus Logo" class="logo" />
            <h1>로그인</h1>
            <v-form>
                <v-text-field v-model="email" label="이메일" solo class="rounded-xl" prepend-icon="mdi-email"></v-text-field>
                <v-text-field class="rounded-xl" v-model="password" label="비밀번호" solo prepend-icon="mdi-lock"></v-text-field>
                <v-btn class="login-button" block @click.prevent="login">로그인</v-btn>
            </v-form>
            <div class="links">
                <v-btn text @click.prevent="goToFindPassword">비밀번호 찾기</v-btn>
                <v-btn text @click.prevent="goToRegister">회원가입</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        goToRegister() {
            this.$router.push({ name: 'register' });
        },
        goToFindPassword() {
            this.$router.push({ name: 'find-password' });
        },
    },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
</style>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fff;
}

.login-box {
    width: 400px; /* Galaxy S20 Ultra 비율에 맞춘 너비 */
    height: 800px; /* Galaxy S20 Ultra 비율에 맞춘 높이 */
    padding: 20px;
    background-color: #e2f3ff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: center;
}

.logo {
    width: 300px;
    margin-bottom: 20px;
}

h1 {
    margin-bottom: 30px;
    font-size: 32px;
}

label {
    display: block;
    text-align: left;
    margin-bottom: 5px;
    font-size: 16px;
}

::v-deep .login-button {
    height: 45px !important;
    padding: 10px !important;
    background-color: #fff !important;
    color: #3897db !important;
    border: none !important;
    border-radius: 3px !important;
    cursor: pointer !important;
    font-size: 24px !important;
    font-weight: bold !important;
    margin-top: 10px !important;
}

.links {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    font-size: 14px;
}

.links a {
    color: #000000;
    text-decoration: none;
}
</style>
