import Card from '../components/Card'

const Profile = () => {
  return (
    <div>
      <div className='card text-center mt-4 border-black rounded-5' style={ { width: '18rem', margin: 'auto' } }>
        <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" className="card-img-top border border-dark rounded-circle mx-auto d-block mt-4" alt="Profile" style={ { width: 150 } } />
        <div className='card-body'>
          <h4 className='card-title'>Profile Name</h4>
          <p className='card-text'>name@gmail.com</p>
        </div>
      </div>
      <div className='mt-4 container border-top border-dark'>
        <h5 className='mt-3'>Recently Searched</h5>
        <div className='row mt-4' >
          <div className='col-3 mb-4'>
            <Card />
          </div>
          <div className='col-3'>
            <Card />
          </div><div className='col-3'>
            <Card />
          </div><div className='col-3'>
            <Card />
          </div>
          <div className='col-3'>
            <Card />
          </div>
          <div className='col-3'>
            <Card />
          </div><div className='col-3'>
            <Card />
          </div><div className='col-3'>
            <Card />
          </div>
        </div>

     </div>
    </div>
    
  )
}

export default Profile
