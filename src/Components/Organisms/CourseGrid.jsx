import React from 'react'
import Card from '../Molecules/Curso'

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

const CourseGrid = () => (
<div className="ed-grid m-grid-4">
    {
        cursos.map(c =>(
            <Card 
                key = {c.id}
                id = {c.id}
                title = {c.titulo}
                imagen = {c.image}
                precio = {c.precio}
                profesor = {c.profesor}
            />
        ))
    }
</div>
)

export default CourseGrid