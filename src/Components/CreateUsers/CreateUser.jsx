import { useMutation, gql } from '@apollo/client';
import { useState } from 'react';

const ADD_USER = gql`
  mutation AddUser($name: String!, $email: String!) {
    addUser(name: $name, email: $email) {
      id
      name
    }
  }
`;

function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [addUser] = useMutation(ADD_USER);

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ variables: { name, email } });
    console.log(`User added: ${name}, ${email}`);
    setName('');
    setEmail('');
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Add User</button>
    </form>
  );
}

export default CreateUser;