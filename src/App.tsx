import FuckCSS from './components/day11-calendar/FuckCSS'

function App() {
  return (
    <div className="bg-blue-100 h-screen w-screen flex">
      <FuckCSS defaultValue={new Date('2003-11-11')}></FuckCSS>
    </div>
  )
}

export default App
