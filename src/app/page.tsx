'use client';

import { ModeToggle } from '@/components/mode-toggle';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Container } from 'lucide-react';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Hier können Sie die Logik für die Authentifizierung implementieren
    console.log('Benutzername:', username);
    console.log('Passwort:', password);
    // Zum Beispiel: Eine API-Anfrage senden, um die Anmeldeinformationen zu überprüfen
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
      <Card style={{ width: '400px', height: '600px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Benutzername'
          style={{ marginBottom: '10px' }}
        />
        <Input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Passwort'
          style={{ marginBottom: '20px' }}
        />
        <Button
          onClick={handleLogin}
          style={{ width: '100%' }}>
          Anmelden
        </Button>
      </Card>
    </div>
  );
};

export default LoginPage;
