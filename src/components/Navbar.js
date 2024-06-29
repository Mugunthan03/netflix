import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import netflix from '../assets/images/netflix.png'

const Navbar = () => {
    const[bg,setBg] = useState(false)
    
    useEffect(()=>{
        const handleBg = ()=>{
            if(window.scrollY > 100)
            {
                setBg(true)                
            }
            else
            {
                setBg(false)
            }
        }

        window.addEventListener('scroll',handleBg)

        return ()=>window.removeEventListener('scroll',handleBg)

    },[])

  return (
    <div className={`flex justify-between w-full z-50 items-center fixed ${bg?'bg-black':''} transition-all duration-500 ease-in`}>
        <div>
        <Link to='/'>
            <img src={netflix} className='w-24 md:w-40 md:pl-5' alt='netflix logo'/>        
        </Link>
        </div>

        <Link to='/profile' >
        <div className='pr-5 p-2 '>
        
       <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='profile ' className='w-9' />
     
        </div>
        </Link>
       
        
    </div>
  )
}

export default Navbar