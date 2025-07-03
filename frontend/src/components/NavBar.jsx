import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const NavBar = () => {
  return (
      <>
          <nav className='navbar navbar-expand-lg navbar-light bg-white shadow-sm'>
              <div className='container-fluid'>
                  <div className='col'>
                      <Link className='navbar-brand ms-2' to="/">MTU</Link>
                  </div>
                  <div className='col collapse navbar-collapse' id='navbarSupportedContent'>
                      <ul className='navbar-nav me-auto gap-5'>
                          <li className='nav-item'>
                              <Link className='nav-link active' to="/">Home</Link>
                          </li>
                          <li className='nav-item'>
                              <Link className='nav-link' to="/about">About</Link>
                          </li>
                          <li className='nav-item'>
                              <Link className='nav-link' to="/major">Major</Link>
                          </li>
                          <form action="" className='d-flex align-items-center gap-2'>
                              <input className="form-control w-75" type="search" placeholder="Search books ... " aria-label="Search" />
                              <button className="btn btn-outline-primary" type="submit"><FontAwesomeIcon icon={ faMagnifyingGlass } /></button>
                          </form>

                      </ul>
                  </div>
                  <div className='d-flex col justify-content-end gap-2'>
                      <span className='btn btn-outline-primary me-2'>
                          <FontAwesomeIcon icon={ faMoon } />
                      </span>
                      <div className='btn btn-primary'>Sign In</div>
                  </div>
              </div>

          </nav>
          <Outlet />
      </>
  )
}

export default NavBar
