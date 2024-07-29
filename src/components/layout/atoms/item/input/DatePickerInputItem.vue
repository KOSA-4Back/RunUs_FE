<template>
    <div>
        <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y max-width="290px">
            <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="internalDate" :label="label" prepend-icon="mdi-calendar" solo readonly v-bind="attrs" v-on="on" class="rounded-xl"> </v-text-field>
            </template>
            <v-date-picker v-model="internalDate" @input="updateDate" :day-format="dayFormat" />
        </v-menu>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            default: '년도-월-일',
        },
    },
    data() {
        return {
            menu: false,
            internalDate: this.value,
        };
    },
    watch: {
        value(newVal) {
            this.internalDate = newVal;
        },
    },
    methods: {
        updateDate(value) {
            this.$emit('input', value);
            this.menu = false;
        },
        dayFormat(date) {
            return new Date(date).getDate();
        },
    },
};
</script>

<style scoped>
@import '@/scss/variables.scss';

.custom-text-field {
    height: 30px !important;
}
</style>
