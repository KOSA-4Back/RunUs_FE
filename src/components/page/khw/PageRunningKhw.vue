<template>
    <div>
        <h2>RunUS</h2>
        <div v-if="isTracking" class="tracking-info">
            <p>목표 거리: {{ formattedTargetDistance }}</p>
            <RoundButton :elevation="3" :width="48" :height="35" @click="endTracking">종료</RoundButton>
        </div>
        <KakaoMapItem
            :latitude="latitude"
            :longitude="longitude"
            :targetDistance="targetDistance"
            :polylinePath="polylinePath"
            :isTracking="isTracking"
            @update-distance="updateDistance"
            @update-time="updateTime"
        />
        <br />
        <div v-if="!isTracking">
            <RoundButton :elevation="3" :width="150" :height="60" @click="showModal">시작</RoundButton>
        </div>
        <v-dialog v-model="isModalVisible" persistent max-width="300">
            <SetDestinationModalCompo @skip="onSkip" @set-goal="onSubmit" />
        </v-dialog>
        <div v-if="isTracking">
            <p>이동 거리: {{ formattedDistance }} m</p>
            <p>활동 시간: {{ formattedTime }}</p>
            <p>소모 칼로리: {{ formattedCalories }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'; // Axios 인스턴스를 임포트합니다.
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
            latitude: 37.5665,
            longitude: 126.978,
            isModalVisible: false,
            targetDistance: null,
            polylinePath: [], // 현재 경로를 저장할 배열
            isTracking: false,
            totalDistance: 0, // 이동 거리를 저장할 변수
            elapsedTime: 0, // 경과 시간을 저장할 변수
            weight: 50, // 기본 체중 값
        };
    },
    computed: {
        formattedTargetDistance() {
            return (this.targetDistance / 1000).toFixed(2) + ' km';
        },
        formattedDistance() {
            return Math.floor(this.totalDistance); // 소수점 제거
        },
        formattedTime() {
            const minutes = Math.floor(this.elapsedTime / 60);
            const seconds = this.elapsedTime % 60;
            return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        },
        formattedCalories() {
            return Math.floor(this.weight * (this.totalDistance / 1000)) + ' kcal'; // 소수점 제거
        },
    },
    methods: {
        showModal() {
            this.isModalVisible = true;
        },
        async onSkip() {
            console.log('건너뛰기');
            try {
                const token = localStorage.getItem('token');
                await axios.post(
                    'http://localhost:8080/api/runnings/start',
                    {
                        userId: 1234,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );
                console.log('러닝 시작 성공');

                this.isModalVisible = false;
                this.isTracking = true;
            } catch (error) {
                console.error('건너뛰기 실패:', error);
                alert('건너뛰기 실패. 나중에 다시 시도해 주세요.');
            }
        },
        async onSubmit(distance) {
            console.log('등록', distance);
            this.targetDistance = parseFloat(distance) * 1000; // km를 m로 변환
            if (isNaN(this.targetDistance)) {
                alert('유효한 거리를 입력해주세요.');
                return;
            }
            try {
                // 서버에 목표 거리 등록 요청을 보냅니다.
                await axios.post('/set-goal', {
                    distance: this.targetDistance,
                });
                this.isModalVisible = false;
                this.polylinePath = []; // 폴리라인 경로를 초기화합니다.
                this.isTracking = true;
                this.totalDistance = 0; // 이동 거리 초기화
                this.elapsedTime = 0; // 경과 시간 초기화
            } catch (error) {
                console.error('목표 거리 등록 실패:', error);
                alert('목표 거리 등록 실패. 나중에 다시 시도해 주세요.');
            }
        },
        endTracking() {
            this.isTracking = false; // 종료 버튼 클릭 시 추적 종료
        },
        updateDistance(distance) {
            this.totalDistance = distance;
        },
        updateTime(time) {
            this.elapsedTime = time;
        },
    },
};
</script>

<style scoped>
.tracking-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
}
.tracking-info p {
    margin: 0;
    font-size: 16px;
}
</style>
