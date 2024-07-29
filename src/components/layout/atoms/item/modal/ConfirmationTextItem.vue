<template>
    <div class="text-center">
        <text color="black">
            <h3>{{ message }}</h3>
        </text>
    </div>
</template>

<script>
import Text from '@/components/atoms/Text.vue';

export default {
    components: {
        Text,
    },
    props: {
        message: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.text-center {
    text-align: center;
}
</style>
