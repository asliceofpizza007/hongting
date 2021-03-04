module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/hongting' : '/',
  devServer: {
    port: 7000
  },
  chainWebpack: config => {
    // pug
    const pugRule = config.module.rule('pug');
    pugRule
      .test(/\.pug$/)
      .use('pug-html-loader')
      .loader('pug-html-loader')
      .end();
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@as': '@/assets',
        '@c': '@/components',
        '@v': '@/views',
        '@img': '@/assets/images',
        '@css': '@/assets/css',
        '@mix': '@/assets/mixins',
        '@js': '@/assets/js',
        '@api': '@/api',
        '@lang': '@/language'
      }
    }
  },
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData:  `
          @import '@css/_variable.sass'
          @import '@css/mixin.sass'
        `
      }
    }
  }
};