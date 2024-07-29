// src/components/layout/draw-by-kmj/LoginCompo.vue
<template>
    <div class="container">
        <div class="login-box">
            <img :src="require('@/assets/runus_logo_skyblue.jpg')" alt="Runus Logo" class="logo" />
            <h1>로그인</h1>
            <v-form>
                <v-text-field v-model="email" label="이메일" solo class="rounded-xl" prepend-icon="mdi-email"></v-text-field>
                <v-text-field class="rounded-xl" v-model="password" label="비밀번호" solo prepend-icon="mdi-lock" type="password"></v-text-field>
                <LoginButton buttonClass="button" @click.prevent="login">로그인</LoginButton>
            </v-form>
            <div class="links">
                <PasswordButton buttonClass="password-button" @click.prevent="goToFindPassword">비밀번호 찾기</PasswordButton>
                <PasswordButton buttonClass="password-button" @click.prevent="goToRegister">회원가입</PasswordButton>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '../../api/axios';
import LoginButton from '@/components/layout/atoms/item/button/LoginButton.vue';
import PasswordButton from '@/components/layout/atoms/item/button/PasswordButton.vue';

export default {
    components: {
        LoginButton,
        PasswordButton,
    },
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post('/auth/login', {
                    email: this.email,
                    password: this.password,
                });
                const token = response.data.Token;
                localStorage.setItem('token', token);
                alert('로그인 성공!');
                // 로그인 성공 후 다른 페이지로 이동
                this.$router.push({ name: 'test' });
            } catch (error) {
                alert('로그인 실패! 이메일과 비밀번호를 확인하세요.');
            }
        },
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
