const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    resolve: {
      alias: {
        '@': resolve('src')
      },
      fallback: {
        path: require.resolve('path-browserify')
      }
    }
  },
  chainWebpack(config) {
    // 设置 svg-sprite-loader
    config.resolve.alias.set('vue-i18n', 'vue-i18n/dist/vue-i18n.cjs.js')
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.imooc-admin.lgdsunday.club',
        changeOrigin: true
      }
    }
  }
})
