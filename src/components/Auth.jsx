import { Link } from "react-router-dom"

const Auth = ({ type = "Login", onSubmit }) => {
    return (
        <section className={`${type === "Login" ? "py-5" : "py-2"}`}>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-8 col-lg-6~ col-xl-5">
                        <img
                            src="/auth_bg.svg"
                            className="img-fluid"
                            alt="Sample image"
                        />
                    </div>
                    <div className="col-md-9 col-lg-6 col-xl-4 offset-xl-1">
                        <div className="mb-4">
                            <span className="fs-2 fw-bold text-success">{type.toUpperCase()}</span>
                            <h4>
                                {type === "Login" ? "Welcome Back!" : "Create an Account"}
                            </h4>
                        </div>

                        <form onSubmit={onSubmit}>
                            {type === "Register" && (
                                <>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingName" placeholder="Sample user" />
                                        <label htmlFor="floatingName">Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control" id="floatingPhone" placeholder="+91 XXXXX XXXXX" />
                                        <label htmlFor="floatingPhone">Phone</label>
                                    </div>
                                </>
                            )}
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" />
                                <label htmlFor="floatingEmail">Email Address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <label htmlFor="floatingPassword"> Password </label>
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            </div>
                            {type === "Register" && (
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" placeholder="Address" id="floatingAddress"></textarea>
                                    <label htmlFor="floatingAddress">Address</label>
                                </div>
                            )}

                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="checkChecked" checked />
                                    <label className="form-check-label fs-sm" htmlFor="checkChecked"> Remember Me </label>
                                </div>
                                <Link to="/forgot-password" className="fs-sm">Forgot Password?</Link>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-success w-100 mb-3">
                                    {type}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Auth