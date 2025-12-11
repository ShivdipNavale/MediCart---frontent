import React from 'react'
import Auth from '../components/Auth'

const Register = () => {
    const handleRegisterSubmit = (e, payload) => {
        e.preventDefault();
        console.log(JSON.stringify(payload));
    }

    return (
        <div className="container">
            <Auth type="Register" onSubmit={handleRegisterSubmit} />
        </div>
    )
}

export default Register