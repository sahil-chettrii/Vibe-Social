import React from 'react'
import "./List.css"
import UserInfo from './UserInfo/UserInfo'
import Chatlist from './chatList/Chatlist'
const List = () => {
  return (
    <div className='List'>
        <UserInfo/>
        <Chatlist/>
    
    </div>
  )
}

export default List