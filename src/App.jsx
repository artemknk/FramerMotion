import './App.css'
import BauhausIntro from './components/Bauhaus/Bauhaus'
import ColorLetter from './components/ColorLetter/ColorLetter'
import Gradient from './components/Gradient/Gradient'
import RussianAvangard from './components/RussianAvangard/RussianAvangard'
function App() {
  return (
    <div className="App">
      <BauhausIntro />
      <ColorLetter />
      <Gradient />
      <RussianAvangard />
    </div>
  )
}

export default App
