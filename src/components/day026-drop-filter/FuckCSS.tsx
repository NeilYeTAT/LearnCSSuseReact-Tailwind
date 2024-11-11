export default function FuckCSS() {
  return (
    <div className="m-auto flex h-1/2 w-1/2 flex-col gap-4 rounded-lg bg-indigo-300 p-4 font-mono text-lg text-white">
      <section
        className="h-1/2 w-1/2 bg-[url('assets/ZhuiTransparent.png')] bg-contain"
        style={{
          filter: 'drop-shadow(0 0 0.75rem crimson)',
        }}
      ></section>
      <section
        className="h-1/2 w-1/2 bg-[url('assets/ZhuiTransparent.png')] bg-contain"
        style={{
          boxShadow: '0 0 0.75rem crimson',
        }}
      ></section>
    </div>
  )
}
