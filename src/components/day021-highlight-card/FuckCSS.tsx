import { useEffect, useRef, useState } from 'react'

export default function FuckCSS() {
  const [isHover, setIsHover] = useState(false)
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current!

    function handleMouseMove(event: MouseEvent) {
      const mouseX = event.pageX
      const mouseY = event.pageY

      const rect = container.getBoundingClientRect()
      const elementX = rect.left + window.scrollX
      const elementY = rect.top + window.scrollY

      const distanceX = mouseX - elementX
      const distanceY = mouseY - elementY
      setOffsetX(distanceX)
      setOffsetY(distanceY)
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="m-auto flex h-full w-full flex-wrap bg-[#0D1428] text-white">
      <div
        ref={containerRef}
        className="m-auto flex flex-wrap"
        onMouseMove={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {['Card'].map((item, index) => (
          <div className="h-44 w-96 p-2" key={index}>
            <div className="element relative h-full rounded-xl bg-[#172033]">
              <span
                className={`absolute left-1/2 top-1/2 h-[calc(100%+4px)] w-[calc(100%+4px)] -translate-x-1/2 -translate-y-1/2 rounded-xl duration-300`}
                style={{
                  background: isHover
                    ? `radial-gradient(250px circle at ${offsetX}px ${offsetY}px,#00DC82 0,transparent 100%)`
                    : '',
                }}
              ></span>
              <div className="absolute inset-1 flex items-center justify-center rounded-xl bg-[#172033] text-3xl">
                {item}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// import { useEffect, useRef, useState } from 'react'

// export default function FuckCSS() {
//   const [isHover, setIsHover] = useState(false)
//   const [offsetX, setOffsetX] = useState(0)
//   const [offsetY, setOffsetY] = useState(0)

//   const containerRef = useRef<HTMLDivElement>(null)
//   const requestRef = useRef<number>(0)

//   const handleMouseMove = (event: MouseEvent) => {
//     const mouseX = event.pageX
//     const mouseY = event.pageY

//     const container = containerRef.current
//     if (container) {
//       const rect = container.getBoundingClientRect()
//       const elementX = rect.left + window.scrollX
//       const elementY = rect.top + window.scrollY

//       const distanceX = mouseX - elementX
//       const distanceY = mouseY - elementY
//       setOffsetX(distanceX)
//       setOffsetY(distanceY)
//     }
//   }

//   useEffect(() => {
//     const container = containerRef.current!

//     const onMouseMoveDebounced = (event: MouseEvent) => {
//       if (requestRef.current) cancelAnimationFrame(requestRef.current)

//       requestRef.current = requestAnimationFrame(() => {
//         handleMouseMove(event)
//       })
//     }

//     container.addEventListener('mousemove', onMouseMoveDebounced)

//     return () => {
//       cancelAnimationFrame(requestRef.current)
//       container.removeEventListener('mousemove', onMouseMoveDebounced)
//     }
//   }, [])

//   return (
//     <div className="m-auto flex h-full w-full flex-wrap bg-[#0D1428] text-white">
//       <div
//         ref={containerRef}
//         className="m-auto flex flex-wrap"
//         onMouseEnter={() => setIsHover(true)}
//         onMouseLeave={() => setIsHover(false)}
//       >
//         {[1].map((item, index) => (
//           <div className="h-44 w-96 p-2" key={index}>
//             <div className="element relative h-full rounded-xl bg-[#172033]">
//               <span
//                 className={`absolute left-1/2 top-1/2 h-[calc(100%+4px)] w-[calc(100%+4px)] -translate-x-1/2 -translate-y-1/2 rounded-xl duration-300`}
//                 style={{
//                   background: isHover
//                     ? `radial-gradient(250px circle at ${offsetX}px ${offsetY}px,#00DC82 0,transparent 100%)`
//                     : '',
//                 }}
//               ></span>
//               <div className="absolute inset-1 rounded-xl bg-[#172033]">
//                 {item}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
