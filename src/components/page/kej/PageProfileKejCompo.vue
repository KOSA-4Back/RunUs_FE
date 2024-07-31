<template>
    <div class="profile">
        <user-info-compo :user_info="userInfo"></user-info-compo>
        <activity-list-compo :activities="activities"></activity-list-compo>
    </div>
</template>

<script>
import axios from '@/components/api/axios';
import { mapActions, mapGetters } from 'vuex';

import UserInfoCompo from '@/components/combine/UserInfoCompo';
import ActivityListCompo from '@/components/combine/ActivityListCompo.vue';

export default {
    components: {
        UserInfoCompo,
        ActivityListCompo,
    },
    data() {
        return {
            userId: null,
            userInfo: {},
            activities: [],
            isLoading: true,
        };
    },
    created() {
        this.loadUserId();
        this.fetchUserInfo();
        this.fetchActivities();
        this.updateHeader(); // 헤더 업데이트 메서드 호출
    },
    computed: {
        ...mapGetters('header', ['currentLayout', 'header']),
    },
    methods: {
        ...mapActions('header', ['updateLayout', 'updateHeaderTitle', 'updateLogo', 'updateChatTitle']),
        loadUserId() {
            this.userId = localStorage.getItem('user_id');
        },
        async fetchUserInfo() {
            if (!this.userId) return;

            try {
                const response = await axios.get(`/member/info/today/${this.userId}`);
                this.userInfo = response.data;
                console.log('user');
                console.log(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                this.isLoading = false;
            }
        },
        async fetchActivities() {
            if (!this.userId) return;

            try {
                const response = await axios.get(`/member/active/${this.userId}`);
                this.activities = response.data;
                console.log('active');
                console.log(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                this.isLoading = false;
            }
        },
        updateHeader() {
            // 필요한 헤더 정보만 업데이트
            this.updateLayout('profile_info');
            // this.updateLayout('default');
            // this.updateHeaderTitle('기본 화면');
        },
    },
};
</script>

<style scoped>
.profile {
    width: 100%;
    height: 630px;
    margin: 0px;
    display: flexbox;
    justify-content: flex-start;
}
</style>
