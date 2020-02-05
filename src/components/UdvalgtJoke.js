import React, {useEffect, useState} from 'react'

function UdvalgtJoke(props) {
    
    const [enJoke, setEnJoke] = useState()
    console.log("den udvalgte id" + props.match.params.id);


    useEffect(() => {
        
        let url = 'http://localhost:3000/jokes/' + props.match.params.id;
        fetch(url, {
            
            method: 'get',
           
            })
            .then(function(data) {
                
                // data.data.slice(0,3)
                return data.json();
                // console.log(data.json());
            })
            .then(function(jsonData) {
                
                setEnJoke(jsonData)
                
            })
            .catch(function(error){
                alert("noget gik galt: " + error);
        })

    }, [setEnJoke, props.match.params.id])

    let joken = "";

    if(enJoke !== undefined){
        joken = (
            <div className="card col-12 mx-auto my-5 p-4">
                <h2 className="card-title">{enJoke.overskrift}</h2>
                <p className="card-text">{enJoke.jokeText}</p>
                <small>{enJoke.vitsDate}</small>
            </div>
        )
    }

    return (
        <div className="container">
            <h1>
                Din udvalgte joke
            </h1>
            {joken}
        </div>
    )
}

export default UdvalgtJoke
