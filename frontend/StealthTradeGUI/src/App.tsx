import './App.css'
import Navbar from './components/Navbar'
import bgImage from './assets/image.png'
import { Route, Routes } from 'react-router-dom'
import Clan from './components/Clan'
import Orders from './components/Orders'
import Create from './components/Create'
import Settings from './components/Settings'

function App() {

  return (
    <>
    <div className='bg-cover h-full w-full backdrop-blur-md' style={{backgroundImage: `url(${bgImage})`}}>
    <Navbar/>
    <Routes>
    <Route path='/clans' element={<Clan/>}/>
    <Route path='/orders' element={<Orders/>}/>
    <Route path='/create' element={<Create/>}/>
    <Route path='/settings' element={<Settings/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
