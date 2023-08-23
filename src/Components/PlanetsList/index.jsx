import {useState} from 'react';
import planetsData from "../../assets/data/planets.json";
import Summary from '../PlanetSummary';
import PlanetCard from '../PlanetCard';

function PlanetList(){
    // State Variables
    const [planets, setPlanets] = useState(planetsData);
    const [planetDeleted, setDeletedPlanets] = useState(0);
    
    // Function Declaration
    const deletePlanet = (planetId) =>{
      /*   const filteredPlanets = planets.filter((planet)=>{
            return planet.id !== planetId;
        }) */
        const planetCopy  = [...planets];
        planetCopy.forEach((planet, index) =>{
          if (planet.id === planetId){
            planetCopy.splice(index, 1)
          }
        })
        
        setPlanets(planetCopy);
        setDeletedPlanets(planetDeleted + 1)
    }

    const resetPlanets = () =>{
       setPlanets(planetsData);
       setDeletedPlanets(0);
    }

    const deleteAllPlanets = () =>{
        setPlanets([]);
        setDeletedPlanets(planetDeleted.length)
    }


    return(
        <div>
            <h2>🪐 Planets List 🪐</h2>
            <button onClick={resetPlanets}>Reset All Planets</button>
            <button onClick={deleteAllPlanets}>Delete All Planets</button>
            <Summary planetDeleted = {planetDeleted} />
            {planetDeleted < 9 && planets.map((planet)=>{
                return(
                   <PlanetCard
                   key={planet.id}
                   planet={planet}
                   clickToDelete={deletePlanet} />
                )
            })}
        </div>
    )
}

export default PlanetList;