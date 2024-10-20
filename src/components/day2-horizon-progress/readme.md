![screenshot](https://github.com/NeilYeTAT/LearnCSSuseReact-Tailwind/blob/main/src/components/day2-horizon-progress/Screenshot.png)

滚动动画, 使用第三方库 `framer-motion`.

具体逻辑就是监听滚动元素, 使用`scrollXProgress`, 拿到滚动的偏移量? 0-1 之间, 滚动的百分比? 默认监听的是视口, 想要监听具体的元素, 使用 `useRef`.

进度条变化使用`scaleX`来控制.

至此逻辑已经实现了, 但是没有过渡, 使用`useTransform`或`useSpring`.
