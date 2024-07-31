<template>
    <v-app>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
export default {
    components: {},
    name: 'App',
    data: () => ({}),
};
</script>

<style>
@import url('@/assets/styles/global.css');

html,
body,
#app {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: Arial, sans-serif;
}

v-app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

v-main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

#app {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 800px;
}
</style>
