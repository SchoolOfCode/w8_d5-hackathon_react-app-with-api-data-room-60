import React, { useEffect, useState } from "react";

export function Superhero() {
    const [superhero, setSuperhero] = useState("")
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://superheroapi.com/api/access-token/search/name")
            const data = await response.json();
     
        setSuperhero(data)
        }
        getData()
    },[superhero])

}
