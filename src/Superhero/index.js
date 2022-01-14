import { useEffect, useState } from "react";

export function Superhero({ onSubmit }) {
    const [dataResults, setDataResults] = useState([])
    const [superhero, setSuperhero] = useState("")
    const [submited, setSubmited] = useState(false)
    useEffect(() => {
        if (submited) {
            async function getData() {
                const response = await fetch(`https://superheroapi.com/api/4369296219843776/search/${superhero}`)
                const data = await response.json();
                setDataResults(data.results)
                console.log(data.results)
                console.log(superhero)
            }
            console.log("helloo ")
            getData()

        }

    }, [submited])
    function handleChange(e) {
        setSuperhero(e.target.value)
    }

    return (
        <div className="App">
            <h1>SuperHeroes</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log("hi again")
                setSubmited(true)
            }}>
                <input type="text" placeholder="search" onChange={handleChange} ></input>
                <button> Search </button>
            </form>
            <div>

                {!submited ? "" : (
                    dataResults.map((item, index) => (
                        <p>key ={item.id} name = {item.name} </p>
                    )))}
            </div>
        </div>
    )
}

