import './App.css'
import WasteClassification from './nonui_components/WasteClassification'

function App() {

  return (
    <>
      <div className='bg-slate-800 h-screen flex flex-col items-center justify-center gap-1'>
        <p className='p-3 text-center text-xl bg-slate-800 text-white font-semibold'>
          Waste Classification
        </p>
        <WasteClassification />
      </div>
    </>
  )
}

export default App
