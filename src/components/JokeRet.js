import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
// import axios from 'axios'

function JokeRet() {

    const [retJoke, setRetJoke] = useState({});
    const history = useHistory();
    const {id} = useParams(); 



    useEffect(() => {
        
        let url = 'http://localhost:3000/jokes/' + id;
            fetch(url, {
                
                method: 'GET',
            
                })
                .then(function(data) {
                    
                    // data.data.slice(0,3)
                    return data.json();
                    // console.log(data.json());
                })
                .then(function(jsonData) {
                    
                    setRetJoke({overskrift: jsonData.overskrift, jokeText: jsonData.jokeText})
                    
                })
                .catch(function(error){
                    alert("noget gik galt: " + error);
            })
           

    }, [id])

    const retfuncJoke = (e) =>{
        e.preventDefault();

        let url = 'http://localhost:3000/jokes/' + id;
        fetch(url,  {
            
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(retJoke),
        })
        .then(res =>{
            alert('joken er rettet')
            history.push("/administrator")
        })
        .catch(function(error){
            alert("noget gik galt: " + error);
        })
    
    }

    return (
        <div className="container">
            <h1 className="py-5">Ret joke</h1>
            <form onSubmit={retfuncJoke}>
                <div className="form-group">
                    <input defaultValue={retJoke.overskrift} onChange={(e) => setRetJoke({...retJoke, overskrift: e.target.value})} type="text" name="overskrift" className="form-control" placeholder="Jokens overskrift" />
                </div>
                <div className="form-group">
                    <textarea name="joketekst" rows="3" defaultValue={retJoke.jokeText} onChange={(e) => setRetJoke({...retJoke, jokeText: e.target.value})} className="form-control" placeholder="Joketekst her...." ></textarea>
                </div>
                <button type="button" onClick={() => {history.push("/administrator")}} className="btn btn-danger mr-3">Fortryd</button>
                <button type="submit" className="btn btn-success">Gem joke</button>
            </form>

            

        </div>
    )
}

export default JokeRet
