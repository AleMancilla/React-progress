import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Card = ({id,title,imagen,precio,profesor}) => ( // props es un objeto que almacena todas las propiedades que se le envian
        <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <Link to ={`/cursos/${id}`} >
                <img src={imagen} alt={title} />
            </Link>
            
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 classNameName="center">{title}</h3>
            <div classNameName="s-mb-2 s-main-center">
            <div className="card__teacher s-cross-center">
                <div className="card__avatar s-mr-1">
                <div className="circle img-container">
                    <img src="data:image/jpeg;base64,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" alt="" />
                </div>
                </div>
                <span className="small">{`${profesor}`}</span>
            </div>
            </div>
            <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="http://www.google.com">{`$ ${precio}`}</a>
            </div>
        </div>
        </article>
)


Card.propTypes = {
    title:PropTypes.string,
    imagen:PropTypes.string,
    precio:PropTypes.number,
    profesor:PropTypes.string
}

Card.defaultProps = {
    title:"No hay Titulo",
    imagen:"https://i.pinimg.com/originals/92/7c/b9/927cb936d41df0eb35958a65622c451c.jpg",
    precio: 0,
    profesor: "No hay profesor"
}

export default Card