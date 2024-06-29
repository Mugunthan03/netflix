import React, { useState } from 'react';

const Banner = () => {
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    setPlay(true);
  };

  const handleVideoEnd = () => {
    setPlay(false);
  };


  return (
    <div className='h-[550px] w-full'>
      <div className='w-full h-full relative'>
        <div className='w-full h-[550px] absolute'>
          {play ? (
            <video className='w-full h-full object-cover' controls autoPlay onEnded={handleVideoEnd}>
              <source src='videos/stranger.mp4' type='video/mp4' />
            </video>
          ) : (
            <img
              src='https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/8a6a68144592045.628efcd3e77b5.jpg'
              className='w-full h-full object-cover  opacity-60'
              alt='banner'
            />
          )}
        </div>
        {!play && (
          <div className='z-10 absolute w-full h-full flex justify-center flex-col gap-4 pl-3 md:pl-8'>
            <h1 className='text-2xl md:text-5xl font-bold'>Stranger Things</h1>
            <div className='flex gap-2'>
              <button className='bg-white w-fit text-black px-4 py-2 font-bold text-base md:text-xl rounded-sm outline-none' onClick={handlePlay}>
                Play
              </button>
              <button className='border border-white w-fit px-4 py-2 font-bold text-base md:text-xl rounded-sm outline-none' onClick={handlePlay}>
                Watch Later
              </button>
            </div>
            <h3 className='text-xs md:text-base font-bold w-2/3 md:w-2/5 text-gray-300'>
              "Stranger Things" is an 80s-inspired sci-fi show about kids in a  small town facing supernatural threats. It's a thrilling ...
            </h3>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Banner;
