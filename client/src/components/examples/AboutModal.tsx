import AboutModal from '../AboutModal';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function AboutModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open About Modal</Button>
      <AboutModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
