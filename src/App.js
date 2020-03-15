import React from 'react';
import './styles/styles.scss';
import Card from './Curso';


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
    <div className="main-banner img-container l-section" id="main-banner">
    <div classNameName="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src="https://i.pinimg.com/originals/69/55/8b/69558b1a4b38f75fa37d4978a7151fb0.jpg"  alt="ninguno"/>
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Título del banner</p>
          <p> Subtítulo del banner2</p>
          <a href="http://www.google.com" className="button">Botón del banner</a>
        </div>
      </div>
    </div>
  </div>

  <div className="ed-grid m-grid-3">

    {
      cursos.map( curs => <Card title = {curs.titulo} imagen = {curs.image} precio = {curs.precio} profesor = {curs.profesor} /> )// no usamos forech por que solo recorre en cambio map construlle un nuevo array
    }

  </div>

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