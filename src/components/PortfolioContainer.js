import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Aboutme from './pages/Aboutme';
import Work from './pages/Work';
import Resume from './pages/Resume';
import Contactme from './pages/Contactme';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Aboutme');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Aboutme') {
      return <Aboutme />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contactme />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <section>
        <h3>This Is My Portfolio</h3>
        <img src="../../public/images/RenderedImage.jpg" class="My_Picture" alt="Picture of Me" width="350" height="350" />
      </section>
      {renderPage()}
      <footer>
        <h2> Made By Juan Luis Tantau.</h2>
        <div>
          <a href="#">Read Our Policy</a><br />
          &copy; 2022 Juan Tantau, Inc
        </div>
      </footer>
    </div>

  );
}
