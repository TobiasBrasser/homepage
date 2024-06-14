import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useRouter } from 'next/router';

const Dokumente = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dokumente</h1>
      <p>This is a protected page.</p>
    </div>
  );
};

export default Dokumente;
