import React from 'react'
import Navbar from '@/components/navbar'

const layout = ({children}:Readonly<{children : React.ReactNode}>) => {
  return (
    <div >
        <Navbar></Navbar>
        {children}
      
    </div>
  )
}

export default layout
