var options = {
    target: 'http://localhost:3001', // 目标服务器
    changeOrigin: true, 
    pathRewrite: {
      '^/api': '/' // 映射路径， 使用 /api 开头的请求会转发到目标服务器，同时路径 /api -> /
    }
  };
module.exports = options;