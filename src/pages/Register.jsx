import React from 'react'
import Auth from '../components/Auth'

const Register = () => {
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        alert("Register form submitted!");
    }

    return (
        <>
            <div className="container">
                <Auth type="Register" onSubmit={handleRegisterSubmit} />
            </div>
        </>
    )
}

export default Register