import { TypeAnimation } from 'react-type-animation'

export default function FuckCSS() {
  return (
    <div className="m-auto flex h-1/2 w-full flex-col items-center justify-center gap-4 px-4">
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          // 'Hello World ? (￣∇￣)',
          // 1000, // wait 1s before replacing "Mice" with "Hamsters"
          // 'Fuck The World ! (╯｀□′)╯',
          // 1000,
          'CSS ? ? ?',
          1000,
          'No ! (╯｀□′)╯',
          1000,
          'Tailwind CSS Yes ! (o′ω`o)ノ',
          1000,
        ]}
        wrapper="strong"
        speed={50}
        className="bg-gradient-to-br from-teal-400 via-purple-500 to-rose-400 bg-clip-text text-8xl text-transparent"
        repeat={Infinity}
      />
    </div>
  )
}
