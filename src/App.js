import React from 'react';
import './styles/styles.scss';
import CourseGrid from './CourseGrid';
import Banner from './Banner'
import Formulario from './Formulario'



const App = () => (
  //segunda regla... solo puede devolver una cosa
  <>
    <Banner />

    <Formulario />

    < CourseGrid />
  
  </>
)

export default App;


// reglas JSX
// 1: Toda etiqueta debe cerrarce
// 2: Los componentes deben devolver un solo elemento padre
// 3: Apoyarse de los Fragments cuando necesito devolver 2 elementos
// 4: Fragment => <> hijos </>
// 5: Etiqueta img siempre se cierra
// 6: className => classNameName por que el elemento parece html pero NO ES HTML
// 7: for => htmlFor
// 8: no podemos usar ni IF ni else ni while