import React from 'react'
import Common from '../Common'
import about from '../Images/About.jpg'
function About(){
    return(
        <>
      <Common name="Welcome to About Page" imgsrc={about}visit="/contact" btnName="Contact Now" color="red"/>
        </>
    )
}
export default About;