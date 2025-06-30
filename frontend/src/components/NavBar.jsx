
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoon} from '@fortawesome/free-regular-svg-icons';
const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
              <div className='col'>
                  <a className='navbar-brand' href="#">MTU</a>
              </div>
              <div className='col collapse navbar-collapse' id='navbarSupportedContent'>
                  <ul className='navbar-nav me-auto mb-2 mb-lg-2 gap-5'>
                      <li className='nav-item'>
                          <a className='nav-link active' href="#">Home</a>
                      </li>
                      <li className='nav-item'>
                          <a className='nav-link' href="/major">Major</a>
                      </li>
                      <form action="" className='d-flex'>
                          <input class="form-control me-2 w-75" type="search" placeholder="Search book" aria-label="Search" />
                          <button class="btn btn-outline-success" type="submit">Search</button>
                      </form>

                      <li className='nav-item'>
                          <a className='nav-link' href="/about">About</a>
                      </li>
                      <li className='nav-item align-self-center'>
                          <FontAwesomeIcon icon={faMoon} />
                      </li>
                  </ul>
              </div>
              <div className='d-flex col justify-content-end'>
                        <span className='bg-primary border rounded'></span>
                      <div className='btn btn-primary'>Sign In</div>
                </div>
          </div>
          
    </nav>
  )
}

export default NavBar
