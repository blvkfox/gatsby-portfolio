import * as React from 'react';

const Contact = () => {
  return (
    <section class='get-in-touch py-8' id='contact'>
      <div class='w-4/5 md:w-2/5 mx-auto'>
        <h2 class='text-2xl font-bold text-white'>Get in touch</h2>
        <p class='mb-6'>
          If you wanna get in touch, talk to me about a project collaboration or
          just say hi
        </p>
        <input
          type='text'
          placeholder='Fill with your name'
          class='block mb-4 w-full py-2 px-4'
        />
        <input
          type='text'
          placeholder='Fill with your email'
          class='block mb-4 w-full py-2 px-4'
        />
        <textarea class='block w-full h-24 py-2 px-4'>
          Fill with your inquiry...
        </textarea>
        <button class='btn-alt w-full mt-4 py-2'>Send</button>
      </div>
    </section>
  );
};

export default Contact;
