export default function FuckCSS() {
  return (
    <div className="h-1/2 w-1/2 m-auto flex items-center gap-4 bg-pink-300 flex-col">
      <div className="bg-blue-500 w-[200px] h-[100px] m-auto relative rounded-full overflow-hidden p-2.5">
        <input
          type="checkbox"
          className="appearance-none absolute opacity-0 bg-pink-500 cursor-pointer z-50 peer size-full"
        />
        <span className="absolute bg-slate-100 peer-checked:bg-green-300 size-[80px] left-2.5 rounded-full peer-checked:left-[110px] duration-300"></span>
      </div>

      <label
        className=" bg-blue-500 rounded-lg group has-[:checked]:rounded-[100px] duration-300 h-1/3 w-1/2 m-auto relative flex gap-4 items-center justify-center text-white"
        htmlFor="forCheckbox"
      >
        <input
          id="forCheckbox"
          type="checkbox"
          className="peer size-10 appearance-none opacity-0 cursor-pointer z-10 group "
        />
        <span className="absolute bg-white rounded-lg size-10 left-[calc(50%-50px)] peer-checked:bg-green-400 peer-checked:rotate-90 peer-checked:rounded-3xl duration-300"></span>
        <span className="absolute bg-pink-600 w-0 h-0.5 left-[calc(50%-30px)] peer-checked:w-[68px] duration-200 peer-checked:translate-x-6 "></span>
        <span className="absolute bg-pink-600 w-0 h-0.5 left-[calc(50%-30px)] top-[calc(50%-10px)] peer-checked:w-[68px] duration-200 peer-checked:translate-x-6 "></span>
        <span className="absolute bg-pink-600 w-0 h-0.5 left-[calc(50%-30px)] bottom-[calc(50%-10px)] peer-checked:w-[68px] duration-200 peer-checked:translate-x-6 "></span>
        <span className="text-2xl duration-300 peer-checked:text-slate-200">
          Bread
        </span>
      </label>
    </div>
  )
}
