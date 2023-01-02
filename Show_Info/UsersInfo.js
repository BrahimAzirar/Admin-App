import React, { useState } from 'react';

export default function UsersInfo() {

  const [InputName, setInputName] = useState('FirstName');

  return (
    <div>
      <div>
        <h2>Admin Page</h2>
        <form>
          <input type="text" name={InputName} />
          <select>
            <option value="UserId">id</option>
            <option value="FirstName">First Name</option>
            <option value="LastName">Last Name</option>
            <option value="Email">Email</option>
            <option value="Password">Password</option>
          </select>
        </form>
        <table>
          <thead>
            <thead>
              <tr>
                <th>id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Modify</th>
              </tr>
            </thead>
            <tbody></tbody>
          </thead>
        </table>
        <div>
          <button type="button">a ...</button>
          <button type="button">... a ...</button>
          <button type="button">... a</button>
        </div>
      </div>
    </div>
  )
}
