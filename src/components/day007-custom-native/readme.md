![Screenshot](https://github.com/NeilYeTAT/LearnCSSuseReact-Tailwind/blob/main/src/components/day7-custom-native/Screenshot.png)

```html
<div
  className="bg-blue-500 w-[200px] h-[100px] m-auto relative rounded-full overflow-hidden p-2.5"
>
  <input
    type="checkbox"
    className="appearance-none absolute opacity-0 bg-pink-500 cursor-pointer z-50 peer size-full"
  />
  <span
    className="absolute bg-slate-100 peer-checked:bg-green-300 size-[80px] left-2.5 rounded-full peer-checked:left-[110px] duration-300"
  ></span>
</div>
```

父容器 > 原生表单元素 > 实际显示元素

实际显示元素绝对定位, 覆盖原生表单元素, 原生表单元素使用 `appearance-none` 清除默认效果.

原生元素透明度 0, 层级拉满
