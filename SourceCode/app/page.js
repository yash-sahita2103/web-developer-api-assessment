import { getMovies} from "@/utils/requests";
import SortResults from "./components/SortResult";


export default async function HomePage() {
  const movies = await getMovies()                                       // using an async call (promise) to load the data from endpoint
  return (
  <div className="container my-3 bg-dark-subtle rounded pb-3">
    <h1 className="text-center">Movies DB</h1>
    <SortResults movies={movies}></SortResults>                          {/* passing movies as a prop to the SortResult (client side) rendering and sortings */} 
  </div>
  );
}
