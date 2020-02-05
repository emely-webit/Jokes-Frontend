import React from 'react'
import AllJokes from './AllJokes';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'



function JokeAdmin() {
    return (
        <section className="container">
            <article className="border border-dark p-2 row my-5">
                <div className="col-10">
                    <div className="row">
                        <p className="col-4">ID</p>
                        <h2 className="h6 col-4 card-title text-dark p1">Overskrift</h2>
                        <p className="col-4">Joke tekst</p>
                    </div>
                </div>
                
                <p className="col-1" to="/ret">Ret</p>
                <p className="col-1" to="/delete">Slet</p>

            </article>
            <Link to="/opret" className="text-dark h5"> <FontAwesomeIcon className="text-success" icon={faPlusCircle}/> Opret ny joke</Link>
            <AllJokes/>
        </section>
    )
}

export default JokeAdmin
