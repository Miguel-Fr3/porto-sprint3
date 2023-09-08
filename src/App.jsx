import { Outlet } from 'react-router-dom'
import './App.css'
import Cabecalho from './components/Cabecalho'

 function App(){


  return (
    <>
        <Cabecalho/>
        <Outlet/>
        
    </>
  )
}

export default App