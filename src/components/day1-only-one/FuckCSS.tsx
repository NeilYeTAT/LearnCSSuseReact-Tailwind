import clsx from 'clsx'
import { useState } from 'react'
export default function FuckCSS() {
  const avatarCount = [1, 2, 3, 4, 5]
  const [selected, setSelected] = useState(-1)
  return (
    <div className="h-1/2 w-1/2 m-auto bg-red-300 flex items-center gap-4">
      {avatarCount.map((item, index) => (
        <div
          key={index}
          onClick={() => setSelected(index)}
          className={clsx(
            'bg-blue-500 w-full aspect-square flex items-center justify-center text-2xl rounded-full',
            index === selected && 'ring-2 ring-offset-2',
          )}
        >
          {item}
        </div>
      ))}
    </div>
  )
}
