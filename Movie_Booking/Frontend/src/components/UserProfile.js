import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/users/${userId}`); // Adjust the URL accordingly
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user:', error);
        setLoading(false);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return ( 
    <div>
      <h2>User Profile</h2>
      <p>ID: {user.userId}</p>
      <p>firstname: {user.firstname}</p>
      <p>lastname: {user.lastname}</p>
      <p>Username:{user.username}</p>
      <p>Email:{user.email}</p>
      <p>contact:{user.phoneNumber}</p>
      <p>Adress:{user.address}</p>
      {/* Add more user details here as needed */}
    </div>
  );
};

export default UserProfile;
