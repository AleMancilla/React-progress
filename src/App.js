import React,{Fragment} from 'react';
import './styles/styles.scss';

const App = () => (
  //segunda regla... solo puede devolver una cosa
  <Fragment>
    <h1>Hola Mundo2s</h1>
    <p>Saludo</p>
  </Fragment>
)

export default App;


// reglas JSX
// 1: Toda etiqueta debe cerrarce
// 2: Los componentes deben devolver un solo elemento padre
