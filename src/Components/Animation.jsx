import Movie from "./Movie";

const Animation = ({data}) => {
    return ( 
        <>
            <div className="container p-2 animate__animated animate__fadeIn">
                <h2 className="text-white m-3"> Animation </h2>
                <div className="container row ms-1">

                    { data.map( (movie) => {
                       
                         
                       return <Movie key={movie.id} data={movie} /> ;
                            
                    } )}
                </div>
            </div>
        </>
     );
}
 
export default Animation;