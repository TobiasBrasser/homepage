import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';

const secretKey = process.env.NEXT_PUBLIC_JWT_SECRET;

export default function Dokumente() {
    const [loading, setLoading] = useState(true);
    const router = useRouter();
  
    useEffect(() => {
      const token = localStorage.getItem('token');
      console.log('Token:', token);
    
      if (!token) {
        console.log('Token nicht vorhanden. Weiterleitung zur Login-Seite...');
        router.push('/login');
      } else {
        try {
          jwt.verify(token, secretKey);
          setLoading(false);
          console.log('Token erfolgreich verifiziert. Weiterleitung zur Dokumente-Seite...');
        } catch (err) {
          localStorage.removeItem('token');
          console.error('Fehler beim Verifizieren des Tokens:', err);
          console.log('Token ungültig. Weiterleitung zur Login-Seite...');
          router.push('/login');
        }
      }
    }, [router]);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    return (
      <div>
        <h1>Dokumente</h1>
        <p>Geheimer Bereich mit Dokumenten.</p>
      </div>
    );
  }