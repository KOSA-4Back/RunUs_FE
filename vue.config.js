const { defineConfig } = require('@vue/cli-service');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = defineConfig({
    publicPath: '/runus',
    transpileDependencies: ['vuetify'],
    configureWebpack: {
        plugins: [new VuetifyLoaderPlugin()],
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/scss/variables.scss"`,
            },
            scss: {
                additionalData: `@import "@/scss/variables.scss";`,
            },
        },
    },
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg');

        // 기존의 svg 로더를 클리어합니다
        svgRule.uses.clear();

        // vue-svg-loader를 추가합니다
        svgRule.use('babel-loader').loader('babel-loader').end().use('vue-svg-loader').loader('vue-svg-loader');
    },
    // devServer: {
    //     allowedHosts: 'all',
    //     client: {
    //         webSocketURL: 'wss://0de4-58-127-11-149.ngrok-free.app/ws', // 프론트엔드 ngrok 주소
    //     },
    //     proxy: {
    //         '/api': {
    //             target: 'https://9e87-58-127-11-149.ngrok-free.app', // 백엔드 ngrok 주소
    //             changeOrigin: true,
    //             secure: false,
    //         },
    //         '/chat': {
    //             target: 'https://de3f-58-127-11-149.ngrok-free.app', // 채팅 서버 ngrok 주소
    //             changeOrigin: true,
    //             secure: false,
    //             ws: true, // WebSocket 프록시 활성화
    //         },
    //     },
    // },
});
