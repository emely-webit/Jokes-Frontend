import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

function JokeSlet(props) {

    const history = useHistory();
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

    const deleteJoke = e =>{
        e.preventDefault();

        let url = 'http://localhost:3000/jokes/' + props.match.params.id;
        fetch(url, {
            
            method: 'DELETE',
        })
        .then(response =>{
            response.json()
            history.push("/administrator")
        })
        .then(json => {
            

                return json;
            })
        .catch(function(error){
            alert("noget gik galt: " + error);
        })
    }

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
                Er du sikker på du vil slette denne joke?
            </h1>
            {joken}
            <button className="btn btn-danger mr-3" onClick={() => {history.push("/administrator")}}>Fortryd</button><button onClick={deleteJoke} className="btn btn-success">Slet</button>
        </div>
    )
}

export default JokeSlet
