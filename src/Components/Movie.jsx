import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";



const Movie = ({data}) => {

    const Current_Location = useLocation()
    const goto = useNavigate()
    const [ UserName ] = useContext(UserContext)
    const [ isActive , setIsActive ]  = useState(false);

    const handleDelete = (e) => {
        localStorage.removeItem(e)
    }

    const handleClick = () => {
        if( UserName === null || typeof(UserName) === 'object'  ){
            return goto( '/Login' , { replace : true } )
        }
        setIsActive(current => !current);
        localStorage.setItem(  data.id  , JSON.stringify(data)) 
      };

      console.log(Current_Location.pathname)

    return ( 
        <div className="container col-md-4 g-1 onhover" key={data.id}>
            <div className="card text-bg-dark">
                <img src={'http://image.tmdb.org/t/p/original'+ data.backdrop_path } className="card-img zoom-in" alt="g"/>
            <div className="card-img-overlay p-4 test">
                <h5 className="card-title"> {data.title} </h5>
                <span className="card-text ms-1"><small> Rate : <i className="bi bi-star-fill"></i> {data.vote_average}</small></span>
                <span className="card-text ms-1 d-block my-1"><small>{data.release_date}</small></span>
                { Current_Location.pathname === '/Profile' ?  
                 <button onClick={ () => handleDelete(data.id) } className='btn btn-outline-danger d-block'  > DELETE </button> 
                : 
                <button onClick={ handleClick } className={ isActive ? 'btn btn-outline-secondary d-block disabled'  :  'btn btn-outline-secondary d-block'  } > <i className="bi bi-star-fill"></i> Add To Fav !</button> 
                 } 
            </div>
            </div>

        </div>


     );
}
 
export default Movie;