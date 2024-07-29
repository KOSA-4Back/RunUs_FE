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
        <div v-if="showModal" class="modal-overlay">
            <div class="modal-content">
                <img src="@/assets/check-mark.png" alt="Check Mark" class="check-mark" />
                <p>회원가입 완료!</p>
            </div>
        </div>
    </div>
</template>

<script>
import LoginButton from '@/components/layout/atoms/item/button/LoginButton.vue';
import BackButton from '@/components/layout/atoms/item/button/BackButton.vue';
import DatePickerInputItem from '@/components/layout/atoms/item/input/DatePickerInputItem.vue';
import InputItem from '@/components/layout/atoms/item/input/InputItem.vue';
import InputItem2 from '@/components/layout/atoms/item/input/InputItem.vue';
import LabelItem from '../atoms/item/label/LabelItem.vue';
import CardItem from '../atoms/item/card/CardItem.vue';

export default {
    components: {
        DatePickerInputItem,
        InputItem,
        InputItem2,
        LabelItem,
        CardItem,
        LoginButton,
        BackButton,
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
        goBack() {
            this.$router.go(-1);
        },
        register() {
            // 회원가입 로직을 여기에 추가합니다.
            this.showModal = true;
            setTimeout(() => {
                this.showModal = false;
                this.$router.push({ name: 'test' }); // test.vue로 라우팅
            }, 2000); // 2초 후에 모달을 닫고 페이지 이동
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

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
.modal-content {
    background-color: #e2f3ff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 200px;
    height: 250px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.modal-content img.check-mark {
    width: 100px;
    margin-top: 20px;
    margin-bottom: 10px;
}
.modal-content p {
    margin-top: 50px;
    font-size: 24px;
    color: #000000;
    font-weight: bold;
}
</style>
