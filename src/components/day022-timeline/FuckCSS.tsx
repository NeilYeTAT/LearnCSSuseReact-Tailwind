import clsx from 'clsx'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FuckCSS() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef)

  return (
    <>
      <div className="h-screen"></div>
      <div className="relative flex h-full w-full items-center justify-center bg-purple-200">
        <div
          ref={containerRef}
          className="relative flex h-2/3 w-1/2 flex-col gap-2 rounded-lg bg-white p-2 text-blue-50"
        >
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <p
              className={clsx(
                `flex h-40 w-1/2 items-center justify-center rounded-lg bg-teal-400 opacity-0 duration-1000 even:self-end even:bg-pink-500`,
                isInView
                  ? 'translate-x-0 opacity-100 even:translate-x-0'
                  : '-translate-x-full opacity-50 even:translate-x-full',
              )}
              style={{
                transitionDelay: `${(index + 1) * 0.1}s`,
              }}
              key={index}
            >
              {item} Lorem ipsum dolor sit.
            </p>
          ))}
        </div>
      </div>
    </>
  )
}
