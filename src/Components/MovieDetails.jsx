import { useLocation } from "react-router-dom";

const MovieDetails = () => {
    const location = useLocation()
    const { Movie } = location.state

    console.log(Movie);

    let imgUrl = 'url( http://image.tmdb.org/t/p/original' + Movie.backdrop_path  + ')'

    return ( 
        <div className="animate__animated animate__fadeIn detail p-5 ">
            <div className="card-img-overlay m-5 p-5 text-white full" style={ {  backgroundImage : imgUrl  } } >
                <div className="card-img-overlay  p-5 tests">
                    <h5 className="card-title">{Movie.title}</h5>
                    <p className="card-text">{Movie.overview}</p>
                    <p className="card-text"><small>{Movie.release_date}</small></p>
                </div>
            </div>
        </div>
     );
}
 
export default MovieDetails;