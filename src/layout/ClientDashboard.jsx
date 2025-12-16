import { useEffect } from "react";
import { MdAccountCircle } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";


const ClientDashboard = () => {
    
    // const { path } = useParams();
    // const handleRendring = (path) => {
    //     switch (path) {
    //         case undefined:
    //             return <h1>Welcome to Client Dashboard</h1>
    //         case 'prescription-upload':
    //             return <PrescriptionUpload />
    //         case 'link-2':
    //             return <h1>Link 2 Content</h1>
    //         case 'link-3':
    //             return <h1>Link 3 Content</h1>
    //         case 'account':
    //             return <Accounts />
    //         default:
    //             return <h1>Invalid Path</h1>
    //     }
    // }

    useEffect(() => {
        console.log("User Identified");
    }, [])


    return (
        <div className="w-100 d-flex vh-100 bg-body-secondary">
            <div className="col-3 rounded-end-4 bg-body-tertiary shadow-sm border d-flex flex-column">
                <div className="border-bottom py-2 px-3">
                    <span className="navbar-brand-name fs-4">MediCart</span>
                </div>

                <div>
                    <ul className="list-unstyled">
                        <li className="border m-3 rounded-3 shadow-sm sidebar-list">
                            <Link className="p-2 text-decoration-none text-secondary fw-semibold d-block" to="/dashboard/client/prescription">
                                Prescription
                            </Link>
                        </li>
                        <li className="border m-3 rounded-3 shadow-sm sidebar-list">
                            <Link className="p-2 text-decoration-none text-secondary fw-semibold d-block" to="/dashboard/client/orders">
                                Orders
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="mt-auto">
                    <div className="border m-3 rounded-3 sidebar-list">
                        <Link to="/dashboard/client/account" className="p-2 d-flex align-items-center gap-2 text-decoration-none">
                            <MdAccountCircle className="fs-4 text-primary" />
                            <span className="fw-bold text-secondary"> Sample Account </span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="col-9 px-3 py-2">
                <Outlet />
            </div>
        </div>
    )
}

export default ClientDashboard