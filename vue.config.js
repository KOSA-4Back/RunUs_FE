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
});
