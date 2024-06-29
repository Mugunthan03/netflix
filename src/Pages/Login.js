import React, { useState } from 'react';
import netflix from '../assets/images/netflix.png';
import SignIn from './SignIn';


const Login = () => {
    const [sign, setSign] = useState(false);

    const handleSign = () => {
        setSign(true);
    }

    return (
        <div className='w-full h-screen flex flex-col relative'>

       
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "url('https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/11/netflix-india.jpeg?ssl=1')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3 }}></div>
            </div>

          
            <div className='relative z-10 p-4 flex justify-between items-center'>
                <img src={netflix} alt='netlfix logo' className='w-28' />
                <button className='bg-red-600 px-2 py-1 text-base' onClick={handleSign}>Sign In</button>
            </div>

            <div className='relative z-10 flex flex-col items-center justify-center flex-grow'>
                {
                    sign ? (<SignIn />) : (
                        <div className='text-center'>
                            <h1 className='text-xl md:text-3xl lg:text-5xl p-3'>Unlimited films, TV programmes, and more</h1>
                            <h1 className='text-base md:text-2xl p-5'>Watch anywhere. Cancel at any time</h1>
                            <p className='text-sm md:text-lg text-gray-400 pb-5'>Ready to watch? Enter your email to create or restart your membership</p>
                            <input type='email' placeholder='Enter the Email '  className='p-2  md:w-1/3 outline-none text-black'/>
                            <button className='bg-red-600 p-2 text-base' onClick={handleSign}>Get Started</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Login;
