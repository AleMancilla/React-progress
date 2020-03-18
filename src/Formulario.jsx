import React from 'react'

class Formulario extends React.Component {
    constructor(props){
        super(props)
        //con esto esta listo el constructor

        this.state = {
            nombre:"",
            correo: ""
        }//NOTA el estado como tal es solo para este componente
        //se le puede pasar en herencia pero como props

        // this.setState({recibe un objeto}) actualiza el estado
    }

    //metodo obligatorio
    render(){
        return (
            <div className="ed-grid">
                <h1>Formulario</h1>
                <form>
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label>Nombre Completo:</label>
                            <input type="text" 
                            onChange={ e => this.setState({
                                nombre: e.target.value
                            }) /* hacemos un callback*/}>

                            </input>
                        </div>
                        <div className="form__item">
                            <label>Correo Electronico:</label>
                            <input type="email" onChange={ e => this.setState({
                                correo: e.target.value
                            })}></input>
                        </div>
                    </div>
                    
                    <div className="form__item">
                            <input className="button full" type="submit" value="Enviar"></input>
                        </div>

                    <div>
                        <h3>{`hola ${this.state.nombre}`}</h3>
                        <span>{`tu correo es ${this.state.correo}`}</span>
                    </div>
                </form>
            </div>
        )
    }
}


export default Formulario