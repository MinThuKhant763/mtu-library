
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faTag, faHeart, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Footer from './Footer';
const Sidebar = () => {
    return (

        <>
            <div className='col-3 border-end position-fixed bg-light fs-5 lh-lg' style={ { height: "100vh", } } >
                <div className='d-flex flex-column' style={ { height: "92vh" } }>
                    <ul className="nav nav-pills flex-column m-2 mb-0 p-2 ">
                        <li className="nav-item">
                            <Link href="/" className="fs-5 nav-link active" aria-current="page">
                                <FontAwesomeIcon icon={ faHouse } className="me-3" />
                                <span className="d-none d-lg-inline">Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/major" className="fs-5 nav-link">
                                <FontAwesomeIcon icon={ faTag } className="me-3" />
                                <span className="d-none d-lg-inline">Major</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about" className="fs-5 nav-link">
                                <FontAwesomeIcon icon={ faHeart } className="me-3" />
                                <span className="d-none d-lg-inline">About us</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/account" className="fs-5 nav-link">
                                <FontAwesomeIcon icon={ faCircleUser } className="me-3" />
                                <span className="d-none d-lg-inline">Account</span>
                            </Link>
                        </li>
                        
                    </ul>
                    
                    <div className='mt-auto'>
                        <Footer />
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Sidebar;
