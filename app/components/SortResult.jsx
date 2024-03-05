"use client";
import { useState, useEffect } from "react";
import Card from './Card';

function SortResults({ movies }) {
    const [filteredMovies, setFilteredMovies] = useState(movies.Search || []);
    const [yearRange, setYearRange] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        applyFilterAndSort();
    }, [movies, yearRange, sortOrder]);

    const applyFilterAndSort = () => {
        let updatedMovies = [...movies.Search];

        // Filter by year range if a range is set
        if (yearRange) {
            const [startYear, endYear] = yearRange.split("-").map(year => parseInt(year.trim(), 10));
            updatedMovies = updatedMovies.filter(movie => {
                const movieYear = parseInt(movie.Year, 10);
                return movieYear >= startYear && movieYear <= endYear;
            });
        }

        // Sort movies based on the selected sortOrder
        switch (sortOrder) {
            case "Alpha":
                updatedMovies.sort((a, b) => a.Title.localeCompare(b.Title));
                break;
            case "Reverse Alpha":
                updatedMovies.sort((a, b) => b.Title.localeCompare(a.Title));
                break;
            // Add more cases as needed for other sorting criteria
        }

        setFilteredMovies(updatedMovies);
    };

    return (
        <div>
            <div className="d-flex justify-content-between mb-3">
                <select onChange={(e) => setYearRange(e.target.value)} className="form-select" aria-label="Filter by year range" style={{width:"15rem"}}>
                    <option value="">Filter by Year Range</option>
                    <option value="2000 - 2010">2000 - 2010</option>
                    <option value="2010 - 2020">2010 - 2020</option>
                    {/* Add more ranges as needed */}
                </select>
                <select onChange={(e) => setSortOrder(e.target.value)} className="form-select" aria-label="Sort movies" style={{width:"15rem"}}>
                    <option value="">Sort By</option>
                    <option value="Alpha">Alphabetical</option>
                    <option value="Reverse Alpha">Reverse Alphabetical</option>
                </select>
            </div>
            <div className="d-flex flex-wrap gap-3">
                {filteredMovies.map(movie => (
                    <Card key={movie.imdbID} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default SortResults