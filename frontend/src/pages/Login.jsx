import React from 'react';

const Login = () => {
  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100'>
      <div className='row'>
        <div className="col-6">
          <form>
            <h1 className='mb-3'>Welcome back 🎉</h1>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control w-75" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control w-75" id="exampleInputPassword1"/>
            </div>
            <div class="mb-3 form-check text-end w-75">
              <label class="form-text text-decoration-underline" for="exampleCheck1">forgot password?</label>
            </div>
            <div  >
              <button type="submit" class="btn btn-primary w-75 p-2">Login</button>
            </div>
            <div className='text-center w-75 p-3'>
              or
            </div>
            <div className='btn btn-outline-primary text-center w-75 border p-2 rounded-2'>
              <img src="src/assets/google.png" alt="" width={25} height={25} className='me-3'/>Google
            </div>
            <div className='mt-5 text-center w-75'>
              <label htmlFor=" " className='form-text '>Don't have an account</label>
            </div>
            <div className='mt-3' >
              <button type="submit" class="btn btn-outline-secondary w-75 p-2">Create account</button>
            </div>
          </form>
        </div>
        <div className="col-6">
          <img src=" src/assets/Entrance_of_Mandalay_Technological_University.jpg" alt="" width={ 800 } height={ 600 } />
        </div>
        
      </div>
    </div>
  );
};

export default Login;
