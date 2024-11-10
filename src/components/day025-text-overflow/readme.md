![Screenshot](https://github.com/NeilYeTAT/LearnCSSuseReact-Tailwind/blob/main/src/components/day025-text-overflow/Screenshot.png)

单行文本溢出, 不能使用flex布局
`overflow-hidden text-ellipsis whitespace-nowrap`

多行文本溢出
`line-clamp-2 overflow-hidden text-ellipsis`

```css
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
```
