import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const About = () => {
  return (
    <section
      class='about mt-8 mb-8 w-4/5 mx-auto flex flex-col md:flex-row justify-center'
      id='about'
    >
      <StaticImage
        src='./../images/memoji.png'
        class='md:w-2/12 md:w-3/12 mr-2'
        alt=''
      />
      <div class='w-full md:w-5/12 flex flex-col justify-center'>
        <h2 class='text-2xl font-bold mb-2'>About</h2>
        <p class='max-w-lg mb-2'>
          Hello, my name is Jordan. I’m a creative full stack developer and
          ui/ux specialist based in Edmonton, Alberta.
        </p>
        <p class='max-w-lg mb-2'>
          Check out my blog for some of the latest tips, and tricks i’ve learned
          on my coding journey which i’m delighted to share, or my portfolio
          which highlights my latest works.
        </p>
        <ul class='flex'>
          <li class='mr-2'>
            <a href='#'>Github</a>
          </li>
          <li>
            <a href='#'>Twitter</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
