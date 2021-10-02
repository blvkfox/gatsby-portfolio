import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Portfolio = () => {
  return (
    <section className='mt-6 py-8 w-4/5 mx-auto' id='portfolio'>
      <h2 className='text-3xl mb-4 font-bold'>Projects</h2>
      <p className='mb-4'>
        From web components to ui and ux designs with React, Redux, HTML, CSS,
        Tailwind.
      </p>
      <div className='buttons max-w-lg mb-4'>
        <button className='btn px-5 py-1 text-white mb-2 mr-2'>Show All</button>
        <button className='btn-alt px-5 py-1 mb-2 mr-2'>Front-end</button>
        <button className='btn-alt px-5 py-1 mb-2 mr-2'>Back-end</button>
        <button className='btn-alt px-5 py-1 mb-2 mr-2'>Design</button>
        <button className='btn-alt px-5 py-1 mb-2 mr-2'>HTML5</button>
        <button className='btn-alt px-5 py-1 mb-2 mr-2'>CSS</button>
        <button className='btn-alt px-5 py-1 mb-2 mr-2'>SASS</button>
        <button className='btn-alt px-5 py-1 mb-2 mr-2'>React</button>
        <button className='btn-alt px-5 py-1 mb-2 mr-2'>Javascript</button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <StaticImage
          src='./../images/placeholder.png'
          className='w-full'
          alt=''
        />
        <StaticImage
          src='./../images/placeholder.png'
          className='w-full'
          alt=''
        />
        <StaticImage
          src='./../images/placeholder.png'
          className='w-full'
          alt=''
        />
        <StaticImage
          src='./../images/placeholder.png'
          className='w-full'
          alt=''
        />
        <StaticImage
          src='./../images/placeholder.png'
          className='w-full'
          alt=''
        />
        <StaticImage
          src='./../images/placeholder.png'
          className='w-full'
          alt=''
        />
      </div>
    </section>
  );
};

export default Portfolio;
