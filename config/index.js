'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
var ipPath = 'http://test.houduniot.com:8180'; //测试
// const ipPath = 'http://api.dev.houduniot.com:82/'//  开发
// const ipPath = 'http://192.168.11.146:9999'; 
// const ipPath = "http://192.168.31.81:9999"; //测试
// const ipPath = "https://wx.houduniot.com/" //生产
// const ipPath = 'http://183.220.115.100:10080';//开发外网

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/auth':{
        target:ipPath,
        changeOrigin:true,
        pathRewrite:{
          '^/auth': '/auth'
        }
      },
      '/api': {
        target: ipPath,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      },
      '/common': {
        target: ipPath,
        changeOrigin: true,
        pathRewrite: {
          '^/common': '/common'
        }
      },
      '/admin': {
        target: ipPath,
        changeOrigin: true,
        pathRewrite: {
          '^/admin': '/admin'
        }
      },
      '/fanancial': {
        target: ipPath,
        changeOrigin: true,
        pathRewrite: {
          '^/fanancial': '/fanancial'
        }
      },
      '/xg': {
        target: ipPath,
        changeOrigin: true,
        pathRewrite: {
          '^/xg': '/xg'
        }
      },
      '/cms': {
        target: ipPath,
        changeOrigin: true,
        pathRewrite: {
          '^/cms': '/cms'
        }
      },
      '/mc': {
        target: ipPath,
        changeOrigin: true,
        pathRewrite: {
          '^/mc': '/mc'
        }
      },
      '/check': {
        target: ipPath,
        changeOrigin: true,
        pathRewrite: {
          '^/check': '/check'
        }}

    },

    // Various Dev Server settings
    // 改为0.0.0.0 方便其他访问
    host: '0.0.0.0', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,//启动后自动打开浏览器
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
