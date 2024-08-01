<template>
    <v-footer class="footer" padless>
        <v-row align="center" justify="space-around" class="w-100">
            <v-col class="text-center">
                <router-link to="/content/PageRunningKhw">
                    <img :src="require('@/assets/running.png')" class="runpng clickable" />
                </router-link>
            </v-col>
            <div class="divider-container">
                <v-divider class="thick-divider" vertical></v-divider>
            </div>
            <v-col class="text-center">
                <router-link to="/content/chat">
                    <img :src="require('@/assets/chat.png')" class="footerpng clickable" />
                </router-link>
            </v-col>
            <div class="divider-container">
                <v-divider class="thick-divider" vertical></v-divider>
            </div>
            <v-col class="text-center">
                <router-link to="/content/profile">
                    <img :src="require('@/assets/myPage.png')" class="footerpng clickable" />
                </router-link>
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

<style scoped>
.runpng, .footerpng {
    transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
    border-radius: 12px; /* 둥근 모서리 */
    padding: 5px; /* 패딩 추가 */
}

.clickable:active {
    transform: scale(0.9); /* 더 큰 축소 효과 */
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3); /* 더 큰 그림자 효과 */
    background-color: #FF8686; /* 클릭 시 배경색 변경 */
}

.runpng {
    width: 59px;
    height: 59px;
}

.footerpng {
    width: 48px;
    height: 48px;
}

.v-footer {
    width: 100%;
    height: 79px; /* 원하는 고정 높이 */
    background-color: #ffc0c0 !important;
    /* border: 1px solid #000000; */
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
