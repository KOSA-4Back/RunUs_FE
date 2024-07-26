<template>
    <div class="container">
        <div class="login-box">
            <img :src="require('@/assets/runus_logo_skyblue.jpg')" alt="Runus Logo" class="logo" />
            <h1>로그인</h1>
            <form>
                <div class="input-box">
                    <label for="email">이메일</label>
                    <input type="email" id="email" v-model="email" />
                </div>
                <div class="input-box">
                    <label for="password">비밀번호</label>
                    <input type="password" id="password" v-model="password" />
                </div>
                <button type="submit" class="login-button">로그인</button>
            </form>
            <div class="links">
                <a href="#" @click.prevent="goToFindPassword">비밀번호 찾기</a>
                <a href="#" @click.prevent="goToRegister">회원가입</a>
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

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fff;
}
.login-box {
    width: 412px; /* Galaxy S20 Ultra 비율에 맞춘 너비 */
    height: 915px; /* Galaxy S20 Ultra 비율에 맞춘 높이 */
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
.input-box {
    margin-bottom: 20px;
}
label {
    display: block;
    text-align: left;
    margin-bottom: 5px;
    font-size: 16px;
}
input {
    width: 95%;
    padding: 10px;
    font-size: 14px;
    border: none;
    border-radius: 10px;
}
.login-button {
    width: 100%;
    padding: 10px;
    background-color: #fff;
    color: #3897db;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 24px;
    font-weight: bold;
    margin-top: 30px;
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
