![Screenshot](https://github.com/NeilYeTAT/LearnCSSuseReact-Tailwind/blob/main/src/components/day011-calendar/Screenshot.png)

照着神光小册的日历组件, 没有封装很多方法, 只是渲染了 UI.

思路就是通过 `Date` 这个原生对象玩出花来, 获取各种时间.

其次通过渲染空块占据位置, 布局很简单, 但是思路很难...

上中下三块布局

状态更改, 重新渲染

![Screenshot](https://github.com/NeilYeTAT/LearnCSSuseReact-Tailwind/blob/main/src/components/day11-calendar/Screenshot-Next.png)

第二天, 将原来的一个渲染函数抽成了三个渲染函数, 并且支持了上个月和下个月日期的默认显示效果.
