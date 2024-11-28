import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "主页",
    icon: "home",
    prefix: "/",
    link: "/",
  },
  {
    text: "关于我们",
    icon: "info-circle",
    prefix: "/about/",
    link: "/about/",
  },
  {
    text: "研究方向",
    icon: "book-open",
    link: "/research/",
  },
  {
    text: "获得成就",
    icon: "trophy",
    link: "/awards/",
  },
]);
