<template>
    <v-btn :style="buttonStyle" class="chat-button rounded-xl" @click="handleClick">
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
        id: {
            // 새로 추가한 _id 프롭
            type: String,
            required: true,
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
            this.$emit('button-click', this.id);
            this.clickHandler(this.text, this.id); // 이제 파라미터를 직접 전달
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
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    left: 16px;
    top: -22px; /* 텍스트를 약간 위로 이동 */
}
</style>
