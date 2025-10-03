import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AboutModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AboutModal({ open, onClose }: AboutModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold text-primary">About VOCO</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4"
            onClick={onClose}
            data-testid="button-close-about"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <p className="text-base leading-relaxed">
            VOCO Tartu Vocational College is a leading educational institution in Estonia, 
            dedicated to providing high-quality vocational education in information technology 
            and digital fields.
          </p>
          <p className="text-base leading-relaxed">
            Our IT programs prepare students for successful careers in:
          </p>
          <ul className="space-y-2 pl-6">
            <li className="list-disc"><strong>Web Development</strong> - Create modern web applications</li>
            <li className="list-disc"><strong>UX/UI Design</strong> - Design beautiful user experiences</li>
            <li className="list-disc"><strong>IT Development</strong> - Build scalable software solutions</li>
            <li className="list-disc"><strong>IT Systems</strong> - Manage and secure IT infrastructure</li>
            <li className="list-disc"><strong>Digital Technologies</strong> - Explore AI, robotics, and sustainable tech</li>
          </ul>
          <p className="text-base leading-relaxed text-muted-foreground">
            Through interactive learning experiences like IT Bingo, we help students discover 
            their passion and find the perfect IT career path.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
