import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/lab/",
  lang: "zh-CN",
  title: "东北林业大学网络安全实验室",
  // description: "东北林业大学网络安全实验室",
  theme,
  // 注册全局组件的插件
  
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
