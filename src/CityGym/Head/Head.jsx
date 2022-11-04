import React, { useState } from 'react'
import './Head.css'
import City from '../Pic/City.png'
import Bar from '../Pic/bars.png'
import {Link} from "react-scroll"
const Head = () => {
  const mobile = Window.innerWidth <= 768 ? true: false;
  const [menuOpened, setMenuOpened]= useState(false)
  return (
    <div className='Head'>
        <img src={City} alt=""className='City' />
         {(menuOpened === false && mobile === true)? (
          <div style={{backgroundColor:'black',
          padding:'0.5rem',
          borderRadius:'5px'}}
          onClick={()=>setMenuOpened ? "true" : "false"}
          > 
            <img src={Bar} alt="" style={{width:'1.5rem', height:'1.5rem'}} />
          </div>
         ): (
         <ul className='Head-menu' >
         <li> <Link onClick={()=>setMenuOpened(false)}
         to='Home' span={true} smooth={true}>
          Home</Link></li>
         <li>
         <Link onClick={()=>setMenuOpened(false)}
         to='Prog' span={true} smooth={true}>
          Programs</Link></li>
         <li>
          <Link onClick={()=>setMenuOpened(false)}
         to='Why' span={true} smooth={true}>
          Why Us</Link></li>
         <li> 
          <Link onClick={()=>setMenuOpened(false)}
         to='Plan' span={true} smooth={true}>Plans</Link></li>
         <li >
          <Link
          onClick={()=>setMenuOpened(false)}
           to='testimonials' span={true} smooth={true}>
          Testimonials</Link></li>
         </ul>)}
       
    </div>
  )
}

export default Head