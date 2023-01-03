import React from 'react';

export default function AddUsers() {
  return (
    <form className='col-10 h-75 align-self-center justify-content-around align-items-center p-3 border row add'>
      <h2 className='text-center'>Add User</h2>
      <div className='col-5'>
        <input className='form-control p-1' type="text" name="FirstName" placeholder='First Name'/>
      </div>
      <div className='col-5'>
        <input className='form-control p-1' type="text" name="LastName" placeholder='Last Name'/>
      </div>
      <div className='col-5'>
        <input className='form-control p-1' type="email" name="Email" placeholder='Email'/>
      </div>
      <div className='col-5'>
        <input className='form-control p-1' type="password" name="Password" placeholder='Password'/>
      </div>
      <div className='col-10 border'>
        <button className='btn btn-primary w-100 py-1' type="button">Send</button>
      </div>
    </form>
  )
}
