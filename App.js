import React, { useState } from 'react';
import './App.css';
import Menu from './Menu';
import UsersInfo from './Show_Info/UsersInfo';
import AddUsers from './Add_Info/AddUsers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className='row h-100'>
        <Menu CassClass='col-2' />
        <Routes>
          <Route exact path='/' element={<UsersInfo />} />
          <Route path='/AddUsers' element={<AddUsers />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
