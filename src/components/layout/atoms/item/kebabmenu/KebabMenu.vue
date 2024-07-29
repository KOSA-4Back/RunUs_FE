<template>
    <div class="kebab-menu">
        <div class="kebab-icon" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="menu" v-if="showMenu">
            <div class="menu-item">
                <div class="icon-wrapper">
                    <img src="@/assets/settings_icon.png" alt="Settings" class="icon" />
                </div>
                <span>설정</span>
            </div>
            <div class="separator"></div>
            <div class="menu-item">
                <div class="icon-wrapper">
                    <img src="@/assets/profile_icon.png" alt="Profile" class="icon" />
                </div>
                <span>프로필 수정</span>
            </div>
            <div class="separator"></div>
            <div class="menu-item">
                <div class="icon-wrapper">
                    <img src="@/assets/logout_icon.png" alt="Logout" class="icon" />
                </div>
                <span>로그아웃</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showMenu: false,
        };
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
        },
    },
};
</script>

<style scoped>
.kebab-menu {
    position: relative;
    display: inline-block;
}

.kebab-icon {
    width: 20px;
    height: 20px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.kebab-icon span {
    display: block;
    width: 6px;
    height: 6px;
    background-color: black;
    border-radius: 50%;
}

.menu {
    position: absolute;
    top: 35px;
    right: 0;
    background-color: #e2f3ff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 180px;
    padding: 10px 0;
}

.menu-item {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    cursor: pointer;
}

.icon-wrapper {
    background-color: #fff;
    border-radius: 50%;
    padding: 5px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.menu-item .icon {
    width: 20px;
    height: 20px;
    border-radius: 50%;
}

.menu-item span {
    flex: 1;
    text-align: left;
}

.separator {
    height: 1px;
    background-color: #ccc;
    margin: 5px 0;
}
</style>
