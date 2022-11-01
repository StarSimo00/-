import Movie from "./Movie";

const Popular = ({data}) => {
    return ( 
        <>
            <div className="container p-2 animate__animated animate__fadeIn">
                <h2 className="text-white m-3 "> Popular </h2>
                <div className="container row">

                    { data.map( (movie) => {
                       
                         
                       return <Movie key={movie.id} data={movie} /> ;
                            
                    } )}
                </div>
            </div>
        </>
     );
}
 
export default Popular;