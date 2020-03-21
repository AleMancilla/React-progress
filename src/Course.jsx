import React from 'react'

const cursos = [
    {
        "id":1,
        "titulo":"React desde cero", 
        "image":"https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2020-03/Go-desde-cero.png",
        "precio":50,
        "profesor":"Alejandro Mancilla"
    },
    {
        "id":2,
      "titulo":"HTML desde cero", 
      "image":"https://res.cloudinary.com/edteam/image/upload/v1583002082/Postgresql-v03.png"
      ,"precio":80,
      "profesor":"Alejandro "
    },
    {
        "id":3,
      "titulo":"GO desde cero", 
      "image":"https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2020-01/gcp.png",
      "precio":40,
      "profesor":" Mancilla"
    },
    {
        "id":4,
      "titulo":"FLUTTER desde cero", 
      "image":"https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2020-02/scrum_normal-v05.png",
      "precio":30,
      "profesor":"Alejandro Mancilla"
    }
  ]

const Course = ({match}) => { // props son las propiedades y se guardan en match

    const cursoActual = cursos.filter( c => c.id === parseInt(match.params.id))[0]
    
    return(
        <div className = "ed-grid m-grid-3">
            {
            cursoActual ? (
                <>
                    <h1 className = "m-cols-3">{cursoActual.titulo}</h1>
                    <img className="m-cols-1" src ={cursoActual.image} at ="imagen"/>
                    <p className="m-cols-2">{cursoActual.profesor}</p>
                </> ) :
                <h1>NO EXISTE</h1>
           
        }
        </div>
    )
}



export default Course