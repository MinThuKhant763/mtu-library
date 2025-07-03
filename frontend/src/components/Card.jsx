import React from 'react'

const Card = () => {
  return (
      <div className="card" style={{ width: "12rem" }}>
          <img src="https://blog-cdn.reedsy.com/directories/gallery/248/large_65b0ae90317f7596d6f95bfdd6131398.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                  <h5 className="card-title">Book title</h5>
                  <a href="#" className="btn btn-primary">View</a>
              </div>
      </div>
  )
}

export default Card
