![Screenshot](https://github.com/NeilYeTAT/LearnCSSuseReact-Tailwind/blob/main/src/components/day026-drop-filter/Screenshot.png)

`filter: 'drop-shadow(0 0 0.75rem crimson)'`
和
`boxShadow: '0 0 0.75rem crimson'`

1. 作用对象：
   • box-shadow 只能作用在块级元素或行内块元素上，例如 div、span 等。
   • drop-shadow 是应用于整个元素的，包括透明部分，因此可以对图像、SVG 或伪元素等具有透明区域的元素添加阴影。
2. 阴影形状：
   • box-shadow 会按照元素的矩形边界创建阴影，无论元素是否有透明部分。
   • drop-shadow 则基于元素的实际形状（包括透明部分）来生成阴影，这对于非矩形图片（如带透明背景的PNG图片）非常有效。
