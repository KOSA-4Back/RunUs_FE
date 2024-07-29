<template>
    <v-container fluid class="fill-height d-flex align-center justify-center pa-0">
        <v-row justify="center" align="center" class="fill-height">
            <v-col cols="auto">
                <v-card class="rounded-xxl pa-3" rounded="lg" width="300" height="110px" outlined color="#3897DB">
                    <v-row no-gutters>
                        <v-col cols="auto" class="position-relative avatar-col">
                            <avatar :src="avatarSrc" alt="User Avatar" />
                        </v-col>
                        <v-col>
                            <h2 class="white-text">새 메세지</h2>
                            <user-info :senderId="senderId" :messageContent="messageContent" />
                        </v-col>
                    </v-row>
                    <badge class="badge-container"></badge>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Avatar from '@/components/layout/atoms/item/modal/AvatarItem.vue';
import Badge from '@/components/layout/atoms/item/modal/BadgeItem.vue';
import UserInfo from '@/components/layout/atoms/item/modal/UserInfoItem.vue';

export default {
    components: {
        Avatar,
        Badge,
        UserInfo,
    },
    props: {
        senderId: {
            type: String,
            required: true,
        },
        messageContent: {
            type: String,
            required: true,
        },
        avatarSrc: {
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

.avatar-col {
    margin-right: 50px;
}

.white-text {
    color: white !important;
}
</style>
