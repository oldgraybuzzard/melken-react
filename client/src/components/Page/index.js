import React from 'react';
import PageContent from '../PageContent';
import About from '../Home';
import Services from '../Services';
import Contact from '../Contact';
import Government from '../Government';
import Portfolio from '../Portfolio';


function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'about us':
        return <About />;
      case 'services':
        return <Services />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact us':
        return <Contact />;
      case 'government':
        return <Government />;
      default:
        return <About />;
    }
  };

  return (
    <section>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;