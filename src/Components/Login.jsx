
const Login = ({login , data}) => {

    return ( <>
        <div className="container p-2 d-flex ">
            <form className="container text-white p-2 ">
                <div >
                    <label className="mx-2 my-2"> UserName : </label>
                    <input type="text" id="UserName" onChange={ (e) => data(e.currentTarget.value) }/>
                </div>
                <div className="d-inline">
                    <button type="button" className="btn btn-secondary mx-2 my-2" onClick={ () => {login() } }> Login </button>
                </div>
            </form>
        </div>
    </> );
}
 
export default Login;