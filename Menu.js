import React from 'react'

export default function Menu({CassClass}) {
  return (
    <ul className={`${CassClass} MyMenu`}>
        <li>Add Users</li>
        <li>Show Users</li>
    </ul>
  )
}
