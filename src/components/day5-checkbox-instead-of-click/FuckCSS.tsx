export default function FuckCSS() {
  return (
    <div className="h-1/2 w-1/2 m-auto flex items-center gap-4">
      <label
        htmlFor="pp"
        className="bg-pink-200 h-1/2 w-1/2 font-mono flex items-center justify-center gap-3 text-2xl has-[:checked]:shadow-none duration-300 shadow-lg"
      >
        <input type="checkbox" name="" id="pp" className="size-6 peer" />
        <p
          id="pp"
          className="peer-checked:line-through underline-offset-2 peer-checked:text-red-600"
        >
          Lorem, ipsum dolor.
        </p>
      </label>
    </div>
  )
}
