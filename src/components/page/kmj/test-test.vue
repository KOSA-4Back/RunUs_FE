<template>
    <div class="container">
        <div class="login-box">
            <div class="menu-box">
                <KebabMenu />
            </div>
            <InformationUpdateButton @click="onInfoUpdateClick">정보 수정</InformationUpdateButton>
            <InformationUpdateButton @click="onAccountDeleteClick">계정 탈퇴</InformationUpdateButton>
            <InformationUpdateButton @click="onPasswordChangeClick">비밀번호 변경</InformationUpdateButton>
        </div>
    </div>
</template>

<script>
import InformationUpdateButton from '@/components/layout/atoms/item/button/InformationUpdateButton.vue';
import KebabMenu from '@/components/layout/atoms/item/kebabmenu/KebabMenu.vue';

export default {
    components: {
        InformationUpdateButton,
        KebabMenu,
    },
    methods: {
        onInfoUpdateClick() {
            alert('정보 수정 버튼이 클릭되었습니다.');
        },
        onAccountDeleteClick() {
            alert('계정 탈퇴 버튼이 클릭되었습니다.');
        },
        onPasswordChangeClick() {
            this.$router.push({ name: 'password-change' }); // 여기를 유지합니다.
        },
    },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: #fff;
}

.menu-box {
    position: absolute;
    top: 20px;
    right: 20px;
}

.login-box {
    width: 400px;
    height: 800px;
    padding: 20px;
    background-color: #e2f3ff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: center;
    margin-top: 50px;
    position: relative; /* position을 추가하여 자식 요소의 absolute 위치를 기준으로 설정 */
}
</style>
