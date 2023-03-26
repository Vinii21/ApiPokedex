import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'


export default function ProtectedRoutes() {
  
  if (100===100) {
    return <Outlet/>
  }else{
    return <Navigate to="/" />
  }
}
