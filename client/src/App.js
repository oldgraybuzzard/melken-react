import * as React from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';

const httpLink = createHttpLink({
  // uri: '/graphql',
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav />
            <div className='container'>
              <Routes>
                <Route path='/' element={<Home />} />
              </Routes>
            </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
    
  );
}

export default App;
