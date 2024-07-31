<template>
    <v-footer class="footer" padless>
        <v-row align="center" justify="space-around" class="w-100">
            <v-col class="text-center">
                <v-btn class="router-link" to="/content/PageRunningKhw" outlined> 홈 </v-btn>
            </v-col>
            <div class="divider-container">
                <v-divider class="thick-divider" vertical></v-divider>
            </div>
            <v-col class="text-center">
                <v-btn class="router-link" to="/content/chat" outlined> 채팅 </v-btn>
            </v-col>
            <div class="divider-container">
                <v-divider class="thick-divider" vertical></v-divider>
            </div>
            <v-col class="text-center">
                <v-btn class="router-link" to="/content/profile" outlined> 프로필</v-btn>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
export default {
    name: 'FooterCompo',
    components: {},
};
</script>

<style scope>
.v-footer {
    width: 100%;
    height: 100px; /* 원하는 고정 높이 */
    background-color: #ffc0c0 !important;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-top-left-radius: 20px !important;
    border-top-right-radius: 20px !important;
    display: flex;
    justify-content: center;
    align-items: center;
}

.v-divider {
    border-width: 1px !important; /* 두께 설정 */
    border-color: #a69d9d !important; /* 색상 설정 */
    border-style: solid !important; /* 선 스타일 설정 */
    height: 45px !important;
}

.router-link {
    text-decoration: none !important;
    color: #1e1e1e !important;
}
</style>
