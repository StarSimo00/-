import Movie from "./Movie";

const Fav_Movies = () => {

    
    const keys = Object.keys(localStorage)
    
    return ( 
        <div className="container" >
            <h1 className=" container text-white"> Ur Favorite Movies : </h1>
            <div className="container row ms-1">
            {
                keys.map( (key) => {

                    const data = JSON.parse(localStorage.getItem(key))
                    return  <Movie data={data} />
                } )
            
            }
            </div>
        </div>
     );
}
 
export default Fav_Movies;