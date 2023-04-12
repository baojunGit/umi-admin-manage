/**
 * @name 代理的配置
 * @see 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 *
 * @doc https://umijs.org/docs/guides/proxy
 */

export default {
  /**
   * @name 详细的代理配置
   * @doc https://github.com/chimurai/http-proxy-middleware
   */

  // 本地开发环境
  dev: {
    '/api/': {
      target: 'http://192.168.112.111:8086/', // 代理的地址
      secure: false, // 不进行证书验证，支持https协议的代理
      changeOrigin: true, // target是域名的话，需要这个参数
      // 重写路径，首个参数表示捕获API的标志，
      // 比如API请求/api/users, 会被代理到请求 http://192.168.112.111:8086/api/users
      pathRewrite: { '^/api': '/api' },
    },
  },

  // 预上线环境
  pre: {
    '/api/': {
      target: 'your pre url',
      secure: false,
      changeOrigin: true,
      pathRewrite: { '^/api': '/api' },
    },
  },
};
