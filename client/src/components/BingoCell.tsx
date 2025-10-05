import { Subject } from "@/data/gameData";
import { Check, X } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface BingoCellProps {
  subject: Subject;
  status: 'unanswered' | 'correct' | 'wrong';
  onClick: () => void;
}

export default function BingoCell({ subject, status, onClick }: BingoCellProps) {
  const bgColor = 
    status === 'correct' ? 'bg-chart-2/15 border-chart-2' :
    status === 'wrong' ? 'bg-destructive/15 border-destructive' :
    'bg-background border-border';
  
  const iconColor =
    status === 'unanswered' ? 'text-muted-foreground' :
    status === 'correct' ? 'text-chart-2' :
    'text-destructive';

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={onClick}
          className={`
            aspect-square rounded-md border-2 p-2 md:p-3
            flex flex-col items-center justify-center gap-1 md:gap-2
            transition-all duration-200 hover:scale-105 hover:border-primary hover-elevate
            ${bgColor}
          `}
          data-testid={`cell-${subject.id}`}
        >
          {/* 🟢 Updated icon rendering */}
          <span className={`text-3xl md:text-4xl ${iconColor}`}>
            {subject.icon}
          </span>

          {status === 'correct' && (
            <Check className="w-4 h-4 md:w-5 md:h-5 text-chart-2 absolute top-1 right-1" />
          )}
          {status === 'wrong' && (
            <X className="w-4 h-4 md:w-5 md:h-5 text-destructive absolute top-1 right-1" />
          )}
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-medium">{subject.name}</p>
      </TooltipContent>
    </Tooltip>
  );
}
