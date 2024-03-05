const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_API_KEY

export const getMovies = async () => {
    const res = await fetch('https://www.omdbapi.com/?s=movie&apikey=30946148&');
    const data = await res.json();
    return data
}

export const testMovies = async () => {
    const res = await fetch('https://www.omdbapi.com/?s=harry&apikey=30946148');
    const data = await res.json();
    return data
}