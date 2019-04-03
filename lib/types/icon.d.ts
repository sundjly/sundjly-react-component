// 给svg导出一个默认的东西， 如果不加上  在使用 import wechat from './icons/wechat.svg';  就会报错
declare module '*.svg' {
  const content: any;
  export default content;
}

