import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons'


function AllJokes() {

    const [jokes, setJokes] = useState({})
    
    useEffect(() => {
        
        let url = 'http://localhost:3000/jokes';
        fetch(url, {
            
            method: 'get',
           
            })
            .then(function(data) {
                
                // data.data.slice(0,3)
                return data.json();
                // console.log(data.json());
            })
            .then(function(jsonData) {
                
                setJokes(jsonData)
                
            })
            .catch(function(error){
                alert("noget gik galt: " + error);
        })

    }, [])

    let jokeliste = "";
    
    if(jokes.length > 0){
        jokeliste = jokes.map(jks =>{
            return(
                <div className="border border-dark p-2 row my-5" key={jks._id}>
                    <Link className="col-10" to={'/udvalgt/' + jks._id} >
                        <div className="row">
                            <p className="col-4">{jks.vitsDate}</p>
                            <h2 className="h6 col-4 card-title text-dark p1">{jks.overskrift}</h2>
                            <p className="col-4">{jks.jokeText}</p>
                        </div>
                    </Link>
                    <Link className="col-1 text-warning h4" to={'/ret/' + jks._id}><FontAwesomeIcon icon={faPencilAlt} /></Link>
                    <Link className="col-1 text-danger h4" to={'/slet/' + jks._id}><FontAwesomeIcon icon={faTimesCircle} /></Link>
                </div>
            )
        })
    }
    else{
        return(
            <p>Jokes er på vej</p>
        )
    }

    return (
        <div>
            {jokeliste}
        </div>
    )
}

export default AllJokes
