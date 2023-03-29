import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function ProtectedRoutes() {

  const trainer = useSelector( state=> state.trainer)
  
  if (trainer.name !== "" && trainer.gender !== null) {
    return <Outlet/>
  }else{
    return <Navigate to="/" />
  }
}
