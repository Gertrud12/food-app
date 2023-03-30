import React from 'react'
import Navbar from './Pages/Navigation/Nav'
import Header from './Pages/Head/Head'
import Body from './Pages/Body/Body'
import SubHead from './Pages/Subhead/Subhead'
import Foot from './Pages/Foot/Foot'
import Footer from './Pages/Footer/Footer'


function View() {
  return (
    <div style={{position: "relative"}}>
      <Navbar/>
      <Header/>
      <SubHead/>
      <Body />
      <Foot/>
      <Footer/>
    </div>
  )
}

export default View
