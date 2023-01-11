import React, { useRef, useState } from 'react';
import { MdCancel } from 'react-icons/md';

export default function ModifyData({ mod, add, Prev }) {

    const [FirstName, setFirstName] = useState(Prev[1]);
    const [LastName, setLastName] = useState(Prev[2]);
    const [Email, setEmail] = useState(Prev[3]);
    const [Passowrd, setPassowrd] = useState(Prev[4]);

    const EditeForm = useRef();

    function UpdateUser() {
        const NewData = new URLSearchParams();

        for (let info of new FormData(EditeForm.current)) {
            NewData.append(info[0], info[1]);
        }

        NewData.append('id', Prev[0]);

        fetch('http://localhost/appadmin/src/BackEnd/UpdateData.php', {
            method: "POST",
            body: NewData
        }).catch(err => console.log(err));
    }

  return (
    <div className='parent-Edite'>
        <div>
            <div onClick={() => {
                mod('');
                add('');
            }}>
                <MdCancel />
            </div>
        </div>
      <form ref={EditeForm} className='row justify-content-center align-content-between'>
          <h2 className='text-center mb-1'>Edite User</h2>
          <div className='col-10'>
            <input className='form-control p-1' type="text" name="FirstName" 
                value={FirstName} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name'/>
          </div>
          <div className='col-10'>
            <input className='form-control p-1' type="text" name="LastName"
                value={LastName} onChange={(e) => setLastName(e.target.value)} placeholder='Last Name'/>
          </div>
          <div className='col-10'>
            <input className='form-control p-1' type="email" name="Email"
                value={Email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
          </div>
          <div className='col-10'>
            <input className='form-control p-1' type="text" name="Password"
                value={Passowrd} onChange={(e) => setPassowrd(e.target.value)} placeholder='Password'/>
          </div>
          <div className='col-10'>
            <button type="button" className='btn btn-primary w-100 py-1' onClick={UpdateUser}>Edite</button>
          </div>
        </form>
    </div>
  );
}