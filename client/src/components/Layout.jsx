import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="app">
      
      <Navbar />
      
      <main className="main-container">
        { children }
      </main>
      
      <Footer />  

    </div>
  )
}

export default Layout