import React from 'react';
import './styles/styles.scss';
import Card from './Curso';
import Banner from './Banner'
import Formulario from './Formulario'

const cursos = [
  {
    "titulo":"React desde cero", "image":"algo.jpg","precio":50,"profesor":"Alejandro Mancilla"
  },{
    "titulo":"HTML desde cero", "image":"algo.jpg","precio":80,"profesor":"Alejandro "
  },{
    "titulo":"GO desde cero", "image":"algo.jpg","precio":40,"profesor":" Mancilla"
  },{
    "titulo":"FLUTTER desde cero", "image":"algo.jpg","precio":30,"profesor":"Alejandro Mancilla"
  }
]


const App = () => (
  //segunda regla... solo puede devolver una cosa
  <>
    <Banner />

    <Formulario />
  



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