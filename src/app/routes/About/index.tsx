import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutRoute: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>About</h1>
      <button
        onClick={(): void => {
          navigate('/');
        }}
      >
        {'Home'}
      </button>
    </>
  );
};

export default AboutRoute;
