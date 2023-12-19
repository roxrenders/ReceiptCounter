import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReceiptList from './ReceiptList'

const Home = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/')
    }

  },[])

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className='HomeContainer'>
     <div className='navbar'><h1>Bills Counter</h1> <button onClick={handleLogout}>LogOut</button></div>
      <div> 
        <ReceiptList  />
      </div>
    </div>
  )
}

export default Home
