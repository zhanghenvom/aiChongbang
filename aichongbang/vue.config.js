module.exports = {
  devServer: {
    port: 2999,
    proxy: {
      '/ip': {
        target: 'http://localhost:3000',// 要跨域的域名
        secure: false,  // 如果需要跨域，需要配置这个参数
        changeOrigin: true, // 是否开启跨域
        pathRewrite: { "^/ip": "" }
      },
    }
  },

  lintOnSave: false
}
  

