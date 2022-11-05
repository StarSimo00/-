import { useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import FavMovies from "./FavMovies";





const Profile = ({logout}) => {

    

    const [ UserName ] = useContext(UserContext)
    const goto_ = useNavigate();
    
    useEffect( () => {if( UserName === null || typeof(UserName) === 'object'  ){
        return goto_('/Login' , {replace : true})
    }})

    return ( 
        <>
            <h2 className=" container p-2 animate__animated animate__fadeIn container ms-2 text-white d-inline" > Welcome  {UserName}  </h2>
            <button onClick={ () => logout() } className="btn btn-secondary"> Log Out </button>
            <FavMovies/>
        </>
     );
}
 
export default Profile;