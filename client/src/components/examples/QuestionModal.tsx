import QuestionModal from '../QuestionModal';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { subjects } from '@/data/gameData';

export default function QuestionModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Question Modal</Button>
      <QuestionModal 
        open={open} 
        onClose={() => setOpen(false)} 
        subject={subjects[19]} 
        onAnswer={(correct) => console.log('Answered:', correct)}
      />
    </div>
  );
}
