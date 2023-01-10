import React, { useRef } from 'react';

export default function AddUsers() {

  const FormTarget = useRef();

  function AddData() {

    const myData = new URLSearchParams();

    for (let info of new FormData(FormTarget.current)) {
      myData.append(info[0], info[1])
    }

    fetch('http://localhost/appadmin/src/BackEnd/AddUsers.php', {
      method: "POST",
      body: myData
    })
      .catch(err => console.log(err));
  }

  return (
    <form ref={FormTarget} className='col-10 h-75 align-self-center justify-content-around align-items-center p-3 border row add'>
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
        <button className='btn btn-primary w-100 py-1' type="button" onClick={AddData}>Send</button>
      </div>
    </form>
  )
}
