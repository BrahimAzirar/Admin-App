import React from 'react'
import UsersInfo from './Show_Info/UsersInfo';
import AddUsers from './Add_Info/AddUsers';

export default function Menu({CassClass, ChangeContent}) {
  return (
    <ul className={`${CassClass} MyMenu`}>
        <li onClick={() => ChangeContent(<AddUsers />)}>Add Users</li>
        <li onClick={() => ChangeContent(<UsersInfo />)}>Show Users</li>
    </ul>
  );
}
