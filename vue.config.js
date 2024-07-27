const { defineConfig } = require("@vue/cli-service");
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
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
});