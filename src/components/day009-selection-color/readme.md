![Screenshot](https://github.com/NeilYeTAT/LearnCSSuseReact-Tailwind/blob/main/src/components/day009-selection-color/Screenshot.png)

最有意思的一天, 不过碰到个逆天 bug, 就是选中时应该直接改整个类名, 而我懒, 只改一半, 结果搞了好久, 还以为不能这样玩...

应该直接替换整个 `selection:bg-yellow-400`

而我一开始 `selection:${currentSelectionBgColor}`

以后可不能这么懒了...

还有就是关于代码优化的问题, 下面这个直接一行代码解决, 用不上 if else 判断长度...

`setIndex(prevIndex => (prevIndex + 1) % colorsArray.length)`

有时间得把程序员的数学的得看看, 🐎 的.

还有就是好好复习一下 react...今天就这样了, 明天看看网格怎么玩

(o′ω`o)ノ 明天见喵~
