import React from 'react'

const Card = () => {
  return (
      <div className="card border rounded-4" >
          <img src="https://blog-cdn.reedsy.com/directories/gallery/248/large_65b0ae90317f7596d6f95bfdd6131398.jpg" className="card-img-top rounded-4 mx-auto mt-3" alt="book" style={{width:"14rem",height:"14rem"}} />
              <div className="card-body">
                <h5 className="card-title">Book title</h5>
                <p className='card-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
              <div className='gap-4 d-flex justify-content-between'>
                  <a href="#" className="btn btn-outline-primary w-50">View</a>
                  <a href="#" className="btn btn-outline-primary w-50">Download</a>
              </div>
              </div>
      </div>
  )
}

export default Card
