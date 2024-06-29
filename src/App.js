import React, { useEffect } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import './index.css'
import Login from './Pages/Login'
import { useDispatch, useSelector } from 'react-redux'
import { login,logout, selectUser } from './redux/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

const App = () => {
  const user = useSelector(selectUser)
  console.log(user);
  const dispatch = useDispatch();

  useEffect(()=>{

    const unsubscribe = onAuthStateChanged(auth,(data)=>{
      if(data)
      {
        dispatch(login({
          uid:data.uid,
          email:data.email,       

        }))
      }
      else
      {
        dispatch(logout())
      }

    })
    return unsubscribe;
  },[])

 




  return (
    <div >
      <BrowserRouter>
      {
        !user?(<Login />):
        (
          <Routes>
          <Route path='/' element={<Home />}></Route>         
          <Route path='/profile' element={<Profile />}></Route>         
        </Routes>

        )
      }
       
      </BrowserRouter>
    </div>
  )
}

export default App