import BingoCell from '../BingoCell';
import { subjects } from '@/data/gameData';

export default function BingoCellExample() {
  return (
    <div className="p-8 space-y-4">
      <div className="flex gap-4">
        <BingoCell 
          subject={subjects[0]} 
          status="unanswered" 
          onClick={() => console.log('Cell clicked')} 
        />
        <BingoCell 
          subject={subjects[1]} 
          status="correct" 
          onClick={() => console.log('Cell clicked')} 
        />
        <BingoCell 
          subject={subjects[2]} 
          status="wrong" 
          onClick={() => console.log('Cell clicked')} 
        />
      </div>
    </div>
  );
}
