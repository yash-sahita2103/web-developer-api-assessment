import Image from "next/image";
import { getMovies, testMovies } from "@/utils/requests";
import SortResults from "./components/SortResult";


export default async function HomePage() {


  const movies = await getMovies()
  console.log(movies.Search)
  return (
  <div className="container my-3 bg-dark-subtle rounded pb-3">
    <h1>Movies</h1>
    <SortResults movies={movies}></SortResults>

  </div>
  );
}
