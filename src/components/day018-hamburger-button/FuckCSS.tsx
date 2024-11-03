export default function FuckCSS() {
  return (
    <div className="m-auto flex h-1/2 w-1/2 flex-col bg-pink-300">
      <div className="relative m-auto flex flex-col gap-2">
        <input
          type="checkbox"
          className="peer absolute z-20 size-full cursor-pointer appearance-none"
        />
        <div className="z-10 h-1 w-12 origin-left -translate-y-1 rounded-lg bg-slate-100 duration-500 peer-checked:rotate-45 peer-checked:bg-blue-500"></div>
        <div className="h-1 w-12 origin-left rounded-lg bg-slate-100 duration-500 peer-checked:w-0"></div>
        <div className="h-1 w-12 origin-left translate-y-1 rounded-lg bg-slate-100 duration-500 peer-checked:-rotate-45"></div>
      </div>
    </div>
  )
}
