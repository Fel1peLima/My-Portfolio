import React, { useState,} from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import {Link} from "react-scroll"
import ScrollButton from './ScrollButton';





function NavBar() {

  const[nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
   
     
    },
    {
      id: 2,
      link: "sobre",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experiência",
    },
    {
      id: 5,
      link: "contato",
    },
   
  ];

 
 

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white
     bg-black fixed">

     
        
        <div className=" bg-gradient-to-r from-blue-500 to-purple-900 text-transparent bg-clip-text">
       <ScrollButton/>
       
</div>
     

      <ul className="hidden md:flex">
        {links.map(({id, link,}) =>(
            <li 
            key={id}
            className="px-4 cursor-pointer capitalize font-medium
            text-white hover:scale-105 duration-200">
             
             <Link to={link} smooth duration={500} offset={150} >
              {link}
              </Link>
              
             </li>
      
        ))}

      </ul>

      <div 
      onClick={() => setNav(!nav)}
      className="cursor-pointer pr-4 z-10 text-white md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav &&(
        <ul className="flex flex-col justify-center items-center absolute
        top-0 w-full h-screen bg-gradient-to-b from-black to-blue-950 text-white">
 
        {links.map(({id, link}) =>(
             <li 
             key={id}
             className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link 
              onClick={() => setNav(!nav)}
              to={link} smooth duration={500} offset={90}>
              {link}
              </Link>
              </li>
         ))}
 
 
       </ul>

      )}




     </div>
  )
}

export default NavBar