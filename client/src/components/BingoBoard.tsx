import { fields, subjects, Subject, GameState } from "@/data/gameData";
import BingoCell from "./BingoCell";

interface BingoBoardProps {
  gameState: GameState;
  onCellClick: (subject: Subject) => void;
}

export default function BingoBoard({ gameState, onCellClick }: BingoBoardProps) {
  const getCellStatus = (subjectId: string): 'unanswered' | 'correct' | 'wrong' => {
    if (gameState.correctAnswers.has(subjectId)) return 'correct';
    if (gameState.wrongAnswers.has(subjectId)) return 'wrong';
    return 'unanswered';
  };

  const isFieldComplete = (fieldId: string) => {
    return gameState.completedFields.has(fieldId);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-5 gap-2 md:gap-3">
        {fields.map((field) => {
          const fieldSubjects = subjects.filter(s => s.field === field.id);
          const isComplete = isFieldComplete(field.id);

          return (
            <div key={field.id} className="flex flex-col gap-2 md:gap-3">
              <div className={`
                h-16 md:h-20 flex items-center justify-center rounded-t-md px-2 text-center
                ${isComplete ? 'bg-chart-2 text-white animate-pulse-glow' : 'bg-primary text-primary-foreground'}
                font-display font-bold text-xs md:text-sm leading-tight
              `}>
                {field.fullName}
              </div>
              {fieldSubjects.map((subject) => (
                <BingoCell
                  key={subject.id}
                  subject={subject}
                  status={getCellStatus(subject.id)}
                  onClick={() => onCellClick(subject)}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
