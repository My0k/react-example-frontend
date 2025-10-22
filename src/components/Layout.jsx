import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <main className="main-content">
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
