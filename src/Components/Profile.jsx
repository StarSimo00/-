import { useContext} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";





const Profile = ({logout}) => {

    

    const [ UserName ] = useContext(UserContext)
    const goto_ = useNavigate();
    
    if( UserName === null || typeof(UserName) === 'object'  ){
        return goto_('/Login' , {replace : true})
    }

    return ( 
        <>

            <h2 className="text-white d-inline" > Welcome Mr: {UserName}  </h2>
            <button onClick={ () => logout() } className="btn btn-secondary"> Log Out </button>
        </>
     );
}
 
export default Profile;