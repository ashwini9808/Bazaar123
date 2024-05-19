import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

function Layout({children}) {
  return (
    <div>
        <Navbar/>
        <div className="content bg-gradient-to-r  from-blue-400 -z-50">
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout