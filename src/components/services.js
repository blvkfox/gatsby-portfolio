import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPalette,
  faCode,
  faTerminal,
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <section className='services mt-12 py-8'>
      <div className='w-4/5 mx-auto'>
        <h2 className='text-white text-3xl text-center font-bold mb-8'>
          Services
        </h2>
        <hr className='mb-12' />
        <div
          className='
            flex flex-col
            md:flex-row
            text-center
            justify-between
            text-white
          '
        >
          <section className='md:w-3/12  mb-4'>
            <FontAwesomeIcon icon={faPalette} className='mb-4 text-5xl' />
            <i className='fas fa-palette mb-4 text-5xl'></i>
            <h3 className='font-bold text-xl mb-2'>Design</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam modi
              reiciendis iure delectus saepe eaque necessitatibus laborum fugiat
              odio nulla!
            </p>
          </section>
          <section className='md:w-3/12 mb-4'>
            <FontAwesomeIcon icon={faCode} className='mb-4 text-5xl' />
            <h3 className='font-bold text-xl mb-2'>Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam modi
              reiciendis iure delectus saepe eaque necessitatibus laborum fugiat
              odio nulla!
            </p>
          </section>
          <section className='md:w-3/12 mb-4'>
            <FontAwesomeIcon icon={faTerminal} className='mb-4 text-5xl' />
            <h3 className='font-bold text-xl mb-2'>Maintenance</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam modi
              reiciendis iure delectus saepe eaque necessitatibus laborum fugiat
              odio nulla!
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Services;
