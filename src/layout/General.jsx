import { Link, Outlet } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand-name"> MediCart </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="ms-auto d-flex gap-2">
                        <Link to="/login" className="btn btn-sm btn-success"> Login </Link>
                        <Link to="/register" className="btn btn-sm btn-success"> Register </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const Client = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Client