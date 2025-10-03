import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

interface BingoCelebrationProps {
  open: boolean;
  onClose: () => void;
  fieldName: string;
}

export default function BingoCelebration({ open, onClose, fieldName }: BingoCelebrationProps) {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    if (open) {
      const pieces = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
      }));
      setConfetti(pieces);
    } else {
      setConfetti([]);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-gradient-to-br from-chart-3/20 via-primary/10 to-chart-4/20 border-chart-3">
        <div className="relative overflow-hidden">
          {confetti.map((piece) => (
            <div
              key={piece.id}
              className="absolute w-2 h-2 bg-chart-3 animate-confetti-fall"
              style={{
                left: `${piece.left}%`,
                animationDelay: `${piece.delay}s`,
              }}
            />
          ))}
        </div>

        <div className="text-center space-y-6 py-8">
          <div className="flex justify-center">
            <Sparkles className="w-20 h-20 text-chart-3 animate-pulse-glow" />
          </div>

          <div className="space-y-2">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-primary animate-bounce-in">
              BINGO!
            </h2>
            <p className="text-xl md:text-2xl font-semibold">
              Your best matching study field is
            </p>
            <div className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full">
              <p className="text-2xl md:text-3xl font-display font-bold">
                {fieldName}
              </p>
            </div>
          </div>

          <p className="text-muted-foreground max-w-md mx-auto">
            Congratulations! Based on your interests, this field might be perfect for you. 
            Explore more subjects to discover other possibilities!
          </p>

          <Button
            size="lg"
            onClick={onClose}
            className="mt-4"
            data-testid="button-close-celebration"
          >
            Continue Playing
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
