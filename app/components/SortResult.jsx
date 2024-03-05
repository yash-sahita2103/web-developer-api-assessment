"use client"

import { useEffect, useState } from "react"
import Card from './Card'

function SortResults({movies}){
    const [filteredMovies, setFilteredMovies] = useState(movies.Search || [])
    useEffect (() =>{
        setFilteredMovies(movies.Search || [])
    } , [movies])

    const filterMovies = (filter) =>{
        let sortedMovies = [];
        switch (filter){
          case "Alpha":
            sortedMovies = filteredMovies.sort((a, b) => a.Title.localeCompare(b.Title))
            console.log(sortedMovies)
            break
          case "Reverse Alpha":
            sortedMovies = filteredMovies.sort((a, b) => b.Title.localeCompare(a.Title))
            console.log(sortedMovies)
            break
          default:
            sortedMovies = filteredMovies;
            break;
        }
        setFilteredMovies([...sortedMovies])
      }

    return(
    <div>
        <div className="d-flex justify-content-between mb-3">
            <select className="form-select" aria-label="Default select example" style={{width:"15rem"}}>
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <select onChange={(e) => filterMovies(e.target.value)} className="form-select" aria-label="Default select example" style={{width:"15rem"}}>
                <option selected>Sort By</option>
                <option value="Alpha">A-Z</option>
                <option value="Reverse Alpha">Z-A</option>
            </select>
        </div>
            <div className="d-flex flex-wrap gap-3">
                {filteredMovies.map(movie =>{
                  return <Card movie={movie}></Card>
                })}
    </div>

    </div>
        	
    )
}

export default SortResults