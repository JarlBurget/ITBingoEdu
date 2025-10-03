import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Subject } from "@/data/gameData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Check, X } from "lucide-react";
import happyTimo from "@assets/generated_images/Happy_Timo_character_1cdec06b.png";
import angryTimo from "@assets/generated_images/Angry_Timo_character_f40fdf41.png";

interface QuestionModalProps {
  open: boolean;
  onClose: () => void;
  subject: Subject | null;
  onAnswer: (correct: boolean) => void;
}

export default function QuestionModal({ open, onClose, subject, onAnswer }: QuestionModalProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  if (!subject) return null;

  const Icon = subject.icon;
  const isCorrect = selectedAnswer === subject.correctAnswer;
  const isEthicalHacking = subject.id === 'ethicalhacking';

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    setShowFeedback(true);
    const correct = index === subject.correctAnswer;
    
    if (isEthicalHacking) {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 2000);
    }
    
    setTimeout(() => {
      onAnswer(correct);
      setSelectedAnswer(null);
      setShowFeedback(false);
      onClose();
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <Badge variant="default" className="bg-primary text-primary-foreground">
              {subject.field.toUpperCase()}
            </Badge>
          </div>
          <div className="flex justify-center mb-4">
            <Icon className="w-16 h-16 md:w-20 md:h-20 text-primary" />
          </div>
          <DialogTitle className="text-center text-xl md:text-2xl font-display">
            {subject.name}
          </DialogTitle>
          <p className="text-center text-muted-foreground text-sm md:text-base pt-2">
            {subject.description}
          </p>
        </DialogHeader>

        <div className="space-y-4 pt-4">
          <h4 className="font-semibold text-base md:text-lg">{subject.question}</h4>
          <div className="space-y-2">
            {subject.answers.map((answer, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrectAnswer = index === subject.correctAnswer;
              
              let buttonClass = "w-full justify-start text-left hover-elevate";
              if (showFeedback && isSelected) {
                buttonClass = isCorrect 
                  ? "w-full justify-start text-left bg-chart-2 text-white hover:bg-chart-2"
                  : "w-full justify-start text-left bg-destructive text-destructive-foreground hover:bg-destructive";
              }

              return (
                <Button
                  key={index}
                  variant={showFeedback && isSelected ? "default" : "outline"}
                  className={buttonClass}
                  onClick={() => !showFeedback && handleAnswerSelect(index)}
                  disabled={showFeedback}
                  data-testid={`answer-${index}`}
                >
                  <span className="flex-1">{answer}</span>
                  {showFeedback && isSelected && (
                    isCorrect ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />
                  )}
                </Button>
              );
            })}
          </div>
        </div>

        {showEasterEgg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
            <img
              src={isCorrect ? happyTimo : angryTimo}
              alt="Timo"
              className={`w-48 h-48 rounded-full shadow-2xl ${isCorrect ? 'animate-bounce-in' : 'animate-shake'}`}
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
