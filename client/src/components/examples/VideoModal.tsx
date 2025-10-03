import VideoModal from '../VideoModal';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function VideoModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Video Modal</Button>
      <VideoModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
