import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  videoUrl?: string;
}

export default function VideoModal({ open, onClose, videoUrl = "https://www.youtube.com/embed/O25Xy7tNR-8" }: VideoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background"
          onClick={onClose}
          data-testid="button-close-video"
        >
        </Button>
        <div className="aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src={videoUrl}
            title="VOCO Introduction Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
