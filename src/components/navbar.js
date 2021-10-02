import * as React from 'react';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);
  const handleClick = (e) => {
    if (menuState === false) {
      setMenuState(true);
    } else {
      setMenuState(false);
    }
  };
  const handleLinkClick = (e) => {
    if (menuState === true) {
      setMenuState(false);
    }
  };
  return (
    <header class='navbar-header'>
      <nav class='w-4/5 mx-auto flex justify-between py-4'>
        <div>
          <a href='#' class='font-bold'>
            <span class='brand-color'>@</span>cryptoblvk
          </a>
        </div>
        <div class='hamburger' onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul class={menuState ? 'flex navbar-nav open-nav' : 'flex navbar-nav '}>
          <a href='#top' class='link' onClick={handleLinkClick}>
            <li
              class='
                w-4/5
                mx-auto
                py-4
                text-white
                font-bold
                lg:py-0 lg:mr-4 lg:font-normal
                text-right
              '
            >
              home
            </li>
          </a>
          <a href='#portfolio' class='link' onClick={handleLinkClick}>
            <li
              class='
                w-4/5
                mx-auto
                py-4
                text-white
                font-bold
                lg:py-0 lg:mr-4 lg:font-normal
                text-right
              '
            >
              portfolio
            </li>
          </a>
          <a href='#about' class='link' onClick={handleLinkClick}>
            <li
              class='
                w-4/5
                mx-auto
                py-4
                text-white
                font-bold
                lg:py-0 lg:mr-4 lg:font-normal
                text-right
              '
            >
              about
            </li>
          </a>
          <a href='# ' class='link' onClick={handleLinkClick}>
            <li
              class='
                w-4/5
                mx-auto
                py-4
                text-white
                font-bold
                lg:py-0 lg:mr-4 lg:font-normal
                text-right
              '
            >
              blog
            </li>
          </a>
          <a href='#contact' class='link' onClick={handleLinkClick}>
            <li
              class='
                w-4/5
                mx-auto
                py-4
                text-white
                font-bold
                lg:py-0 lg: lg:font-normal
                text-right
              '
            >
              contact
            </li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
