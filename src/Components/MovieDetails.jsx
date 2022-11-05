import { useLocation } from "react-router-dom";

const MovieDetails = () => {
    const location = useLocation()
    const { Movie } = location.state

    console.log(Movie);
    return ( 
        <div className="animate__animated animate__fadeIn">
        
        <div class="card text-bg-dark">
            <img src={'http://image.tmdb.org/t/p/original'+ Movie.backdrop_path } height={541} className='detail' alt={`Movie Img ${Movie.title}`} />
            <div class="card-img-overlay m-5 p-5">
                <h5 class="card-title">{Movie.title}</h5>
                <p class="card-text">{Movie.overview}</p>
                <p class="card-text"><small>{Movie.release_date}</small></p>
            </div>
        </div>
        </div>
     );
}
 
export default MovieDetails;