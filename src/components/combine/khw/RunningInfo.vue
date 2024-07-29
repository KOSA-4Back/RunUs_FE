<template>
    <div>
        <div v-if="totalDistance >= 0">이동 거리: {{ totalDistance.toFixed(2) }} m</div>
        <div v-if="elapsedTime > 0">경과 시간: {{ formatTime(elapsedTime) }}</div>
    </div>
</template>

<script>
export default {
    name: 'MapInfo',
    props: {
        totalDistance: {
            type: Number,
            default: 0,
        },
        elapsedTime: {
            type: Number,
            default: 0,
        },
    },
    methods: {
        formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${minutes}m ${secs}s`;
        },
    },
};
</script>
