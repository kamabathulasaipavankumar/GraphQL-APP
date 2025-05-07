import React from 'react';
import { useQuery, gql } from '@apollo/client';

// Define your query using the gql tag
const GET_USERS = gql`
  query {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;
function FetchingData() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ul>
        {data.collections.map(collection => (
          <li key={collection.id} style={{ listStyleType: 'none', margin: '20px' }}>
            <h2>{collection.title}</h2>
            <ul>
              {collection.items.map(item => (
                <li key={item.id} style={{ listStyleType: 'none', display: 'inline-block', margin: '10px' }}>
                  <img src={item.imageUrl} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>${parseFloat(item.price).toFixed(2)}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchingData;