const Movie = ({data}) => {


    if( fetch('http://image.tmdb.org/t/p/original'+ data.backdrop_path) ){
            console.log('done')
    }else{
        console.log('not found')
    }

    return ( 
        <div className="container col-md-4 g-1 onhover" key={data.id}>
            <div className="card text-bg-dark">
                <img src={'http://image.tmdb.org/t/p/original'+ data.backdrop_path } className="card-img zoom-in" alt="g"/>
            <div className="card-img-overlay p-4 test">
                <h5 className="card-title"> {data.title} </h5>
                <span className="card-text ms-1"><small> Rate : <i className="bi bi-star-fill"></i> {data.vote_average}</small></span>
                <span className="card-text ms-1 d-block my-1"><small>{data.release_date}</small></span>
                <button className="btn btn-outline-secondary d-block"> <i className="bi bi-star-fill"></i> Add To Fav !</button>
            </div>
            </div>

        </div>


     );
}
 
export default Movie;