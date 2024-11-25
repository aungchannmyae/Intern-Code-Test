import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const HomePageLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default HomePageLayout