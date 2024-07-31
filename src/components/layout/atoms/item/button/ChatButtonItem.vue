<template>
    <v-btn :style="buttonStyle" class="chat-button" @click="handleClick">
        <v-row class="fill-height">
            <v-col cols="12" class="d-flex align-center">
                <span class="button-text">{{ text }}</span>
            </v-col>
        </v-row>
    </v-btn>
</template>

<script>
export default {
    name: 'ChatButton',
    props: {
        text: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        clickHandler: {
            type: Function,
            required: false,
            default: () => {},
        },
    },
    computed: {
        buttonStyle() {
            return {
                backgroundImage: `url(${this.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            };
        },
    },
    methods: {
        handleClick() {
            this.$emit('button-click');
            this.clickHandler();
        },
    },
};
</script>

<style scoped>
.v-btn.chat-button {
    width: 380px !important;
    height: 72px !important;
    padding: 0 !important;
    position: relative;
}

.v-row {
    width: 100%;
}

.v-col {
    width: 100%;
}

.button-text {
    color: white;
    font-size: 23px;
    font-weight: bold;
    position: absolute;
    left: 16px;
}
</style>
