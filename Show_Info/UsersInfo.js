import React, { useEffect, useRef, useState } from 'react';
import { AiTwotoneDelete } from "react-icons/ai";
import { BiPencil } from 'react-icons/bi';
import AddUsers from '../Add_Info/AddUsers';

export default function UsersInfo() {

  const [InputName, setInputName] = useState('FirstName');
  const [data, setData] = useState([]);
  const [dataFetched, setdataFetched] = useState([]);
  const [tbodyContent, settbodyContent] = useState([]);

  const mySearchForm = useRef();
  const Target = useRef();


  useEffect(() => {
    settbodyContent(dataFetched.map((ele, idx) => {
      return (
        <tr key={idx}>
          <td>{ele.id}</td>
          <td>{ele.FirstName}</td>
          <td>{ele.LastName}</td>
          <td>{ele.Email}</td>
          <td>{ele._Password}</td>
          <td>
            <div className='text-success'>
              <BiPencil />
              <a href="#" className='text-success' onClick={EditeData}>Edite</a>
            </div>
            <div className='text-danger'>
              <AiTwotoneDelete />
              <a href="#" className='text-danger' onClick={DeleteData}>Delete</a>
            </div>
          </td>
        </tr>
      );
    }));
  }, [dataFetched]);

  function GetData() {
    const Mydata = new URLSearchParams();

    Mydata.append('name', InputName);
    Mydata.append('val', Target.current.value);

    fetch('http://localhost/appadmin/src/BackEnd/ShowUsers.php', {
      method: "POST",
      body: Mydata
    })  .then(resp => resp.json())
        .then(data => {
          setdataFetched(data);
          setData(data);
        })
        .catch(err => console.log(err));
  }

  function ChangeInputName(e) {
    setInputName(e.target.value);
    GetData();
  }

  function FilterWithFirstValue() {
    if (InputName !== "id") {
      console.log("I'm in FilterWithFirstValue function");
      setdataFetched(() => {
        return data.filter(ele => {
          if (ele[InputName].slice(0, Target.current.value.length) == Target.current.value) {
            return ele;
          }
        });
      });
    }
  }

  function FilterWithLastValue() {
    if (InputName !== "id") {
      console.log("I'm in FilterWithLastValue function");
      setdataFetched(() => {
        return data.filter(ele => {
          if (ele[InputName].slice(ele[InputName].length - 1, ele[InputName].length)
            == Target.current.value) {
            return ele;
          }
        });
      });
    }
  }

  function DeleteData(e) {
    const key = e.target.parentElement.parentElement.parentElement.firstElementChild.textContent;

    setdataFetched(prev => {
      return prev.filter(ele => {
        if (ele.id !== parseInt(key)) {
          return ele;
        }
      });
    });

    fetch('http://localhost/appadmin/src/BackEnd/DeleteData.php?Target=' + key, {
      method: "DELETE"
    }).then(resp => resp.json())
      .then(data => console.log(data))
      .then(err => console.log(err));
  }

  function EditeData() {
    document.body.append(<AddUsers />);
  }

  return (
    <div className='col-10 h-75 align-self-center p-3 d-flex flex-column justify-content-between row'>
      <h2 className='col-12 text-center'>Admin Page</h2>
      <form ref={mySearchForm} className=' col-12 h-25 row align-content-center justify-content-center'>
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
      <div className='ParentOfTable col-12 h-50 scrollbar-info'>
        <table className='w-100 text-center table table-hover'>
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
          <tbody>
            { tbodyContent }
          </tbody>
        </table>
      </div>
      <div className='col-12 d-flex justify-content-end px-3 align-self-center'>
        <button type="button" className='btn btn-primary px-2 py-1 mx-2' onClick={FilterWithFirstValue}>a ...</button>
        <button type="button" className='btn btn-primary px-2 py-1 mx-2' onClick={() => setdataFetched(data)}>... a ...</button>
        <button type="button" className='btn btn-primary px-2 py-1 mx-2' onClick={FilterWithLastValue}>... a</button>
      </div>
    </div>
  )
}