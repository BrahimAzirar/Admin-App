import React, { useEffect, useRef, useState } from 'react';

export default function UsersInfo() {

  const [InputName, setInputName] = useState('FirstName');
  const [tbodyContent, settbodyContent] = useState([]);

  const mySearchForm = useRef();
  const Target = useRef();


  useEffect(() => {
    
  }, [InputName]);

  function GetData(e) {
    const Mydata = new URLSearchParams();

    Mydata.append('name', InputName);
    Mydata.append('val', e.target.value);

    console.log(Array.from(Mydata));

    fetch('http://localhost/appadmin/src/BackEnd/ShowUsers.php', {
      method: "POST",
      body: Mydata
    })  .then(resp => resp.json())
        .then(data => {
          settbodyContent(data.map(ele => {
            return (
              <tr>
                <td>{ele.id}</td>
                <td>{ele.FirstName}</td>
                <td>{ele.LastName}</td>
                <td>{ele.Email}</td>
                <td>{ele._Password}</td>
                <td>
                  <a href="#">Edite</a>
                  <a href="#">Delete</a>
                </td>
              </tr>
            );
          }));
        })
        .catch(err => console.log(err));
  }

  function ChangeInputName(e) {
    setInputName(e.target.value);
  }

  return (
    <div className='col-10 h-75 align-self-center p-3 d-flex flex-column justify-content-between'>
      <h2 className='text-center'>Admin Page</h2>
      <form ref={mySearchForm} className='h-25 row align-content-center justify-content-center'>
        <div className='col-6 mx-2'>
          <input type="text" ref={Target} name={InputName} className='form-control p-1' onChange={GetData} />
        </div>
        <div className='col-2 mx-2'>
          <select className='form-select p-1' onClick={ChangeInputName}>
            <option value="id">id</option>
            <option value="FirstName">First Name</option>
            <option value="LastName">Last Name</option>
            <option value="Email">Email</option>
            <option value="_Password">Password</option>
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
        <tbody className='w-100 text-center'>
          { tbodyContent }
        </tbody>
      </table>
      <div className='d-flex justify-content-end px-3'>
        <button type="button" className='btn btn-primary px-2 py-1 mx-2'>a ...</button>
        <button type="button" className='btn btn-primary px-2 py-1 mx-2'>... a ...</button>
        <button type="button" className='btn btn-primary px-2 py-1 mx-2'>... a</button>
      </div>
    </div>
  )
}