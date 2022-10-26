import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Background from './components/background/Background'
import Navleft from './components/NavLeft/Navleft'
import Home from './pages/Home/Home'

function App() {

  return (
    <>
      <Navleft />
      <Background />
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
