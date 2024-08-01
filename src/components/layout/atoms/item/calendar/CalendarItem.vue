<template>
    <div>
        <vue-cal
            class="vuecal--rounded-theme vuecal--green-theme"
            xsmall
            hide-view-selector
            :time="false"
            active-view="month"
            :disable-views="['week']"
            style="width: 270px; height: 300px"
        >
        </vue-cal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            type: 'month',
            focus: '2021-09',
            events: [
                { name: '1km 85cal', start: '2021-09-07' },
                { name: '2km 261cal', start: '2021-09-03' },
                { name: '11km 1121cal', start: '2021-09-11' },
            ],
        };
    },
    methods: {
        handleEventClick(event) {
            alert(`${event.name} clicked!`);
        },
        updateFocus(newFocus) {
            this.focus = newFocus;
        },
    },
};
</script>

<style>
.v-calendar {
    background-color: #f8b5b5;
    color: #000;
}
.v-calendar .v-btn {
    color: #000;
}
.v-calendar .v-btn--text {
    color: #4a90e2;
}
.v-calendar .v-event {
    color: #4caf50;
}
</style>
