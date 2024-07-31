<template>
    <v-card class="custom-panel rounded-xxl" outlined>
        <v-row no-gutters align="center" justify="space-between">
            <v-col cols="6" class="content">
                <div class="date-section">
                    <div class="date" v-if="viewFlag === 'active'" v-html="formattedActiveTime"></div>
                    <div v-else>
                        <div class="date">{{ date }}</div>
                        <div class="weekday">{{ weekday }}</div>
                    </div>
                </div>
            </v-col>
            <v-col cols="6" class="content">
                <div class="goal-section" v-if="viewFlag === 'goal'">
                    <span>goal</span>
                    <span class="distance"></span>
                    <span> / {{ distance }} Km</span>
                </div>
                <div class="distance-section" v-else>
                    <div class="distance">{{ distance }} Km</div>
                    <div class="calories">{{ calories }} cal</div>
                </div>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    props: {
        weekday: {
            type: String,
            default: '월요일',
        },
        date: {
            type: String,
            default: '08/14',
        },
        distance: {
            type: Number,
            default: 0,
        },
        calories: {
            type: Number,
            default: 0,
        },
        viewFlag: {
            type: String,
            default: '',
        },
        activeTime: {
            type: String,
            default: '00:00 ~ 00:00',
        },
        goalDistance: {
            type: Number,
            default: 0,
        },
    },
    computed: {
        formattedActiveTime() {
            return this.activeTime.replace('~', '~<br/>');
        },
    },
};
</script>

<style scoped>
@import '@/scss/variables.scss';

.custom-panel {
    display: flex;
    align-items: center;
    background-color: #3897db !important;
    color: #ffffff !important;
    height: 80px;
    width: 288px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.content {
    text-align: center;
}

.date-section {
    font-size: 18px;
}

.date-section .date {
    font-size: 18px;
}

.date-section .weekday {
    font-size: 16px;
    color: #ffc0c0;
}

.distance-section {
    font-size: 18px;
}

.distance-section .distance {
    font-size: 18px;
}

.distance-section .calories {
    font-size: 18px;
    color: #b0ffce;
}
</style>
