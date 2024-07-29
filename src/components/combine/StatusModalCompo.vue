<template>
    <v-container fluid class="fill-height d-flex align-center justify-center pa-0">
        <v-row justify="center" align="center" class="fill-height">
            <v-col cols="auto">
                <v-card class="pa-5 d-flex flex-column text-left rounded-xxl" rounded="lg" width="300" height="212" color="#ffffff">
                    <v-row no-gutters class="d-flex justify-space-between align-center mb-4">
                        <Title text="훌륭해요!" />
                        <v-icon @click="onClose">mdi-close</v-icon>
                    </v-row>
                    <!-- 여기에 거리 활동 시간 칼로리 바인딩 -->
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Title from '@/components/layout/atoms/item/modal/DistanceTitleItem.vue';
import { VIcon } from 'vuetify/lib';

export default {
    components: {
        Title,
        VIcon,
    },
    methods: {
        onClose() {
            // 모달 닫기 로직
            console.log('모달 닫기');
            this.$emit('close');
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

.text-left {
    text-align: left !important;
}

.mb-4 {
    margin-bottom: 16px !important;
}

.justify-space-between {
    justify-content: space-between !important;
}
</style>
