<template>
    <div class="user-info">
        <div class="profile-container">
            <div class="profile-pic">
                <img v-if="user_info.findMembersResponse?.profileUrl" :src="user_info.findMembersResponse?.profileUrl" alt="Profile Picture" />
                <img v-else src="@/assets/runus_logo.png" alt="Profile Picture" />
            </div>
            <div class="user-details">
                <h2>{{ user_info.findMembersResponse?.nickName }}</h2>
                <p>{{ user_info.findMembersResponse?.email }}</p>
            </div>
        </div>
        <div class="goal-activity-container">
            <div class="goal">
                <card-item :date="currentDate" :weekday="currentWeekday" :distance="user_info.findTodayGoalResponse?.goalKm" viewFlag="goal"></card-item>
            </div>
            <div class="activity-container">
                <div class="activity">
                    <card-item-small class="card-item-small" :value="user_info.todayTotalDistanceCalDto?.distance" unit="km"></card-item-small>
                    <card-item-small2 class="card-item-small2" :value="user_info.todayTotalDistanceCalDto?.calories" unit="cal"></card-item-small2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CardItem from '@/components/layout/atoms/item/card/CardItem.vue';
import CardItemSmall from '@/components/layout/atoms/item/card/CardItemSmall.vue';
import CardItemSmall2 from '@/components/layout/atoms/item/card/CardItemSmall.vue';

export default {
    props: ['user_info'],
    components: {
        CardItem,
        CardItemSmall,
        CardItemSmall2,
    },
    computed: {
        currentDate() {
            const today = this.user_info.findTodayGoalResponse?.today || new Date();
            const date = new Date(today);
            const options = { month: '2-digit', day: '2-digit' };
            const formattedDate = date.toLocaleDateString('ko-KR', options).replace(/\./g, '').replace(/\s/g, ' / ');

            return formattedDate;
        },
        currentWeekday() {
            const today = this.user_info.findTodayGoalResponse?.today || new Date();
            const date = new Date(today);
            const options = { weekday: 'long' };

            return date.toLocaleDateString('ko-KR', options);
        },
    },
};
</script>

<style scoped>
.user-info {
    text-align: center;
    background-color: #e3f2fd;
    border-radius: 10px;
}

.profile-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.profile-pic img {
    width: 110px;
    height: 110px;
    border-radius: 40%;
}

.user-details {
    margin: 10px 5px;
}
.user-details h2 {
    text-align: left;
}

.goal-activity-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
}

.goal {
    display: flex;
}

.activity-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 80%;
}

.activity {
    display: flex;
    justify-content: space-around;
    width: 100%;
    gap: 50px;
}

.card-item-small,
.card-item-small2 {
    flex: 1; /* 가로 길이를 동일하게 설정 */
    min-width: 120px; /* 최소 가로 길이 설정 */
}
</style>
