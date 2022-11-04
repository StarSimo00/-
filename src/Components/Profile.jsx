import { useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Fav_Movies from "./Fav_Movies";





const Profile = ({logout}) => {

    

    const [ UserName ] = useContext(UserContext)
    const goto_ = useNavigate();
    
    useEffect( () => {if( UserName === null || typeof(UserName) === 'object'  ){
        return goto_('/Login' , {replace : true})
    }})

    return ( 
        <>
            <h2 className=" container ms-2 text-white d-inline" > Welcome Mr: {UserName}  </h2>
            <button onClick={ () => logout() } className="btn btn-secondary"> Log Out </button>
            <Fav_Movies/>
        </>
     );
}
 
export default Profile;