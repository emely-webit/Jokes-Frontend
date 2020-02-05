import React from 'react'
import { NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="#">Logo</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/alle_jokes">Jokes</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/administrator">Administrator</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
