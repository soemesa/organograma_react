import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react'

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
      console.log(colaborador)
      setColaboradores([...colaboradores, colaborador])
  }
  

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    </div>
  );
}

export default App;
