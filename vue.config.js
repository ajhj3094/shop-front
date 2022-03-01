module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: './',
  chainWebpack (config) {
    config.plugin('html').tap(args => {
      args[0].title = '購物網'
      return args
    })
  }
}
