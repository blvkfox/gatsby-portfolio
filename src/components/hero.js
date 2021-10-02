import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
const Hero = () => {
  return (
    <section
      className='hero pt-24
        md:pt-40
        w-4/5
        mx-auto
        flex flex-col-reverse
        md:mb-40 md:flex-row md:flex-row md:justify-between '
    >
      <div class='w-12/12 md:w-6/12 mt-4'>
        <h1 class='text-3xl mb-4 font-bold text-center md:text-5xl md:text-left'>
          Delivering solutions to complex problems.
        </h1>
        <p class='text-sm text-center mb-8 md:text-left'>
          Always solving problems with precision.
        </p>
        <div class='buttons text-center mt-4 md:text-left'>
          <button class='btn rounded-full px-8 py-2 text-white font-bold mr-2'>
            Contact
          </button>
          <button class='btn-alt rounded-full px-8 py-2'>Learn More</button>
        </div>
      </div>
      <div>
        <StaticImage src='./../images/macbook.png' alt='' />
      </div>
    </section>
  );
};

export default Hero;
