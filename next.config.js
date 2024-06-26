/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = nextTranslate({
  transpilePackages: [
    'antd',
    '@ant-design',
    'rc-util',
    'rc-pagination',
    'rc-picker',
    'rc-tree',
    'rc-table',
  ],
  webpack: (config) => {
    // 기존의 웹팩 플러그인에 새로운 Dotenv플러그인을 연결시켜준다.
    // silent는 옵션은 .env파일을 찾지 못했을 때 에러를 일으키지 않도록 설정해주는 옵션이다.
    config.plugins.push(new Dotenv({ silent: true }));
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
