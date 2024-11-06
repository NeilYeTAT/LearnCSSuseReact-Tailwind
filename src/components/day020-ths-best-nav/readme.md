![Screenshot](https://github.com/NeilYeTAT/LearnCSSuseReact-Tailwind/blob/main/src/components/day020-ths-best-nav/Screenshot.png)

一个父容器, 包裹所有子元素, 并且有一个绝对定位的背景.

```tsx
  onMouseMove={() => setIsHover(true)}
  onMouseLeave={() => setIsHover(false)}
```

通过 react 上的方法监听鼠标的移入和移出

```tsx
<div
  className={`absolute left-0 top-0 h-full w-full`}
  style={{
    background: isHover
      ? `radial-gradient(154.63px circle at ${offsetX}px ${offsetY}px, #ffd6f1 0%, transparent 65%) `
      : '',
  }}
></div>
```

通过切换 `isHover` 的值实现动态切换 `css`.

```tsx
const rect = container.getBoundingClientRect() // 每次重新获取位置
const offsetX = e.clientX - rect.left
const offsetY = e.clientY - rect.top
setOffsetX(offsetX)
setOffsetY(offsetY)
```

通过上述代码计算偏移量
