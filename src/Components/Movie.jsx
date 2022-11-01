const Movie = ({data}) => {
    return ( 
        <div className="container col-6 g-2 " key={data.id}>
            <div className="card text-bg-dark">
                <img src={'http://image.tmdb.org/t/p/original'+ data.backdrop_path } className="card-img zoom-in" />
            <div className="card-img-overlay p-4 test">
                <h5 className="card-title"> {data.title} </h5>
                <p className="card-text ms-2"> {data.overview} </p>
                <p className="card-text ms-1"><small> <i class="bi bi-star-fill"></i> {data.vote_average}</small></p>
            </div>
            </div>

        </div>


     );
}
 
export default Movie;