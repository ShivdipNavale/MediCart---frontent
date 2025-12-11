import React from 'react'
import Auth from '../components/Auth'

const Login = () => {
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        alert("Login form submitted!");
    }

    return (
        <>
            <div className="container">
                <Auth type="Login" onSubmit={handleLoginSubmit} />
            </div>
        </>
    )
}

export default Login