import Movie from "./Movie";

const FavMovies = () => {

    
    const keys = Object.keys(localStorage)
    
    return ( 
        <div className=" container p-2 animate__animated animate__fadeIn container" >
            <h1 className=" container text-white"> Ur Favorite Movies : </h1>
            <div className="container row ms-1">
            {
                keys.map( (key) => {

                    const data = JSON.parse(localStorage.getItem(key))
                    return  <Movie data={data} key={data.id } />
                } )
            
            }
            </div>
        </div>
     );
}
 
export default FavMovies;