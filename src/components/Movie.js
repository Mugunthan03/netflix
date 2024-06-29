import React, { useState, useEffect } from 'react';
import { Originals, popular, Adventure, Horror, comdey, suspense, past ,Action,Romantic} from './MovieList';

const categories = [
  { title: 'Netflix Originals', movies: Originals, imageSizeLarge: 'h-64 w-56', imageSizeSmall: 'h-40 w-32' },
  { title: 'Popular on Netflix', movies: popular, imageSizeLarge: 'w-72 h-40', imageSizeSmall: 'h-32 w-40' },
  { title: 'Released in the past year', movies: past, imageSizeLarge: 'w-72 h-40', imageSizeSmall: 'h-32 w-40' },
  { title: 'Action movies', movies: Action, imageSizeLarge: 'w-72 h-40', imageSizeSmall: 'h-32 w-40' },
  { title: 'Romantic movies', movies: Romantic, imageSizeLarge: 'w-72 h-40', imageSizeSmall: 'h-32 w-40' },
  { title: 'Adventure movies', movies: Adventure, imageSizeLarge: 'w-72 h-40', imageSizeSmall: 'h-32 w-40' },
  { title: 'Horror movies', movies: Horror, imageSizeLarge: 'w-72 h-40', imageSizeSmall: 'h-32 w-40' },
  { title: 'Comdey movies', movies: comdey, imageSizeLarge: 'w-72 h-40', imageSizeSmall: 'h-32 w-40' },
  { title: 'Suspenseful movies', movies: suspense, imageSizeLarge: 'w-72 h-40', imageSizeSmall: 'h-32 w-40' }
];

const Movie = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);  

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='w-full h-full pt-4 bg-[#181818]'>
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h1 className='text-xl capitalize pl-5'>{category.title}</h1>

          <div className='flex gap-5 p-5 overflow-x-scroll scroll-hide-scrollbar'>
            {category.movies.map((movie, movieIndex) => (
              <img key={movieIndex} src={movie.img} alt='netflix original' 
              className={`object-cover ${windowWidth < 640 ? category.imageSizeSmall : category.imageSizeLarge} transition duration-200  ease-in transform hover:scale-105`} loading='lazy'/>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movie;
