<template>
    <v-btn :class="['rounded-pill', 'sizeTest']" :color="color" :elevation="elevation" :style="buttonStyle" @click="$emit('click')">
        <slot>
            <p>{{ defaultText }}</p>
        </slot>
    </v-btn>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: 'primary',
        },
        elevation: {
            type: Number,
            default: 2,
        },
        defaultText: {
            type: String,
            default: '기본 값',
        },
        width: {
            type: Number,
            default: 380,
        },
        height: {
            type: Number,
            default: 72,
        },
        borderColor: {
            type: String,
            default: '', // 기본값은 없음
        },
    },
    computed: {
        buttonStyle() {
            return {
                width: this.width + 'px',
                height: this.height + 'px',
                borderColor: this.borderColor,
                borderStyle: this.borderColor ? 'solid' : 'none',
                borderWidth: this.borderColor ? '1px' : '0',
            };
        },
    },
};
</script>

<style>
.sizeTest {
    padding: 0 !important;
    position: relative;
}
</style>
