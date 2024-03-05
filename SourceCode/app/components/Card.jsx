import Link from "next/link"

function Card({movie}){                                                                                     // accepting movies if sort/filter untouched or else filtered_movies 
    return(
        <div >
            <div className="card" style={{width:'15rem'}}>
                <img className="card-img-top" src={movie.Poster}  style={{height:'18rem'}}></img>
                <div className="card-body" style={{height:'6rem'}}>
                    <h5 className="card-title text-center">{movie.Title} ({movie.Year})</h5>
                </div>
            </div>
        </div>
    )
}

export default Card