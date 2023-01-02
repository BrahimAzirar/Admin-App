import React, { useState } from 'react';

import Menu from '../Menu';

export default function UsersInfo() {

  const [InputName, setInputName] = useState('FirstName');

  return (
    <div className='row h-100'>
      <Menu CassClass='col-2'/>
      <div className='col-10 h-75 align-self-center p-3 d-flex flex-column justify-content-between'>
        <h2 className='text-center'>Admin Page</h2>
        <form className='h-25'>
          <input type="text" name={InputName} />
          <select>
            <option value="UserId">id</option>
            <option value="FirstName">First Name</option>
            <option value="LastName">Last Name</option>
            <option value="Email">Email</option>
            <option value="Password">Password</option>
          </select>
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
        <div className=''>
          <button type="button">a ...</button>
          <button type="button">... a ...</button>
          <button type="button">... a</button>
        </div>
      </div>
    </div>
  )
}
