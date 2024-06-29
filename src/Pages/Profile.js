import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import {selectUser} from '../redux/userSlice'
import { signOut } from 'firebase/auth'
import {auth} from '../firebase'
import Plans from './Plans'
import { toast } from 'react-toastify';

const Profile = () => {
const user = useSelector(selectUser)

const logOut = ()=>{
  signOut(auth)
  toast.success('Successfully logged out')
}

  return (
    <div className='h-screen'>
      <Navbar />
      <div className=' md:w-[700px] flex flex-col mx-auto pt-[20%] md:pt-[10%] lg:pt-[8%] px-5 flex-wrap'>
        <h1 className='text-2xl md:text-4xl pb-5 px-3'>Edit Profile</h1>
        <div className='flex gap-10 flex-col md:flex-row'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='profile icon' className='h-24  object-contain' />
          <div className='w-full px-8 md:px-0'>
            <h2 className='p-2 text-base bg-gray-600 '>{user.email}</h2>
            <div className='flex-grow h-[50%] pt-5 pb-5 '>
              <h2 className='pl-2 text-gray-400'>Current Plans</h2>
              <Plans />             
              <button className='bg-red-600 w-full mt-5 p-1 text-base' onClick={logOut}>Signout</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}


export default Profile