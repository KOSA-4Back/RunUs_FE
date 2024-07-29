<template>
    <div class="chat-buttons">
        <v-btn class="chat-button left" color="white" text-color="#1E1E1E"> 나의 채팅 </v-btn>
        <div class="divider"></div>
        <v-btn class="chat-button right" color="white" text-color="#1E1E1E"> 오픈 채팅 </v-btn>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.chat-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 24px; /* 둥근 모서리 */
}

.divider {
    width: 1.5px;
    height: 36px;
    background-color: #cccbcb !important; /* 구분선 색상 */
}

.chat-button {
    height: 42px;
    width: 100px; /* 버튼의 넓이를 100px로 설정 */
    border-radius: 0; /* 버튼 자체의 둥근 모서리 제거 */
    font-size: 12px; /* 폰트 크기 설정 */
    box-shadow: none; /* 그림자 제거 */
    color: #1e1e1e; /* 버튼 글자색 #1E1E1E로 설정 */
}

.chat-button.left {
    border-top-left-radius: 24px; /* 왼쪽 버튼의 왼쪽 모서리 둥글게 */
    border-bottom-left-radius: 24px; /* 왼쪽 버튼의 왼쪽 모서리 둥글게 */
}

.chat-button.right {
    border-top-right-radius: 24px; /* 오른쪽 버튼의 오른쪽 모서리 둥글게 */
    border-bottom-right-radius: 24px; /* 오른쪽 버튼의 오른쪽 모서리 둥글게 */
}
</style>
