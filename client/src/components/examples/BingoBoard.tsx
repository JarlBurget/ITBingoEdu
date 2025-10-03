import BingoBoard from '../BingoBoard';
import { GameState } from '@/data/gameData';

export default function BingoBoardExample() {
  const mockGameState: GameState = {
    answeredSubjects: new Set(['java', 'htmlcss', 'javascript', 'databases', 'mobileapp']),
    correctAnswers: new Set(['java', 'htmlcss', 'javascript', 'databases', 'mobileapp']),
    wrongAnswers: new Set(),
    completedFields: new Set(['vs']),
    easterEggFound: false,
  };

  return (
    <div className="p-4 md:p-8">
      <BingoBoard 
        gameState={mockGameState} 
        onCellClick={(subject) => console.log('Clicked:', subject.name)}
      />
    </div>
  );
}
