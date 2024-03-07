import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { Container } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
      <ModeToggle></ModeToggle>
    </div>
  );
}
