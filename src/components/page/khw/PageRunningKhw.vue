<template>
    <div>
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
            <SetDestinationModalCompo :goalDistance="goalKm" @skip="onSkip" @set-goal="onSubmit" />
        </v-dialog>
        <RunningResultModal
            :isVisible="isResultModalVisible"
            :distance="totalDistance"
            :time="formattedTime"
            :calories="formattedCalories"
            @update:isVisible="isResultModalVisible = $event"
        />
        <div v-if="isTracking">
            <p>이동 거리: {{ formattedDistance }} m</p>
            <p>활동 시간: {{ formattedTime }}</p>
            <p>소모 칼로리: {{ formattedCalories }}</p>
        </div>
    </div>
</template>

<script>
import axios from '@/components/api/axios';
import { mapActions, mapGetters } from 'vuex';
import { EventBus } from '@/utils/eventBus';  // 여기에 import 추가

import RoundButton from '../../layout/atoms/item/button/RoundButtonItem.vue';
import KakaoMapItem from '../../layout/atoms/item/map/kakaoMapItem.vue';
import SetDestinationModalCompo from '@/components/combine/SetDestinationModalCompo.vue';
import RunningResultModal from '@/components/combine/RunningResultModal.vue';

export default {
    components: {
        KakaoMapItem,
        RoundButton,
        SetDestinationModalCompo,
        RunningResultModal,
    },
    data() {
        return {
            userId: '',
            latitude: 37.5665,
            longitude: 126.978,
            isModalVisible: false,
            isResultModalVisible: false,
            targetDistance: null,
            polylinePath: [],
            isTracking: false,
            totalTime: '',
            todayGoalId: null,
            totalInfoId: null,
            totalDistance: 0,
            elapsedTime: 0,
            weight: 50,
            startTime: null,
            goalKm: 0,
        };
    },
    computed: {
        ...mapGetters('header', ['currentLayout', 'header']),
        formattedDistance() {
            return Math.floor(this.totalDistance);
        },
        formattedTime() {
            const minutes = Math.floor(this.elapsedTime / 60);
            const seconds = this.elapsedTime % 60;
            return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        },
        formattedCalories() {
            return Math.floor(this.weight * (this.totalDistance / 1000)) + ' kcal';
        },
    },
    created() {
        this.updateHeader();
        this.loadUserId();
        EventBus.$on('end-tracking', this.endTracking); // Listen for the end-tracking event
    },
    beforeDestroy() {
        EventBus.$off('end-tracking', this.endTracking); // Clean up the event listener
    },
    methods: {
        ...mapActions('header', ['updateLayout', 'updateHeaderTitle', 'updateLogo', 'updateChatTitle', 'updateGoalKm', 'endTracking']),
        loadUserId() {
            this.userId = localStorage.getItem('user_id');
        },
        showModal() {
            this.isModalVisible = true;
        },
        async fetchTodayGoal() {
            try {
                const response = await axios.get(`/runnings/select/${this.userId}`);
                const { todayGoalId, goalKm, today } = response.data;
                const todayDate = new Date().toISOString().split('T')[0];

                if (todayDate === today) {
                    this.todayGoalId = todayGoalId;
                    this.goalKm = goalKm;
                    this.targetDistance = goalKm * 1000;
                    this.updateGoalKm(goalKm); // 목표 거리 업데이트
                } else {
                    this.todayGoalId = null;
                    this.goalKm = 0;
                }
            } catch (error) {
                console.error('오늘 목표를 가져오는데 실패했습니다.', error);
            }
        },
        async onSkip() {
            try {
                await this.fetchTodayGoal();
                if (this.todayGoalId) {
                    await this.updateGoal(this.goalKm);
                    console.log('기존 목표 유지하여 업데이트:', this.goalKm);
                } else {
                    await this.startNewGoal(0);
                    console.log('새로운 목표 시작');
                }

                this.isModalVisible = false;
                this.isTracking = true;
                
                this.updateLayout('running_start');
            } catch (error) {
                console.error('건너뛰기 실패:', error);
                alert('건너뛰기 실패. 나중에 다시 시도해 주세요.');
            }
        },
        async onSubmit(distance) {
            this.targetDistance = parseFloat(distance) * 1000;
            if (isNaN(this.targetDistance)) {
                alert('유효한 거리를 입력해주세요.');
                return;
            }

            try {
                await this.fetchTodayGoal();
                if (this.todayGoalId) {
                    await this.updateGoal(distance);
                } else {
                    await this.startNewGoal(distance);
                }

                this.isModalVisible = false;
                this.isTracking = true;
                this.updateGoalKm(distance * 1000); // 목표 거리 업데이트
                
                this.updateLayout('running_start');
            } catch (error) {
                console.error('목표 처리 실패:', error);
                alert('목표 처리 실패. 나중에 다시 시도해 주세요.');
            }
        },
        async startNewGoal(distance) {
            try {
                const response = await axios.post('/runnings/start', {
                    userId: this.userId,
                    goalKm: distance,
                });

                const { todayGoalId, RunTotalInfoId } = response.data.data;
                this.todayGoalId = todayGoalId;
                this.totalInfoId = RunTotalInfoId;
                console.log('서버로부터 받은 totalInfoId:', RunTotalInfoId);
                this.goalKm = distance;

                this.polylinePath = [];
                this.totalDistance = 0;
                this.elapsedTime = 0;
                this.startTime = new Date();
                this.getCurrentLocation();
            } catch (error) {
                console.error('새 목표 시작 실패:', error);
                alert('새 목표 시작 실패. 나중에 다시 시도해 주세요.');
            }
        },
        async updateGoal(distance) {
            try {
                console.log('totalInfoId:', this.totalInfoId);
                const response = await axios.put('/runnings/update', {
                    userId: this.userId,
                    todayGoalId: this.todayGoalId,
                    goalKm: distance,
                });
                const { RunTotalInfoId } = response.data.data;
                this.totalInfoId = RunTotalInfoId;
                console.log('업데이트 후 totalInfoId:', RunTotalInfoId);

                this.goalKm = distance;
                this.polylinePath = [];
                this.totalDistance = 0;
                this.elapsedTime = 0;
                this.startTime = new Date();
                this.getCurrentLocation();
            } catch (error) {
                console.error('목표 업데이트 실패:', error);
                alert('목표 업데이트 실패. 나중에 다시 시도해 주세요.');
            }
        },
        async endTracking() {
            try {
                const totalDistance = Math.floor(this.totalDistance);
                const totalCalories = Math.floor(this.weight * (this.totalDistance / 1000));
                const endTime = new Date();

                this.totalTime = this.formattedTime;
                console.log('종료 시 totalInfoId:', this.totalInfoId);
                const response = await axios.post('/runnings/end', {
                    todayGoalId: this.todayGoalId,
                    userId: this.userId,
                    totalDistance: totalDistance,
                    totalCalories: totalCalories,
                    startTime: this.startTime,
                    endTime: endTime,
                    totalTime: this.totalTime,
                    totalInfoId: this.totalInfoId,
                });

                console.log('러닝 종료 및 저장 완료:', response.data);

                this.isTracking = false;
                this.isResultModalVisible = true;
                this.todayGoalId = null;
                this.totalInfoId = null;
                this.updateLayout('running');
            } catch (error) {
                console.error('러닝 종료 실패:', error);
                alert('러닝 종료 실패. 나중에 다시 시도해 주세요.');
            }
        },
        updateDistance(distance) {
            this.totalDistance = distance;
        },
        updateTime(time) {
            this.elapsedTime = time;
            this.totalTime = this.formattedTime;
        },
        getCurrentLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        this.latitude = position.coords.latitude;
                        this.longitude = position.coords.longitude;
                    },
                    (error) => {
                        console.error('현재 위치를 가져오는데 실패했습니다.', error);
                        alert('현재 위치를 가져오는데 실패했습니다.');
                    },
                );
            } else {
                alert('Geolocation을 지원하지 않는 브라우저입니다.');
            }
        },
        updateHeader() {
            this.updateLayout('running');
        },
    },
    async mounted() {
        await this.getCurrentLocation();
        await this.fetchTodayGoal();
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
.red--text {
    color: red;
}
</style>