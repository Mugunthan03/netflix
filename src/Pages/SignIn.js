import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleNewUser = (e) => {
    e.preventDefault();
   
    createUserWithEmailAndPassword(auth, email, pass)
      .then((data) => {
        console.log(data);
        toast.success('User registered successfully');
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  };

  const handleLoginUser = (e) => {
    e.preventDefault();
  
    signInWithEmailAndPassword(auth, email, pass)
      .then((data) => {
        console.log(data);
        toast.success('Login success');
      })
      .catch((err) => {
        toast.error('Signup before login');
        console.log(err.message);
      });
  };

  return (
    <div className='w-full h-full'>
      <div className='flex justify-center items-center h-full'>
        <form className='bg-black w-80 h-80 flex justify-center items-center flex-col gap-5 p-10' onSubmit={handleLoginUser}>
          <h1 className='text-xl font-bold w-full'>SignIn</h1>

          <input
            type='email'
            placeholder='Email'
            required  // This ensures the field is required
            className='p-2 outline-none text-black rounded w-full'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type='password'
            placeholder='Password'
            required  // This ensures the field is required
            className='p-2 outline-none rounded text-black w-full'
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />

          <button type='submit' className='bg-red-600 w-full p-2 rounded text-xl font-medium'>
            SignIn
          </button>

          <h1 className='text-sm'>
            <span className='text-gray-400'>New to Netflix?</span>
            <span className='ml-2 hover:underline hover:cursor-pointer' onClick={handleNewUser}>
              Signup now
            </span>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
