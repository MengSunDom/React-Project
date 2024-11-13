import React from 'react';
import { useParams } from 'react-router-dom';

interface Params extends Record<string, string | undefined> {
    id: string;
  }

const Profile: React.FC = () => {
  const { id } = useParams<Params>(); // Access the route parameter

  return (
    <div>
      <h2>Profile</h2>
      <p>Viewing profile for user with ID: {id}</p>
    </div>
  );
};

export default Profile;
