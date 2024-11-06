import { useEffect, useRef, useState } from 'react'

export default function FuckCSS() {
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)
  const [isHover, setIsHover] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current!

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect() // 每次重新获取位置
      const offsetX = e.clientX - rect.left
      const offsetY = e.clientY - rect.top
      setOffsetX(offsetX)
      setOffsetY(offsetY)
    }

    container.addEventListener('mousemove', handleMouseMove)

    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      className={`relative mx-auto my-8 flex w-96 flex-nowrap items-center justify-center overflow-hidden rounded-3xl bg-white py-1 font-medium shadow-lg`}
      onMouseMove={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      ref={containerRef}
    >
      <div
        className={`absolute left-0 top-0 h-full w-full`}
        style={{
          background: isHover
            ? `radial-gradient(154.63px circle at ${offsetX}px ${offsetY}px, #ffd6f1 0%, transparent 65%) `
            : '',
        }}
      ></div>
      {['首页', '文稿', '手记', '时光', '思考', '更多'].map((item, index) => (
        <div
          className="z-0 w-fit px-3 py-[1px] duration-75 hover:cursor-pointer hover:text-pink-500"
          key={index}
        >
          {item}
        </div>
      ))}
    </div>
  )
}
