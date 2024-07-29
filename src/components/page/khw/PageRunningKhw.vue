<template>
    <div>
        <h2>RunUS</h2>
        <KakaoMapItem :latitude="latitude" :longitude="longitude" />
        <br />
        <RoundButton :elevation="3" :width="150" :height="60" :clickHandler="showModal"> 시작 </RoundButton>
        <v-dialog v-model="isModalVisible" persistent max-width="400">
            <SetDestinationModalCompo @skip="onSkip" @submit="onSubmit" />
        </v-dialog>
    </div>
</template>

<script>
import RoundButton from '../../layout/atoms/item/button/RoundButtonItem.vue';
import KakaoMapItem from '../../layout/atoms/item/map/kakaoMapItem.vue';
import SetDestinationModalCompo from '@/components/combine/SetDestinationModalCompo.vue';

export default {
    components: {
        KakaoMapItem,
        RoundButton,
        SetDestinationModalCompo,
    },
    data() {
        return {
            latitude: 37.5665, // 실제 위도 값
            longitude: 126.978, // 실제 경도 값
            isModalVisible: false,
        };
    },
    methods: {
        showModal() {
            this.isModalVisible = true;
        },
        onSkip() {
            console.log('건너뛰기');
            this.isModalVisible = false;
        },
        onSubmit(distance) {
            console.log('등록', distance);
            this.isModalVisible = false;
        },
    },
};
</script>

<style>
/* 스타일이 필요하다면 여기에 작성 */
</style>
