export default function FuckCSS() {
  return (
    <>
      <div className="h-1/2 w-1/2 m-auto px-4 py-4 bg-pink-300 grid lg:grid-cols-2 gap-4">
        <div className="bg-red-600 lg:col-span-2"></div>
        <div className="bg-green-600"></div>
        <div className="bg-yellow-400 lg:row-span-2"></div>
        <div className="bg-blue-600"></div>
      </div>

      <div className="h-1/2 w-2/3 m-auto px-4 py-4 bg-pink-300 grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
        <div className="bg-red-600 "></div>
        <div className="bg-green-600"></div>
        <div className="bg-yellow-400 "></div>
        <div className="bg-blue-600"></div>
        <div className="bg-red-600 "></div>
        <div className="bg-green-600"></div>
        <div className="bg-yellow-400 "></div>
        <div className="bg-blue-600"></div>
      </div>
    </>
  )
}
