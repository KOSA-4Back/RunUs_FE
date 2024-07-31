<template>
    <div class="activity-list">
        <div class="active-header">
            <h2>활동</h2>
            <!-- @click="validateAndCheckEmail" -->
            <round-button-item class="check-button" :width="68" :height="30">더보기</round-button-item>
        </div>
        <div class="activities">
            <ul v-if="activities && activities.length > 0">
                <li v-for="activity in activities" :key="activity.date">
                    <card-item :date="currentDate" :weekday="currentWeekday" :distance="activity.distance" :calories="activity.calories"></card-item>
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
    computed: {
        currentDate() {
            const today = this.activities.date ? this.activities.date : new Date();
            const date = new Date(today);
            const options = { month: '2-digit', day: '2-digit' };
            const formattedDate = date.toLocaleDateString('ko-KR', options).replace(/\./g, '').replace(/\s/g, ' / ');

            return formattedDate;
        },
        currentWeekday() {
            const today = this.activities.date ? this.activities.date : new Date();
            const date = new Date(today);
            const options = { weekday: 'long' };

            return date.toLocaleDateString('ko-KR', options);
        },
    },
};
</script>

<style scoped>
.activity-list {
    margin-top: 10px;
    width: 100%;
    height: 277px;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/src/assets/sketch-girl-running.png'); /* 이미지 경로를 실제 경로로 변경하세요 */
    background-size: cover;
    background-position: center;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    overflow: hidden;
    position: relative;
    box-shadow: 2px 2px 4px 4px rgba(0, 0, 0, 0.2);
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
    font-size: 24px;
}

.active-header .check-button {
    background-color: #ffc0c0 !important;
    border: 1px solid #ffcbcb;
    position: absolute;
    right: 20px;
    font-size: 11px;
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
    gap: 5px; /* card-item 간의 간격 */
}

.activities li {
    margin: 10px 20px;
    padding: 10px;
    border-radius: 10px;
}

.custom-panel {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5da9e0b2 !important;
    color: #ffffff !important;
    height: 80px;
    width: 288px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
</style>
