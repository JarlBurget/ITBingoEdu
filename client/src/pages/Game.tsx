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
import game_top from "@assets/generated_images/game_top.png";
import game_bottom from "@assets/generated_images/game_bottom.png";

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
    <div className="min-h-screen bg-black relative overflow-hidden">

      {/* Top-left image */}
      <img
        src={game_top}
        alt="VOCO Top"
        className="absolute top-0 left-0 z-0 w-[calc(100%/3*0.9)] max-md:w-[calc(100%/3*0.6)]"
        style={{ height: "auto", minWidth: "332px" }}
      />

      {/* Bottom-right image */}
      <img
        src={game_bottom}
        alt="VOCO Bottom"
        className="absolute bottom-0 right-0 z-0 w-[calc(100%/3*0.9)] max-md:w-[calc(100%/3*0.6)]"
        style={{ height: "auto", minWidth: "344px" }}
      />

      <div className="flex flex-col lg:flex-row relative z-10">
        <div className="flex-1 p-4 md:p-8">
          <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={() => setLocation("/")}
                data-testid="button-back"
                className="bg-white text-black hover:bg-gray-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Tagasi
              </Button>
              <div className="w-24 md:w-32" />
            </div>

            {/* Blue frame with VOCO BINGO and BingoBoard */}
            <div
              className="p-4 rounded-lg border-4 flex flex-col items-center space-y-4"
              style={{ backgroundColor: "#20C4F4", borderColor: "#20C4F4" }}
            >
              <h1
                className="text-5xl md:text-8xl font-bold font-['Poppins']"
                style={{
                  color: "black",
                  WebkitTextStroke: "2px white",
                }}
              >
                IT-BINGO
              </h1>
              <BingoBoard gameState={gameState} onCellClick={handleCellClick} />
            </div>
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
