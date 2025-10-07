import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Subject, fields } from "@/data/gameData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Check, X } from "lucide-react";
import happyTimo from "@assets/generated_images/Happy_timo.avif";
import angryTimo from "@assets/generated_images/Angry_timo.avif";

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
  const fieldInfo = fields.find(f => f.id === subject.field);
  const fieldFullName = fieldInfo?.fullName || subject.field.toUpperCase();

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    setShowFeedback(true);
    const correct = index === subject.correctAnswer;
    
    if (isEthicalHacking) {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 3000);
    }
    
    setTimeout(() => {
      onAnswer(correct);
      setSelectedAnswer(null);
      setShowFeedback(false);
      onClose();
    }, 3500);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] max-w-sm md:max-w-md lg:max-w-lg overflow-hidden">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <Badge variant="default" className="bg-primary text-primary-foreground">
              {fieldFullName}
            </Badge>
          </div>
          <div className="flex justify-center mb-4">
            <span className="text-6xl md:text-7xl text-primary">
              {subject.icon}
            </span>
          </div>
          <DialogTitle className="text-center text-xl md:text-2xl font-display">
            {subject.name}
          </DialogTitle>
          <p className="text-center text-muted-foreground text-sm md:text-base pt-2">
            {subject.description}
          </p>
        </DialogHeader>

        <div className="space-y-4 pt-4 min-w-0">
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
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center pointer-events-none">
            <img
              src={isCorrect ? happyTimo : angryTimo}
              alt="Timo"
              className={`w-68 h-68 rounded-full shadow-2xl ${
                isCorrect ? 'animate-bounce-in' : 'animate-shake'
              }`}
            />
            <div className="mt-4 bg-black text-white px-4 py-2 rounded-2xl shadow-lg max-w-xs text-center">
              <p className="text-base font-semibold">
                {isCorrect
                  ? "Timo on sinu üle väga uhke"
                  : "Timo on sinus väga pettunud"}
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
