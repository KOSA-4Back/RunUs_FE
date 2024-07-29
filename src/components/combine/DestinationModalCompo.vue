<template>
    <v-container fluid class="fill-height d-flex align-center justify-center pa-0">
        <v-row justify="center" align="center" class="fill-height">
            <v-col cols="auto">
                <v-card class="rounded-xxxl pa-3" rounded="lg" width="230" height="110px" outlined color="#3897DB">
                    <v-row no-gutters>
                        <v-col class="d-flex flex-column align-center justify-center content_align">
                            <h3 class="white-text">{{ title }}</h3>
                            <p class="white-text">{{ content }}</p>
                        </v-col>
                    </v-row>
                    <badge class="badge-container"></badge>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Badge from '@/components/layout/atoms/item/modal/BadgeItem.vue';

export default {
    components: {
        Badge,
    },
    props: {
        title: {
            type: String,
            required: true,
            default: '새 메세지',
        },
        content: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.position-relative {
    position: relative;
}

.badge-container {
    position: absolute;
    top: 0;
    right: 0;
}

.white-text {
    color: white !important;
}

p {
    margin-top: 10px;
    font-size: 18px;
}
</style>
