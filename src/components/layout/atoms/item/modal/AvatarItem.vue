<template>
    <v-avatar size="56">
        <img :src="src" :alt="alt" />
    </v-avatar>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            default: 'Avatar',
        },
    },
};
</script>
