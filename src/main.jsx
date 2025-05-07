// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
// import { createHttpLink } from '@apollo/client'

// // Initialize Apollo Client
// const httpLink = createHttpLink({
//   uri: '/graphql', // now points to proxy
// });

// const cache = new InMemoryCache()

// const client = new ApolloClient({
//   link: httpLink,
//   cache,
// })

// createRoot(document.getElementById('root')).render(
//   <ApolloProvider client={client}>
//     <StrictMode>
//       <App />
//     </StrictMode>
//   </ApolloProvider>
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
