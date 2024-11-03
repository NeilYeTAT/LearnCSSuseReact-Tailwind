![Screenshot](https://github.com/NeilYeTAT/LearnCSSuseReact-Tailwind/blob/main/src/components/day008-atom/Screenshot.png)

动画效果是真的逆天, 老外写的代码可能是很久之前了, 用了一堆定位.

还有就是老外用了伪元素? 太奇怪了, 明明不适用伪元素也能做的.

然后就是动画, 使用了 3d 的变换, 我刚开始还以为知识 2d 的变换...

梳理一下, 就是一个父容器, 包裹 3 个元素, 而这三个元素就是普通的圆形, 只不过四个方向上边框不同...

接着就是三个元素起初的位置, 使用定位, 脱离文档流, 初始位置使用 `transform` 移动. 不要重叠.

```css
transform: 'rotateX(70deg) rotateY(0deg) rotate(0deg)';
```

动画就不说了, 人家写的确实好, 我不过是无脑抄过来罢了, 再也不写这些玩意儿了.

```css
transform: rotateX(70deg) rotateY(0deg) rotate(360deg);
```

明天写点简单的, 明天见(o′ω`o)ノ
