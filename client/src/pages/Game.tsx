import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import BingoBoard from "@/components/BingoBoard";
import QuestionModal from "@/components/QuestionModal";
import QuestPanel from "@/components/QuestPanel";
import BingoCelebration from "@/components/BingoCelebration";
import { subjects, quests, fields, Subject, GameState } from "@/data/gameData";
import { useSound } from "@/hooks/useSound";

export default function Game() {
  const [, setLocation] = useLocation();
  const { playSound } = useSound();
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationField, setCelebrationField] = useState("");
  
  const [gameState, setGameState] = useState<GameState>({
    answeredSubjects: new Set(),
    correctAnswers: new Set(),
    wrongAnswers: new Set(),
    completedFields: new Set(),
    easterEggFound: false,
  });

  const handleCellClick = (subject: Subject) => {
    if (!gameState.answeredSubjects.has(subject.id)) {
      playSound('bing');
      setSelectedSubject(subject);
    }
  };

  const handleAnswer = (correct: boolean) => {
    if (!selectedSubject) return;

    playSound(correct ? 'ding' : 'buzz');

    const newAnswered = new Set(gameState.answeredSubjects);
    newAnswered.add(selectedSubject.id);

    const newCorrect = new Set(gameState.correctAnswers);
    const newWrong = new Set(gameState.wrongAnswers);

    if (correct) {
      newCorrect.add(selectedSubject.id);
    } else {
      newWrong.add(selectedSubject.id);
    }

    let newEasterEgg = gameState.easterEggFound;
    if (selectedSubject.id === 'ethicalhacking') {
      newEasterEgg = true;
    }

    setGameState({
      ...gameState,
      answeredSubjects: newAnswered,
      correctAnswers: newCorrect,
      wrongAnswers: newWrong,
      easterEggFound: newEasterEgg,
    });
  };

  useEffect(() => {
    const newCompleted = new Set(gameState.completedFields);
    
    fields.forEach((field) => {
      const fieldSubjects = subjects.filter(s => s.field === field.id);
      const allCorrect = fieldSubjects.every(s => gameState.correctAnswers.has(s.id));
      
      if (allCorrect && !gameState.completedFields.has(field.id)) {
        newCompleted.add(field.id);
        playSound('celebration');
        setCelebrationField(field.fullName);
        setShowCelebration(true);
      }
    });

    if (newCompleted.size !== gameState.completedFields.size) {
      setGameState({
        ...gameState,
        completedFields: newCompleted,
      });
    }
  }, [gameState.correctAnswers]);

  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 p-4 md:p-8">
          <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={() => setLocation("/")}
                data-testid="button-back"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              <h1 className="text-2xl md:text-4xl font-display font-bold text-primary">
                IT Bingo
              </h1>
              <div className="w-24 md:w-32" />
            </div>

            <BingoBoard gameState={gameState} onCellClick={handleCellClick} />
          </div>
        </div>

        <div className="lg:border-l lg:bg-muted/20">
          <QuestPanel quests={quests} gameState={gameState} />
        </div>
      </div>

      <QuestionModal
        open={!!selectedSubject}
        onClose={() => setSelectedSubject(null)}
        subject={selectedSubject}
        onAnswer={handleAnswer}
      />

      <BingoCelebration
        open={showCelebration}
        onClose={() => setShowCelebration(false)}
        fieldName={celebrationField}
      />
    </div>
  );
}
