import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
  
    <header>
    <h1 style="color: rgb(49, 32, 202); font-size: 100px;">Juan Luis Tantau</h1>
    <nav>
      <ul>
        <li>
          <a href="#About-Me">About Me</a>
        </li>
        <li>
          <a href="#My-Work">My Work</a>
        </li>
        <li>
          <a href="#Contact-Me">Contact Me</a>
        </li>
        <li>
          <a href="#Resume">Resume</a>
        </li>
      </ul>
    </nav>
  </header>
  );
}

export default NavTabs;
