import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
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
    {
      text: "招新总览",
      icon: "users",
      link: "/recuit/",
    },
    {
      text: "招新要求",
      icon: "clipboard",
      link: "/recuit/requirment",
    },
    {
      text: "Q&A",
      icon: "question-circle",
      link: "/recuit/question",
    },
    {
      text: "寄语",
      icon: "heart",
      link: "/message/",
    },
    
    
    
  ],
});
