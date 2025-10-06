import { Quest, GameState } from "@/data/gameData";
import { Check, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface QuestPanelProps {
  quests: Quest[];
  gameState: GameState;
}

export default function QuestPanel({ quests, gameState }: QuestPanelProps) {
  // Count completed quests
  const completedCount = quests.filter((quest) => quest.checkComplete(gameState)).length;
  const progress = (completedCount / quests.length) * 100;

  return (
    <div className="w-full lg:w-72 p-4 space-y-4">
      <h3 className="text-xl font-display font-bold text-white">Your Quests</h3>

      {/* Progress bar */}
      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
        <div
          className="h-3 bg-[#20C4F4] transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-300 text-right">
        {completedCount} / {quests.length} completed
      </p>

      {/* Existing quest cards (unchanged) */}
      <div className="space-y-3">
        {quests.map((quest) => {
          const isComplete = quest.checkComplete(gameState);
          const isITGuru = quest.id === "guru" && isComplete;

          return (
            <Card
              key={quest.id}
              className={`p-4 ${isComplete ? 'bg-chart-3/10 border-chart-3' : ''} ${
                isITGuru ? 'bg-gradient-to-br from-chart-3/20 to-chart-4/20' : ''
              }`}
              data-testid={`quest-${quest.id}`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isComplete ? 'bg-chart-3 text-white' : 'bg-muted'
                  }`}
                >
                  {isComplete ? (
                    isITGuru ? <Trophy className="w-4 h-4" /> : <Check className="w-4 h-4" />
                  ) : (
                    <span className="text-sm font-semibold text-muted-foreground">?</span>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-sm">{quest.title}</h4>
                    {isITGuru && (
                      <Badge variant="default" className="bg-chart-3">
                        Legendary
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{quest.description}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
