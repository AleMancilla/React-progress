import React from 'react'

class Formulario extends React.Component {
    constructor(props){
        super(props)
        //con esto esta listo el constructor
    }

    //metodo obligatorio
    render(){
        return (
            <div className="ed-grid">
                <h1>Formulario</h1>
                <form>
                <div className="form__item">
                        <label>Nombre Completo:</label>
                        <input type="text" on></input>
                    </div>
                    <div className="form__item">
                        <label>Correo Electronico:</label>
                        <input type="email"></input>
                    </div>
                    <div className="form__item">
                        <input className="button full" type="submit" value="Enviar"></input>
                    </div>
                    <div>
                        <h3>{`hola ${this.props.nombre}`}</h3>
                        <span>{`tu correo es ${this.props.correo}`}</span>
                    </div>
                </form>
            </div>
        )
    }
}


export default Formulario