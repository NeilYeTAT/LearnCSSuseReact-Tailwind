export default function FuckCSS() {
  return (
    <div className="h-full w-full bg-gray-700 flex-col relative ">
      <div
        className="absolute top-[400px] left-[400px] border-t-[20px] border-t-[#4e6cff] border-r-4 border-[#4e6cff] border-b-8 border-b-transparent border-l-0 rounded-[50%] size-1/3 "
        style={{
          animation: 'ring1 1s linear infinite',
          transform: 'rotateX(70deg) rotateY(0deg) rotate(0deg)',
        }}
      ></div>

      <div
        className="absolute top-[400px] left-[400px] border-t-[20px] border-t-[#3bfe86] border-r-4 border-[#3bfe86] border-b-8 border-b-transparent border-l-0 rounded-[50%] size-1/3"
        style={{
          animation: 'ring2 1s linear infinite',
          animationDelay: '-0.5s',
          transform: 'rotateX(70deg) rotateY(60deg) rotate(0deg)',
        }}
      ></div>

      <div
        className="absolute top-[400px] left-[400px] border-t-[20px] border-t-[#ff276f] border-r-4 border-[#ff276f] border-b-8 border-b-transparent border-l-0 rounded-[50%] size-1/3"
        style={{
          animation: 'ring3 1s linear infinite',
          animationDelay: '-0.3333333333s',
          transform: 'rotateX(70deg) rotateY(-60deg) rotate(0deg)',
        }}
      ></div>
    </div>
  )
}
