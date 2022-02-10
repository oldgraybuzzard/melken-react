import React, {useState} from 'react';
import './index.css';
import { send } from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Page from './components/Page';

function App() {
  const [pages] = useState([
    { name: "about us" },
    { name: "services" },
    { name: "government" },
    { name: "portfolio"},
    { name: "contact us" },
]);

const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
