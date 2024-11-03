import { useEffect, useState } from 'react'

const colorsArray = [
  'selection:bg-blue-700',
  'selection:bg-red-400',
  'selection:bg-yellow-400',
  'selection:bg-indigo-800',
  'selection:bg-purple-800',
]

export default function FuckCSS() {
  const [index, setIndex] = useState(0)
  const currentSelectionBgColor = colorsArray[index]

  useEffect(() => {
    const handleSelectionBgColorChange = () => {
      setIndex(prevIndex => (prevIndex + 1) % colorsArray.length)
    }

    // click 比 mousedown 更有意思
    document.addEventListener('click', handleSelectionBgColorChange)

    return () => {
      document.removeEventListener('click', handleSelectionBgColorChange)
    }
  }, [])

  return (
    <div className="h-1/2 w-1/2 m-auto bg-pink-300 px-4 py-4">
      <p className={`text-white text-3xl font-mono ${currentSelectionBgColor}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        voluptates ea quod voluptatibus blanditiis aliquam praesentium
        temporibus doloribus quos a.
      </p>
    </div>
  )
}
