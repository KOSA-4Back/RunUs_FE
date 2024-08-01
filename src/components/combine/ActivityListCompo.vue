<template>
    <div class="activity-list">
        <div class="active-header">
            <h2>활동</h2>
            <round-button-item class="check-button" :width="68" :height="30">더보기</round-button-item>
        </div>
        <div class="activities">
            <ul v-if="activities && activities.length > 0">
                <li v-for="activity in activities" :key="activity.date">
                    <card-item :date="formatDate(activity.date)" :weekday="formatWeekday(activity.date)" :distance="activity.distance" :calories="activity.calories"></card-item>
                </li>
            </ul>
            <ul v-else>
                <li>
                    <v-card class="custom-panel rounded-xxl" outlined>
                        <h4>활동이 없습니다</h4>
                    </v-card>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import CardItem from '@/components/layout/atoms/item/card/CardItem.vue';
import RoundButtonItem from '../layout/atoms/item/button/RoundButtonItem.vue';

export default {
    props: ['activities'],
    components: {
        CardItem,
        RoundButtonItem,
    },
    methods: {
        formatDate(date) {
            const parsedDate = new Date(date);
            const options = { month: '2-digit', day: '2-digit' };
            return parsedDate.toLocaleDateString('ko-KR', options).replace(/\./g, '').replace(/\s/g, ' / ');
        },
        formatWeekday(date) {
            const parsedDate = new Date(date);
            const options = { weekday: 'long' };
            return parsedDate.toLocaleDateString('ko-KR', options);
        },
    },
};
</script>
<style scoped>
.activity-list {
    width: 100%;
    height: 290px;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/src/assets/runnnn.png'); /* 이미지 경로를 실제 경로로 변경하세요 */
    background-size: 127%;
    background-position: center;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    overflow: hidden;
    position: relative;
    box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.2);
    margin: 20px auto;
}

.active-header {
    display: flex;
    justify-content: center; /* 가운데 정렬 */
    align-items: center;
    position: relative;
    width: 100%;
    padding: 10px 20px;
}

.active-header h2 {
    color: rgb(0, 0, 0);
    font-size: 25px; /* 폰트 크기 1px 증가 */
    font-weight: bold; /* 볼드체로 변경 */
}

.active-header .check-button {
    background-color: #ffc0c0 !important;
    border: 1px solid #ffcbcb;
    position: absolute;
    right: 20px;
    font-size: 12px; /* 폰트 크기 1px 증가 */
    font-weight: bold; /* 볼드체로 변경 */
    display: none;
}

.activities {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.activities ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px; /* card-item 간의 간격 */
}

.activities li {
    margin: 3px 3px;
    padding: 10px;
    border-radius: 10px;
}

.custom-panel {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5da9e0b2;
    color: #ffffff;
    height: 80px;
    width: 288px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
</style>
