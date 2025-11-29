import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Navbar from './components/navbar'


function App() {
  

  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>  
     
    </>
  )
}

export default App
