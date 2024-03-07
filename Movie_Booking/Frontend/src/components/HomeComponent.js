import React from 'react'
import '../CSS/HomeStyle.css'
import NavbarComponent from './NavbarComponent'
import FooterComponent from './FooterComponent'

function HomeComponent() {
    
  return (
    <div>
    <NavbarComponent/>
    
    <div>
      <FooterComponent></FooterComponent>
    </div>
    </div>
    
  )
}

export default HomeComponent
