"use client"

import { useEffect, useState } from "react"

function SortResults({movies}){
    const [filteredMovies, setFilteredMovies] = useState(movies)
    useEffect (() =>{
        setFilteredMovies(movies)
    } , [movies])

    const filterMovies = (filter) =>{
        let sortedMovies = [];
        switch (filter){
          case "Alpha":
            sortedMovies = [...movies.Search].sort((a, b) => a.Title.localeCompare(b.Title))
            console.log(sortedMovies)
            break
          case "Reverse Alpha":
            sortedMovies = [...movies.Search].sort((a, b) => b.Title.localeCompare(a.Title))
            console.log(sortedMovies)
            break
          default:
            sortedMovies = [...movies.Search];
            break;
        }
        setFilteredMovies(sortedMovies)
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
                <option value="Alpha">Alpha</option>
                <option value="Reverse Alpha">Reverse Alpha</option>
            </select>
        </div>

    </div>
        	
    )
}

export default SortResults