import React, { useState } from 'react';
import './App.css';
import Menu from './Menu';
import UsersInfo from './Show_Info/UsersInfo';
import AddUsers from './Add_Info/AddUsers';

function App() {

  const [Cotent, setCotent] = useState(<UsersInfo />);

  return (
    <div className='row h-100'>
      <Menu CassClass='col-2' ChangeContent={setCotent}/>
      { Cotent }
    </div>
  );
}

export default App;
