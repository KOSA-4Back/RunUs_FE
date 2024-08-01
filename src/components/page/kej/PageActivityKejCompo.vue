<template>
    <div class="activity">
        <calendar-item></calendar-item>
    </div>
</template>

<script>
import CalendarItem from '../../layout/atoms/item/calendar/CalendarItem.vue';

export default {
    components: { CalendarItem },
};
</script>

<style scoped>
.activity {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 630px;
}
</style>
