import React, { useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const App = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const authenticate = async () => {
    const code = searchParams.get('code');
    axios
      .post('http://localhost:5000/authenticate', { code })
      .then((response) => {
        console.log('Server response:', response.data);
      })
      .catch((error) => {
        console.error('Error sending code to the server:', error);
      });
  };
  useEffect(() => {
    authenticate();
  }, []);

  return (
    <div>
      <h1>React App</h1>
    </div>
  );
};

export default App;
