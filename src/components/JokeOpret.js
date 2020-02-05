import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
// import axios from 'axios'

function JokeOpret() {

    const [opJoke, setOpJoke] = useState({});
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();

        let url = 'http://localhost:3000/jokes';
        fetch(url,  {
            
            
            method: 'POST',

            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(opJoke),
           
            })
            .then(function(data) {
                
                // data.data.slice(0,3)
                // return data.json();
                console.log(data);
                history.push("/administrator")
            })
            .catch(function(error){
                alert("noget gik galt: " + error);
        })

        // axios.post("http://localhost:3000/jokes", opJoke)
        //     .then(res => {
        //         console.log(res.data);
        //         history.push("/administrator")
        //     })
        //     .catch((error) =>{
        //         console.log(error);
        //     })
    }

    return (
        <div className="container">
            <h1 className="py-5">Opret en ny joke</h1>
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input name="overskrift" onChange={(e) => setOpJoke({...opJoke, overskrift: e.target.value})} type="text" className="form-control" placeholder="Jokens overskrift"/>
                </div>
                <div className="form-group">
                    <textarea name="joketekst" rows="3" onChange={(e) => setOpJoke({...opJoke, jokeText: e.target.value})} className="form-control" placeholder="Jokens tekst....."></textarea>
                </div>
                <button type="button" onClick={() => {history.push("/administrator")}} className="btn btn-danger mr-3">Fortryd</button>
                <button type="submit" className="btn btn-success">Gem joke</button>
            </form>
        </div>
    )
}

export default JokeOpret
