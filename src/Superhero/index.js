import { useEffect, useState } from "react";
import { Appearance } from "../appearance";
import { HeroImage } from "../HeroImage";

export function Superhero() {
  const [dataResults, setDataResults] = useState([]);
  const [superhero, setSuperhero] = useState("");
  const [submited, setSubmited] = useState(false);
  useEffect(() => {
    if (submited) {
      async function getData() {
        const response = await fetch(
          `https://superheroapi.com/api/4369296219843776/search/${superhero}`
        );
        const data = await response.json();
        setDataResults(data.results);
        setSubmited(false);
        console.log(data.results);
        console.log(superhero);
      }
      console.log("helloo ");
      getData();
    }
  }, [superhero, submited]);
  function handleChange(e) {
    setSuperhero(e.target.value);
  }

  return (
    <div className="superhero">
      <h1>SuperHeroes</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("hi again");
          setSubmited(true);
        }}
      >
        <input type="text" placeholder="search" onChange={handleChange}></input>
        <button> Search </button>
      </form>
      <div>
        {!dataResults.length
          ? ""
          : dataResults.map((item, index) => (
              <div>
              <HeroImage hero= {item}/>
                <p>
                  {item.name}{" "}
                </p>
                <Appearance appearance={item.appearance} />
                <Appearance appearance={item.biography} />
              </div>
            ))}
      </div>
    </div>
  );
}
