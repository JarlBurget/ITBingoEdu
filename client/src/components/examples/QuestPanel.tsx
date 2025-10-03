import QuestPanel from '../QuestPanel';
import { quests, GameState } from '@/data/gameData';

export default function QuestPanelExample() {
  const mockGameState: GameState = {
    answeredSubjects: new Set(['java', 'htmlcss', 'userresearch', 'microservices', 'ethicalhacking', 'mechanics']),
    correctAnswers: new Set(['java', 'htmlcss', 'userresearch']),
    wrongAnswers: new Set(['microservices']),
    completedFields: new Set(['vs']),
    easterEggFound: true,
  };

  return (
    <div className="p-8 max-w-md">
      <QuestPanel quests={quests} gameState={mockGameState} />
    </div>
  );
}
