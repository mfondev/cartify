import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from '../components/Footer'

export default function RootLayout() {
  // const navigation = useNavigation()

  return (
    <>
      {/* {navigation.state === 'loading' && <p>loading.....</p>} */}
      <Outlet />
      <Footer />
    </>
  )
}
