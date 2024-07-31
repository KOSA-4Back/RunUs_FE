<template>
    <div>
        <h2>RunUS</h2>
        <div v-if="isTracking" class="tracking-info">
            <p v-if="goalKm > 0">목표 거리: {{ formattedTargetDistance }}</p>
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
import axios from '@/components/api/axios'; // 설정한 Axios 인스턴스 사용
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
            latitude: 37.5665,
            longitude: 126.978,
            isModalVisible: false,
            isResultModalVisible: false,
            targetDistance: null,
            polylinePath: [], // 현재 경로를 저장할 배열
            isTracking: false,
            totalTime: '', // totalTime을 저장할 변수
            todayGoalId: null, // 오늘 목표 ID를 저장할 변수 추가
            totalInfoId: null, // total_info_id를 저장할 변수 추가
            totalDistance: 0, // 이동 거리를 저장할 변수
            elapsedTime: 0, // 경과 시간을 저장할 변수
            weight: 50, // 기본 체중 값
            startTime: null, // 시작 시간을 저장할 변수
            goalKm: 0, // 목표 거리를 저장할 변수 추가
        };
    },
    computed: {
        formattedTargetDistance() {
            return (this.goalKm / 1000).toFixed(2) + ' km';
        },
        formattedDistance() {
            return Math.floor(this.totalDistance); // 소수점 제거
        },
        formattedTime() {
            const minutes = Math.floor(this.elapsedTime / 60);
            const seconds = this.elapsedTime % 60;
            return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        },
        formattedCalories() {
            return Math.floor(this.weight * (this.totalDistance / 1000)) + ' kcal'; // 소수점 제거
        },
    },
    methods: {
        showModal() {
            this.isModalVisible = true;
        },
        async fetchTodayGoal() {
            try {
                const response = await axios.get('/runnings/select/2');
                const { todayGoalId, goalKm, today } = response.data;
                const todayDate = new Date().toISOString().split('T')[0]; // 오늘 날짜

                if (todayDate === today) {
                    this.todayGoalId = todayGoalId;
                    this.goalKm = goalKm;
                    this.targetDistance = goalKm * 1000; // km를 m로 변환
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
                    await this.updateGoal(this.goalKm); // goalKm를 그대로 유지한 채 업데이트
                    console.log('기존 목표 유지하여 업데이트:', this.goalKm);
                } else {
                    await this.startNewGoal(0); // 새로운 목표 시작
                    console.log('새로운 목표 시작');
                }

                this.isModalVisible = false;
                this.isTracking = true;
            } catch (error) {
                console.error('건너뛰기 실패:', error);
                alert('건너뛰기 실패. 나중에 다시 시도해 주세요.');
            }
        },
        async onSubmit(distance) {
            this.targetDistance = parseFloat(distance) * 1000; // km를 m로 변환
            if (isNaN(this.targetDistance)) {
                alert('유효한 거리를 입력해주세요.');
                return;
            }

            try {
                await this.fetchTodayGoal();

                if (this.todayGoalId) {
                    await this.updateGoal(distance); // 설정된 목표를 업데이트
                } else {
                    await this.startNewGoal(distance); // 새로운 목표 시작
                }

                this.isModalVisible = false;
                this.isTracking = true;
            } catch (error) {
                console.error('목표 처리 실패:', error);
                alert('목표 처리 실패. 나중에 다시 시도해 주세요.');
            }
        },
        async startNewGoal(distance) {
            try {
                const response = await axios.post('/runnings/start', {
                    userId: 2,
                    goalKm: distance,
                });

                const { todayGoalId, RunTotalInfoId } = response.data.data; // 서버로부터 받은 todayGoalId와 totalInfoId 저장
                this.todayGoalId = todayGoalId; // todayGoalId를 인스턴스 변수에 저장
                this.totalInfoId = RunTotalInfoId; // totalInfoId를 인스턴스 변수에 저장
                console.log('서버로부터 받은 totalInfoId:', RunTotalInfoId);
                this.goalKm = distance;

                this.polylinePath = []; // 폴리라인 경로를 초기화합니다.
                this.totalDistance = 0; // 이동 거리 초기화
                this.elapsedTime = 0; // 경과 시간 초기화
                this.startTime = new Date(); // 시작 시간 기록
                this.getCurrentLocation(); // 현재 위치를 받아옵니다.
            } catch (error) {
                console.error('새 목표 시작 실패:', error);
                alert('새 목표 시작 실패. 나중에 다시 시도해 주세요.');
            }
        },
        async updateGoal(distance) {
            try {
                console.log('totalInfoId:', this.totalInfoId);
                const response = await axios.put('/runnings/update', {
                    userId: 2,
                    todayGoalId: this.todayGoalId,
                    goalKm: distance,
                });
                const { RunTotalInfoId } = response.data.data;
                this.totalInfoId = RunTotalInfoId; // totalInfoId를 인스턴스 변수에 저장
                console.log('업데이트 후 totalInfoId:', RunTotalInfoId);

                this.goalKm = distance;
                this.polylinePath = []; // 폴리라인 경로 초기화
                this.totalDistance = 0; // 이동 거리 초기화
                this.elapsedTime = 0; // 경과 시간 초기화
                this.startTime = new Date(); // 시작 시간 기록
                this.getCurrentLocation(); // 현재 위치를 받아옵니다.
            } catch (error) {
                console.error('목표 업데이트 실패:', error);
                alert('목표 업데이트 실패. 나중에 다시 시도해 주세요.');
            }
        },
        async endTracking() {
            try {
                const userId = 2; // 실제 사용자의 ID로 변경 필요
                const totalDistance = Math.floor(this.totalDistance); // 소수점 제거하고 m로 변환
                const totalCalories = Math.floor(this.weight * (this.totalDistance / 1000)); // 소수점 제거
                const endTime = new Date(); // 종료 시간 기록

                // formattedTime을 명시적으로 호출하여 totalTime에 할당
                this.totalTime = this.formattedTime;
                console.log('종료 시 totalInfoId:', this.totalInfoId);
                const response = await axios.post('/runnings/end', {
                    todayGoalId: this.todayGoalId,
                    userId: userId,
                    totalDistance: totalDistance, // long으로 전송
                    totalCalories: totalCalories, // long으로 전송
                    startTime: this.startTime,
                    endTime: endTime,
                    totalTime: this.totalTime, // formattedTime을 그대로 전송
                    totalInfoId: this.totalInfoId,
                });

                console.log('러닝 종료 및 저장 완료:', response.data);

                this.isTracking = false; // 종료 버튼 클릭 시 추적 종료
                this.isResultModalVisible = true; // 결과 모달 표시
                this.todayGoalId = null; // 러닝 종료 시 todayGoalId 초기화
                this.totalInfoId = null; // 러닝 종료 시 totalInfoId 초기화
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
            this.totalTime = this.formattedTime; // updateTime이 호출될 때마다 totalTime 업데이트
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
    },
    async mounted() {
        await this.getCurrentLocation(); // 컴포넌트가 마운트될 때 현재 위치를 받아옵니다.
        await this.fetchTodayGoal(); // 컴포넌트가 마운트될 때 오늘 목표를 가져옵니다.
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
