"use client";
import { useState, useEffect } from "react";
import Card from './Card';

function SortResults({ movies }) {                                                     // reciveing movies prop from page.js (server side)
    const [filteredMovies, setFilteredMovies] = useState(movies.Search || []);         // initalising orignial states of state variables to be used for sort/filter
    const [yearRange, setYearRange] = useState('');                                    
    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        applyFilterAndSort();                                                         // defining the function to be called when sort/filter variables are touched (changed)
    }, [movies, yearRange, sortOrder]);

    const applyFilterAndSort = () => {
        let updatedMovies = [...movies.Search];                                       // unpacking original array into a temp placeholder

      
        if (yearRange) {                                                             // codition if yearRange is changed
            const [startYear, endYear] = yearRange.split("-").map(year => parseInt(year.trim(), 10));
            updatedMovies = updatedMovies.filter(movie => {                          // updating temp placeholder according to movies in the filter range 
                const movieYear = parseInt(movie.Year, 10);
                return movieYear >= startYear && movieYear <= endYear;               
            });
        }

    
        switch (sortOrder) {
            case "Alpha":
                updatedMovies.sort((a, b) => a.Title.localeCompare(b.Title));        // updating temp placeholder according to sort movies    
                break;
            case "Reverse Alpha":
                updatedMovies.sort((a, b) => b.Title.localeCompare(a.Title));
                break;
            // Add more cases as needed for other sorting criteria
        }

        setFilteredMovies(updatedMovies);                                            // updating state variable to temp placeholder after manipulations 
    };

    return (
        <div>
            <div className="d-flex justify-content-between mb-3">                     
                <select onChange={(e) => setYearRange(e.target.value)} className="form-select" aria-label="Filter by year range" style={{width:"20rem"}}>
                    <option value="">Filter by Year Range</option>                   {/* capturing the value of the drop down selected and updating state variable */}   
                    <option value="0000 - 2024">All</option>
                    <option value="1980 - 1990">1990 - 2000</option>
                    <option value="1990 - 2000">1990 - 2000</option>
                    <option value="2000 - 2010">2000 - 2010</option>
                    <option value="2010 - 2020">2010 - 2020</option>
                </select>
                
                <select onChange={(e) => setSortOrder(e.target.value)} className="form-select" aria-label="Sort movies" style={{width:"20rem"}}>
                    <option value="">Sort By</option>                                 {/* capturing the value of the drop down selected and updating state variable */}       
                    <option value="Alpha">A - Z</option>
                    <option value="Reverse Alpha">Z - A</option>
                </select>
            </div>
            <div className="d-flex flex-wrap gap-4">
                {filteredMovies.map(movie => (
                    <Card key={movie.imdbID} movie={movie} />                          // passing prop of sorted/filtered movies to card component to display             
                ))}
            </div>
        </div>
    );
}

export default SortResults