module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:vue/essential',
    'plugin:prettier/recommended' // 添加 prettier 插件
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['pug'],
  rules: {
    // elsint 在html中会报jsx？ 先禁用掉
    'vue/comment-directive': 0
  }
}