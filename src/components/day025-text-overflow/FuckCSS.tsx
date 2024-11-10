export default function FuckCSS() {
  return (
    <div className="m-auto flex h-1/2 w-1/2 flex-col gap-4 rounded-lg bg-indigo-300 p-4 font-mono text-lg text-white">
      <section className="h-6 overflow-hidden text-ellipsis whitespace-nowrap bg-indigo-500 px-4 leading-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tempore.
      </section>

      <section className="line-clamp-2 h-12 overflow-hidden text-ellipsis bg-indigo-500 px-4 leading-6">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus eos
        tenetur, quos dignissimos quaerat fuga, vero exercitationem, sequi dolor
        nobis ipsam omnis perferendis fugiat et ad temporibus rem quod corporis
        cupiditate odit quas nostrum suscipit? Aperiam officiis aliquid delectus
        quam.
      </section>
    </div>
  )
}
