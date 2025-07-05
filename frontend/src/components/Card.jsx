import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faBookmark } from '@fortawesome/free-solid-svg-icons';


const Card = ( {title,description}) => {
  return (
    <div className="card border rounded-4 h-100" style={ { width: "20rem", } } >
      <img src="https://blog-cdn.reedsy.com/directories/gallery/248/large_65b0ae90317f7596d6f95bfdd6131398.jpg" className="card-img-top object-fit-cover" alt="book" width={250} height={250}/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className='card-description'>{description}</p>
        <div className='d-flex justify-content-between'>
          <a href="#" className="btn btn-outline-primary ">Read</a>
          <div>
            <a href="#" className="btn btn-primary me-2">
              <FontAwesomeIcon icon={faBookmark} />
            </a>
            <a href="#" className="btn btn-outline-primary ">
              <FontAwesomeIcon icon={ faArrowDown } />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
