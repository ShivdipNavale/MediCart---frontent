import { useState } from "react";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";

const Changepassword = () => {
    const [eye, setEye] = useState(false);
    const [data, setData] = useState({})
    const handleOnChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    return (
        <div className="container px-md-0 px-4 my-auto d-flex">
            <div className="col-xl-4 col-md-5 col-12 mx-auto my-auto">
                <div className="row g-4 px-3 py-4 rounded bg-body-tertiary border shadow-sm">
                    <div>
                        <h3 className="text-center fw-semibold text-success">Change Password</h3>
                        <p className="text-center mb-0 fs-sm"> Enter you password and confirm it. </p>
                    </div>
                    <form>
                        <div className="row g-3">
                            <div className={`position-relative d-flex align-items-center justify-content-end form-floating`}>
                                <input type={eye === true ? "text" : "password"} className="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={handleOnChange} />
                                <label htmlFor="floatingPassword"> New Password </label>
                                <div className="position-absolute px-2 m-1 bg-white text-secondary opacity-50" onClick={() => setEye(!eye)}>
                                    {eye ? <RiEyeFill /> : <RiEyeCloseFill />}
                                </div>
                            </div>
                            <div className={`position-relative d-flex align-items-center justify-content-end form-floating`}>
                                <input type={eye === true ? "text" : "password"} className="form-control" id="floatingCnfPassword" placeholder="Password" name="cnfPassword" onChange={handleOnChange} />
                                <label htmlFor="floatingCnfPassword"> Confirm Password </label>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-success w-100 mb-3"> Change Password </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Changepassword;