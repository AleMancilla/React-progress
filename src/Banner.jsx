import React from 'react'

const Banner = () => (
<>
<div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
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
</>
)

export default Banner;