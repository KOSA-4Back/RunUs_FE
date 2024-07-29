<!-- SetDestinationModalCompo.vue -->
<template>
    <v-card class="pa-5 d-flex flex-column align-center justify-center text-center" rounded="xl" width="300" height="238" color="#e3f2fd">
        <Title text="목표 거리 설정" />
        <v-row no-gutters class="d-flex justify-center align-center">
            <Input v-model="distance" label="" />
            <span class="black--text"><h3>km</h3></span>
        </v-row>
        <v-row class="d-flex justify-center mt-4 button-row">
            <v-col cols="auto">
                <SkipButton :width="80" :height="30" @click="$emit('skip')">건너뛰기</SkipButton>
            </v-col>
            <v-col cols="auto">
                <SetGoalButton :width="80" :height="30" @click="handleSetGoal">등록</SetGoalButton>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import Title from '@/components/layout/atoms/item/modal/DistanceTitleItem.vue';
import Input from '@/components/layout/atoms/item/modal/DistanceInput.vue';
import SkipButton from '@/components/layout/atoms/item/button/RoundButtonItem.vue';
import SetGoalButton from '@/components/layout/atoms/item/button/RoundButtonItem.vue';

export default {
    components: {
        Title,
        Input,
        SkipButton,
        SetGoalButton,
    },
    data() {
        return {
            distance: '',
        };
    },
    methods: {
        handleSetGoal() {
            if (this.distance && !isNaN(this.distance)) {
                this.$emit('set-goal', this.distance);
            } else {
                alert('유효한 거리를 입력해주세요.');
            }
        },
    },
};
</script>
