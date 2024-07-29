<template>
    <v-container fluid class="fill-height d-flex align-center justify-center pa-0">
        <v-row justify="center" align="center" class="fill-height">
            <v-col cols="auto">
                <v-card class="pa-5 d-flex flex-column align-center justify-center text-center" rounded="xl" width="300" height="238" color="#e3f2fd">
                    <Title text="목표 거리 설정" />
                    <v-row no-gutters class="d-flex justify-center align-center">
                        <Input v-model="distance" label="" />
                        <span class="black--text"><h3>km</h3></span>
                    </v-row>
                    <v-row no-gutters class="d-flex justify-center mt-4">
                        <v-col cols="auto">
                            <!-- 이곳에 건너뛰기 버튼이 들어갑니다. -->
                        </v-col>
                        <v-col cols="auto">
                            <!-- 이곳에 등록 버튼이 들어갑니다. -->
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Title from '@/components/layout/atoms/item/modal/DistanceTitleItem.vue';
import Input from '@/components/layout/atoms/item/modal/DistanceInput.vue';

export default {
    components: {
        Title,
        Input,
    },
    data() {
        return {
            distance: '',
        };
    },
    methods: {
        onSkip() {
            // 건너뛰기 버튼 클릭 시 실행될 로직
            console.log('건너뛰기');
        },
        onSubmit() {
            // 등록 버튼 클릭 시 실행될 로직
            console.log('등록', this.distance);
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
</style>
