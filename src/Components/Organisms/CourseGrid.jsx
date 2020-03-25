import React from 'react'
import Card from '../Molecules/Curso'
import { Component } from 'react'
import axios from 'axios'


class CourseGrid extends Component {

  constructor (props){
    super(props)

    this.state = {
      cursos: []
    }
  }

  componentDidMount(){
    axios.get('http://my-json-server.typicode.com/AleMancilla/AleMancilla/cursos')
    .then(resp => this.setState({
      cursos: resp.data
    }))
  } 

  render(){

    const{ cursos } = this.state

    return(
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
  }
}


export default CourseGrid