import React, { useState } from 'react';

import Menu from '../Menu';

export default function UsersInfo() {

  const [InputName, setInputName] = useState('FirstName');

  return (
    <div className='row h-100'>
      <Menu CassClass='col-2'/>
      <div className='col-10 h-75 align-self-center p-3 d-flex flex-column justify-content-between'>
        <h2 className='text-center'>Admin Page</h2>
        <form className='h-25 row align-content-center justify-content-center'>
          <div className='col-6 mx-2'>
            <input type="text" name={InputName} className='form-control p-1' />
          </div>
          <div className='col-2 mx-2'>
            <select className='form-select p-1'>
              <option value="UserId">id</option>
              <option value="FirstName">First Name</option>
              <option value="LastName">Last Name</option>
              <option value="Email">Email</option>
              <option value="Password">Password</option>
            </select>
          </div>
        </form>
        <table className='h-50 table table-hover'>
          <thead className='w-100 text-center'>
            <tr>
              <th>id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Modify</th>
            </tr>
          </thead>
          <tbody className='w-100 text-center'></tbody>
        </table>
        <div className='d-flex justify-content-end px-3'>
          <button type="button" className='btn btn-primary px-2 py-1 mx-2'>a ...</button>
          <button type="button" className='btn btn-primary px-2 py-1 mx-2'>... a ...</button>
          <button type="button" className='btn btn-primary px-2 py-1 mx-2'>... a</button>
        </div>
      </div>
    </div>
  )
}
