import { useContext, useState } from "react";
import { useLocation , Link , useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";



const Movie = ({data}) => {

    const Current_Location = useLocation()
    const goto = useNavigate()
    const [ UserName ] = useContext(UserContext)
    const [ isActive , setIsActive ]  = useState(false);

    const handleDelete = (e) => {
        localStorage.removeItem(e)
        goto('/Profile' , {replace:true})
    }

    const handleClick = () => {
        if( UserName === null || typeof(UserName) === 'object'  ){
            return goto( '/Login' , { replace : true } )
        }
        setIsActive(current => !current);
        localStorage.setItem(  data.id  , JSON.stringify(data)) 
      };


    return ( 
        <div className=" container p-2 animate__animated animate__fadeIn container col-md-4 g-1 onhover" key={data.id}>
            <div className="card text-bg-dark">
                <img src={'http://image.tmdb.org/t/p/original'+ data.backdrop_path } className="card-img zoom-in" alt="g"/>
            <div className="card-img-overlay p-4 test">
                <h5 className="card-title"> {data.title} </h5>
                <span className="card-text ms-1"><small> Rate : <i className="bi bi-star-fill"></i> {data.vote_average}</small></span>
                <span className="card-text ms-1 d-block my-1"><small>{data.release_date}</small></span>
                { Current_Location.pathname === '/Profile' ?  
                 <div>
                     <button onClick={ () => handleDelete(data.id) } className='btn btn-outline-danger'  > DELETE </button>
                     <Link to={`/Movie/${data.id}`} state={{ Movie : data }} ><button className="btn btn-outline-secondary mx-1 "> Details </button></Link>
                 </div>
                : 
                <div>
                    <button onClick={ handleClick } className={ isActive ? 'btn btn-outline-secondary disabled'  :  'btn btn-outline-secondary'  } > <i className="bi bi-star-fill"></i> Add To Fav !</button>
                    <Link to={`/Movie/${data.id}`} state={{ Movie : data }} ><button className="btn btn-outline-secondary mx-1 "> Details </button></Link>

                </div>

                 } 
            </div>
            </div>

        </div>


     );
}
 
export default Movie;