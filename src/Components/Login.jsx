const Login = () => {
    return ( <>
        <div className="container p-2 d-flex ">
            <form className="container text-white p-2 ">
                <div>
                    <label className="mx-2 my-2"> Email : </label>
                    <input type="email" />
                </div>
                {/* <hr /> */}
                <div >
                    <label className="mx-2 my-2"> UserName : </label>
                    <input type="text" />
                </div>
                <div className="d-inline">
                    <button className="btn btn-secondary mx-2 my-2"> Login </button>
                </div>
            </form>
        </div>
    </> );
}
 
export default Login;