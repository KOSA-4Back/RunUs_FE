<template>
    <v-card class="custom-panel rounded-xxl" outlined>
        <div class="active">{{ value }} {{ unit }} </div>
    </v-card>
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            default: 0,
        },
        unit: {
            type: String,
            default: 'km',
        }
    },
};
</script>

<style scoped>
@import '@/scss/variables.scss';

.custom-panel {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #3897db !important;
    color: #ffffff !important;
    height: 75px;
    width: 89px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.active {
    font-size: 18px;
    width: 100%;
    text-align: center;
}
</style>
