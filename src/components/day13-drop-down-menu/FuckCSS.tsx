import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export default function FuckCSS() {
  const [isExpand, setIsExpand] = useState(true)

  return (
    <div className="m-auto flex h-1/2 w-1/2 flex-col gap-1 overflow-hidden bg-pink-300 p-4 font-mono text-white">
      <button
        className="h-16 w-full bg-blue-500"
        onClick={() => setIsExpand(!isExpand)}
      >
        Menu
      </button>

      <AnimatePresence>
        {isExpand && (
          <div className="flex h-fit w-full origin-top flex-col gap-1">
            {[1, 2, 3, 4].map((item, index) => (
              <motion.div
                key={index}
                initial={{ translateX: -1000 }}
                animate={{ translateX: 0 }}
                exit={{ translateX: -1000 }}
                transition={{
                  delay: (index + 1) * 0.1,
                }}
                className={`flex h-10 items-center justify-center bg-blue-400 hover:bg-blue-300`}
              >
                {item}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
