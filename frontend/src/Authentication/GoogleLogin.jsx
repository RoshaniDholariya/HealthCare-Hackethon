import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GoogleLoginComponent = () => {
  const handleLoginSuccess = async (response) => {
    try {
      const { credential } = response;
      const result = await axios.post('http://localhost:3000/api/user/google/callback', {
        token: credential,
      });

      // Assuming you get a user object with a token or success message
      if (result.data.success) {
        localStorage.setItem('token', result.data.token);
        // Handle success logic here
      }
    } catch (error) {
      console.error('Error during Google login:', error);
    }
  };

  return (
    <GoogleOAuthProvider clientId="522893493254-7cems0mkdu53ik5hsni1rhaq8gmi2n9o.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={(error) => console.log(error)}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginComponent;
