export default function FuckCSS() {
  return (
    <div className="sticky top-10 flex h-1/2 w-1/2 flex-wrap gap-4 rounded-lg bg-indigo-300 p-4 font-mono text-lg text-white">
      <div
        className="size-28"
        style={{ background: 'linear-gradient(to right, #fff, #000)' }}
      >
        1
      </div>
      <div
        style={{ background: 'radial-gradient(#fff, #000)' }}
        className="size-28"
      >
        1
      </div>
      <div
        style={{ background: 'conic-gradient(#fff, #000)' }}
        className="size-28"
      >
        1
      </div>
      <div
        style={{
          background: 'linear-gradient(#fff 0%,#fff 50%, #e88 50%, #e88 100%)',
        }}
        className="size-28"
      >
        1
      </div>

      <div
        style={{
          background:
            'linear-gradient(45deg, #f00 0%, #f00 50%, transparent 50%, transparent 100%)',
        }}
        className="size-28"
      >
        1
      </div>
    </div>
  )
}
