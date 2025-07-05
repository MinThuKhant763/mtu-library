
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faMoon } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
      < >
          <nav className="navbar navbar-light bg-light border-bottom fixed-top shadow-sm">
              <div className="container-fluid position-sticky">
                  <div className='col-4'>
                      <Link className="navbar-brand " href="#">
                          <img src="src/assets/MTU_Mandalay_Technological+University.png" alt="MTU" width="60" height="60" className="d-inline-block align-text-middle" />
                          <span className='text-black h4'><mark>Mandalay Technological University</mark></span>
                      </Link>
                  </div>
                  <div className=' col-6'>
                      <form className="">
                          <div className="input-group w-75 mx-auto">
                              <input type="text" className="form-control" placeholder="Search books ..." aria-label="Username" aria-describedby="basic-addon1" />
                              <span className="input-group-text btn btn-primary" id="basic-addon1">
                                  <FontAwesomeIcon icon={ faMagnifyingGlass } />
                              </span>
                          </div>
                      </form>
                  </div>
                  <div className='col-2 d-flex justify-content-end gap-3 align-items-center'>
                      <button className='btn btn-outline-primary'><FontAwesomeIcon icon={ faMoon } /></button>
                      <button className='btn btn-primary'>Logout</button>
                  </div>
              </div>
          </nav>
          <Outlet />
          
      </>
      
  )
}

export default Nav
