import React from 'react'

export default function Menu({CassClass}) {
  return (
    <ul className={`${CassClass} MyMenu`}>
        <li><a href="/AddUsers">Add Users</a></li>
        <li><a href="/">Show Users</a></li>
    </ul>
  );
}
