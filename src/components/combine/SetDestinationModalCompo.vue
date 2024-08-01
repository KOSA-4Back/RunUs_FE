<template>
    <v-card class="pa-5 d-flex flex-column align-center justify-center text-center" rounded="xl" width="300" height="238" color="#e3f2fd">
        <div class="title-container">
            <Title text="목표 거리 설정" />
            <v-icon @click="close" class="close-icon">mdi-close</v-icon>
        </div>
        <v-row no-gutters class="d-flex justify-center align-center">
            <Input v-model="inputDistance" label="" />
            <span class="black--text"><h3>km</h3></span>
        </v-row>
        <v-row no-gutters class="d-flex justify-center align-center mt-4">
            <v-col cols="auto">
                <v-btn class="modal-text" color="blue darken-1" text @click="skip">건너뛰기</v-btn>
            </v-col>
            <v-col cols="auto">
                <v-btn class="modal-text" color="blue darken-1" text @click="setGoal">설정</v-btn>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import Title from '@/components/layout/atoms/item/modal/DistanceTitleItem.vue';
import Input from '@/components/layout/atoms/item/modal/DistanceInput.vue';

export default {
    components: {
        Title,
        Input,
    },
    props: {
        goalDistance: {
            type: Number,
            default: null,
        },
    },
    data() {
        return {
            inputDistance: this.goalDistance !== null ? String(this.goalDistance) : '', // goalDistance를 String으로 변환
        };
    },
    methods: {
        skip() {
            this.$emit('skip');
        },
        setGoal() {
            if (!this.inputDistance) {
                alert('목표 거리를 입력해주세요.');
                return;
            }
            this.$emit('set-goal', parseFloat(this.inputDistance)); // 입력값을 숫자로 변환하여 이벤트 전송
        },
        close() {
            this.$emit('close'); // 부모 컴포넌트로 close 이벤트 전송
        },
    },
};
</script>

<style scoped>
.fill-height {
    height: 100vh;
}

.d-flex {
    display: flex !important;
}

.align-center {
    align-items: center !important;
}

.justify-center {
    justify-content: center !important;
}

.text-center {
    text-align: center !important;
}

.pa-0 {
    padding: 0 !important;
}

.mt-4 {
    margin-top: 16px !important;
}

.black--text {
    color: black !important;
}

.modal-text {
    font-size: 14px; /* 폰트 크기를 크게 */
    font-weight: bold; /* 폰트를 굵게 */
}

.title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
}

.close-icon {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
}
</style>
