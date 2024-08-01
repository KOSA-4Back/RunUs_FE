<template>
    <v-dialog v-model="localVisible" max-width="300">
        <v-card class="result-card">
            <v-card-title class="headline">
                <v-spacer></v-spacer>
                <v-icon @click="close" class="close-icon">mdi-close</v-icon>
            </v-card-title>
            <v-card-text class="result-content">
                <div class="result-item">
                    <strong>총 거리:</strong> <span class="result-value">{{ formattedDistance }} km</span>
                </div>
                <div class="divider"></div>
                <div class="result-item">
                    <strong>총 시간:</strong> <span class="result-value">{{ formattedTime }}</span>
                </div>
                <div class="divider"></div>
                <div class="result-item">
                    <strong>총 칼로리:</strong> <span class="result-value">{{ formattedCalories }}</span>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="close">확인</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        isVisible: {
            type: Boolean,
            required: true,
        },
        distance: {
            type: Number,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        calories: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            localVisible: this.isVisible,
        };
    },
    watch: {
        isVisible(val) {
            this.localVisible = val;
        },
        localVisible(val) {
            this.$emit('update:isVisible', val);
        },
    },
    computed: {
        formattedDistance() {
            return (this.distance / 1000).toFixed(1);
        },
        formattedTime() {
            return this.time;
        },
        formattedCalories() {
            return this.calories;
        },
    },
    methods: {
        close() {
            this.localVisible = false;
        },
    },
};
</script>

<style scoped>
.result-card {
    background-color: rgba(255, 255, 255, 0.9); /* 불투명 배경 */
    border-radius: 15px; /* 모서리 둥글게 */
}

.result-content {
    text-align: center;
    font-size: 18px;
}

.result-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    margin: 10px 0;
}

.result-value {
    font-size: 18px;
    font-weight: bold;
    color: red;
}

.divider {
    border-bottom: 1px solid #ddd;
    margin: 10px 0;
}

.close-icon {
    cursor: pointer;
}
</style>
