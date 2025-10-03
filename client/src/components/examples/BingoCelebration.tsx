import BingoCelebration from '../BingoCelebration';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function BingoCelebrationExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Show BINGO Celebration</Button>
      <BingoCelebration 
        open={open} 
        onClose={() => setOpen(false)} 
        fieldName="Web Specialist"
      />
    </div>
  );
}
