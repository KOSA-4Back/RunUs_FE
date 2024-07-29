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
                    <input-item label="키 (cm)" v-model="height" prependIcon="mdi-human-male-height" inputType="Number"></input-item>
                </div>
                <div class="input-box">
                    <label-item name="몸무게 (kg)" :required="true"></label-item>
                    <input-item2 label="몸무게 (kg)" v-model="weight" prependIcon="mdi-scale" inputType="Number"></input-item2>
                </div>
                <LoginButton buttonClass="button" @click.prevent="register">회원가입</LoginButton>
                <br />
                <br />
                <div>
                    <card-item viewFlag="active"></card-item>
                </div>
            </form>
        </div>
        <SignupCompleteCompo v-if="showModal" />
    </div>
</template>

<script>
import axios from '../../api/axios'; // 상대 경로로 수정
import LoginButton from '@/components/layout/atoms/item/button/LoginButton.vue';
import BackButton from '@/components/layout/atoms/item/button/BackButton.vue';
import DatePickerInputItem from '@/components/layout/atoms/item/input/DatePickerInputItem.vue';
import InputItem from '@/components/layout/atoms/item/input/InputItem.vue';
import InputItem2 from '@/components/layout/atoms/item/input/InputItem.vue';
import LabelItem from '../atoms/item/label/LabelItem.vue';
import CardItem from '../atoms/item/card/CardItem.vue';
import SignupCompleteCompo from '@/components/combine/SignupCompleteCompo.vue';

export default {
    components: {
        DatePickerInputItem,
        InputItem,
        InputItem2,
        LabelItem,
        CardItem,
        LoginButton,
        BackButton,
        SignupCompleteCompo,
    },
    data() {
        return {
            birth: '',
            height: '',
            weight: '',
            showModal: false,
        };
    },
    methods: {
        async register() {
            try {
                const response = await axios.post('/auth/register', {
                    birth: this.birth,
                    height: this.height,
                    weight: this.weight,
                });
                if (response.status === 200) {
                    this.showModal = true;
                    setTimeout(() => {
                        this.showModal = false;
                        this.$router.push({ name: 'test' });
                    }, 2000);
                } else {
                    alert('회원가입 실패. 다시 시도해주세요.');
                }
            } catch (error) {
                alert('에러가 발생했습니다: ' + error.message);
            }
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
