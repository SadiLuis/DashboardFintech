import React from 'react'
import SideBar from './_components/sidebar/SideBar'
import Navbar from './_components/navbar/Navbar'

interface Layout{
  children:React.ReactNode;
}

const Layout = ({ children }: Layout) => {
  return (
    <main className='h-full'>
      <SideBar/>
      <div className='flex-1 h-full'>
            <Navbar/>
      </div>
      <div>
      {children}
      </div>
    </main>
  )
}

export default Layout