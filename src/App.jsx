import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'

import { Minute } from './components/Minute'
import { Header } from './components/Header'
import { Hour } from './components/Hour'
import { Month } from './components/Month'
import { Week } from './components/Week'
import { Year } from './components/Year'
import { Day } from './components/Day'
import { Notfound } from './components/Notfound'
import { Footer } from './components/footer/Footer'

function App() {
 

  return (
    <>

    <BrowserRouter>

      <Header/>

      <Routes>

        <Route path='/' element={<Year/>}/>
        <Route path='/year' element={<Year/>}/>
        <Route path='/month' element={<Month/>}/>
        <Route path='/week' element={<Week/>}/>
        <Route path='/day' element={<Day/>}/>
        <Route path='/hour' element={<Hour/>}/>
        <Route path='/minute' element={<Minute/>}/>
        <Route path='*' element={<Notfound/>}/>
        

      </Routes>

      <Footer/>
    
    </BrowserRouter>   
        
    </>
  )
}

export default App
