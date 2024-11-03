export default function FuckCSS() {
  return (
    <div className="test m-auto flex h-1/2 w-1/2 flex-col items-center justify-center gap-6 rounded-lg bg-white p-4 font-mono text-lg">
      <button className="group relative flex h-10 w-[100px] cursor-YeDefault items-center justify-center overflow-hidden rounded-lg border border-dashed border-blue-600 px-8 py-2 text-blue-500 hover:cursor-YePointer">
        <span className="absolute left-0 top-0 h-full w-0 bg-blue-500 duration-1000 group-hover:w-full"></span>
        <span className="z-10 h-full duration-500 group-hover:text-white">
          BLUE
        </span>
      </button>
    </div>
  )
}
