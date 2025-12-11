import { useState } from "react";
import { Link } from "react-router-dom"

const Auth = ({ type = "Login", onSubmit }) => {

    const [data, setData] = useState({ authType: "user" });
    const handleOnChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    return (
        <section className={`${type === "Login" ? "py-5" : "py-4"}`}>
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

                        <form onSubmit={(e) => onSubmit(e, data)}>
                            {type === "Login" && (
                                <div className="mb-3 d-flex gap-4 align-items-center">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="authType" id="userLogin" defaultChecked onChange={(e) => setData((prev) => ({...prev, authType: "user"}))} />
                                        <label className="form-check-label" htmlFor="userLogin">
                                            User Login
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="authType" id="adminLogin" onChange={(e) => setData((prev) => ({...prev, authType: "admin"}))} />
                                        <label className="form-check-label" htmlFor="adminLogin">
                                            Admin Login
                                        </label>
                                    </div>
                                </div>
                            )}
                            {type === "Register" && (
                                <>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingName" placeholder="Sample user" name="full-name" onChange={handleOnChange} />
                                        <label htmlFor="floatingName">Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control" id="floatingPhone" placeholder="+91 XXXXX XXXXX" name="phone" onChange={handleOnChange} />
                                        <label htmlFor="floatingPhone">Phone</label>
                                    </div>
                                </>
                            )}
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" name="email" onChange={handleOnChange} />
                                <label htmlFor="floatingEmail">Email Address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <label htmlFor="floatingPassword"> Password </label>
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={handleOnChange} />
                            </div>
                            {type === "Register" && (
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" placeholder="Address" id="floatingAddress" name="address" onChange={handleOnChange}></textarea>
                                    <label htmlFor="floatingAddress">Address</label>
                                </div>
                            )}
                            {type === "Login" && (
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="checkChecked" defaultChecked />
                                        <label className="form-check-label fs-sm" htmlFor="checkChecked"> Remember Me </label>
                                    </div>
                                    <Link to="/forgot-password" className="fs-sm">Forgot Password?</Link>
                                </div>
                            )}
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