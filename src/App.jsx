import { useEffect, useState } from 'react'
import './App.css'
import BotonMovible from './components/BotonMovible/BotonMovible'
import BotonPosicion from './components/BotonPosicion/BotonPosicion'

function App() {
  const [nuevaPosX, setNuevaPosX] = useState(null)
  const [nuevaPosY, setNuevaPosY] = useState(null)
  const [yesClick, setYesClick] = useState(false)

  const sendPos = (x, y) => {
    setNuevaPosX(x)
    setNuevaPosY(y)
  }

  return (
    <>
      <div className='texto-btns'>
        <p className='texto'>Carr quieres salir el miercoles, 14 de febrero? :D</p>
        {nuevaPosX ? <BotonMovible nuevaPosX={nuevaPosX} nuevaPosY={nuevaPosY} /> : ""}
        <div className='buttons_container'>
          <div onClick={() => setYesClick(true)}> {/* Aquí se utiliza una función de flecha que llama a setYesClick(true) */}
            <BotonPosicion sendPos={sendPos} />
          </div>
          <button className='boton_invisible'>a</button>
        </div>
        <img className='capi' src="https://www.icegif.com/wp-content/uploads/2023/04/icegif-1080.gif" alt="" srcSet="" />
        {yesClick ? <img className='capi-si' src="https://img1.picmix.com/output/pic/normal/2/9/0/2/10592092_f0c06.gif" alt="" /> : ""}
      </div>
    </>
  )
}

export default App

