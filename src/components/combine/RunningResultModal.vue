<template>
    <v-dialog v-model="localVisible" max-width="400">
        <v-card>
            <v-card-title class="headline">훌륭해요!</v-card-title>
            <v-card-text>
                <p>
                    <strong>총 거리:</strong> <span class="red--text">{{ formattedDistance }} km</span>
                </p>
                <p>
                    <strong>총 시간:</strong> <span class="red--text">{{ formattedTime }}</span>
                </p>
                <p>
                    <strong>총 칼로리:</strong> <span class="red--text">{{ formattedCalories }}</span>
                </p>
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
.red--text {
    color: red;
}
</style>
