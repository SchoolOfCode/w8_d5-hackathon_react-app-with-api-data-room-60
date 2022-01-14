import { useEffect, useState } from "react";

export function Superhero({ onSubmit }) {
    const [superhero, setSuperhero] = useState("")
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://superheroapi.com/api/4369296219843776/search/batman")
            const data = await response.json();
            setSuperhero(data)
            console.log(data)

        }
        getData()
    }, [])
    function handleChange(e) {
        setSuperhero(e.target.value)
    }
    function onSubmit() {
     
          
    }
    return superhero ? (
        <div className="App">
            <h1>SuperHeroes</h1>
            <input type="text" placeholder="search" onChange={handleChange} ></input>
            <button onClick={() => { onSubmit(superhero) }}></button>
        </div>
        
    ) : (
        <></>
    );
}
