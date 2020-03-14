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
// 3: Apoyarse de los Fragments cuando necesito devolver 2 elementos
// 4: Fragment => <> hijos </>
// 5: Etiqueta img siempre se cierra
// 6: class => className por que el elemento parece html pero NO ES HTML
// 7: for => htmlFor
// 8: no podemos usar ni IF ni else ni while