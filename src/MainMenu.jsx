import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const MainMenu = () => (
    <>
        <header class="main-header">
            <div class="ed-grid s-grid-5 lg-grid-4">
            <div class="s-cols-4 lg-cols-1 s-cross-center"><a href="/"><img class="main-logo" src="https://ux.ed.team/img/edteam-ux-logo.svg" /></a></div>
            <div class="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
            <nav class="main-menu" id="main-menu">
                <ul>
                    <li><NavLink exact to="/">INICIO</NavLink></li>
                    <li><NavLink to="/cursos">Cursos</NavLink></li>
                    <li><NavLink to="/Formulario">Formulario</NavLink></li>
                </ul>
            </nav>
            <div class="main-menu-toggle to-l" id="main-menu-toggle"></div>
            </div>
        </div>
        </header>
    </>
)

export default MainMenu