import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/stem/",

  lang: "zh-CN",
  title: "STEM教育学习网",
  description: "致力于STEM教育学习，培育创新思维，培养面向未来的科技人才",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
