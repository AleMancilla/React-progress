import React from 'react';
import './styles/styles.scss';
import CourseGrid from './CourseGrid';
import Banner from './Banner'
import Formulario from './Formulario'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



const App = () => (
  //segunda regla... solo puede devolver una cosa
  <Router>
    <Switch>
      <Route path = "/" exact component = { Banner /*ruta path es la ruta, exact es booleano t f, que componente imprime  */ }/>
      <Route path = "/cursos" exact component = {CourseGrid} />
      <Route path = "/Formulario" exact component = {() => <Formulario/> /* tambien puede recibir un callback */} />
      <Route component = {() => (
        <div className="ed-grid">
          <h1>ERROR 404</h1>
          <span>Pagina no encontrada</span>
        </div>
      ) } />
    </Switch>
    
    
  </Router>
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