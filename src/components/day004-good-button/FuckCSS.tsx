import clsx from 'clsx'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function FuckCSS() {
  const [flag, setFlag] = useState(true)

  return (
    <div className="h-1/2 w-1/2 flex m-auto bg-pink-400 ">
      <div
        className={clsx(
          'w-[200px] h-[100px] bg-white/50 rounded-[50px] p-2.5 flex m-auto cursor-pointer',
          flag ? 'justify-start' : 'justify-end',
        )}
        onClick={() => setFlag(!flag)}
      >
        <motion.div
          className="bg-white size-[80px] rounded-full "
          layout
          transition={{
            type: 'spring',
            stiffness: 700,
            damping: 30,
          }}
        />
      </div>
    </div>
  )
}
