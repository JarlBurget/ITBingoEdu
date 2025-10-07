import { Quest, GameState, subjects } from "@/data/gameData";
import { Check, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface QuestPanelProps {
  quests: Quest[];
  gameState: GameState;
}

export default function QuestPanel({ quests, gameState }: QuestPanelProps) {
  // ✅ Calculate overall quest progress
  const completedCount = quests.filter((q) => q.checkComplete(gameState)).length;
  const overallProgress = Math.round((completedCount / quests.length) * 100);

  return (
    <div className="w-full lg:w-72 p-4 space-y-4">
      <h3 className="text-xl font-display font-bold text-white">Sinu ülesanded</h3>

      {/* ✅ Overall Quest Progress */}
      <Card className="p-3 bg-secondary/40 border-secondary/50">
        <p className="text-sm font-medium text-white mb-2">
          Ülesandeid lahendatud: {completedCount}/{quests.length}
        </p>
        <Progress value={overallProgress} className="h-2" />
      </Card>

      {/* ✅ Individual Quests */}
      <div className="space-y-3">
        {quests.map((quest) => {
          const isComplete = quest.checkComplete(gameState);
          const isITGuru = quest.id === "guru" && isComplete;

          // ✅ Calculate individual quest progress
          let progress = 0;
          if (quest.id === "explore") {
            const fieldsWithAnswers = new Set<string>();
            gameState.answeredSubjects.forEach((subjectId) => {
              const subject = subjects.find((s) => s.id === subjectId);
              if (subject) fieldsWithAnswers.add(subject.field);
            });
            progress = Math.min((fieldsWithAnswers.size / 5) * 100, 100);
          } else if (quest.id === "guru") {
            progress = Math.min((gameState.correctAnswers.size / 15) * 100, 100);
          }

          return (
            <Card
              key={quest.id}
              className={`p-4 ${
                isComplete ? "bg-chart-3/10 border-chart-3" : ""
              } ${isITGuru ? "bg-gradient-to-br from-chart-3/20 to-chart-4/20" : ""}`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isComplete ? "bg-chart-3 text-white" : "bg-muted"
                  }`}
                >
                  {isComplete ? (
                    isITGuru ? (
                      <Trophy className="w-4 h-4" />
                    ) : (
                      <Check className="w-4 h-4" />
                    )
                  ) : (
                    <span className="text-sm font-semibold text-muted-foreground">
                      ?
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className={`font-semibold text-sm ${
                        isComplete ? "text-quest-completeText" : "text-white"
                    }`}>{quest.title}</h4>
                    {isITGuru && (
                      <Badge variant="default" className="bg-chart-3">
                        Legendary
                      </Badge>
                    )}
                  </div>
                  <p className={`text-xs ${
                      isComplete ? "text-quest-completeText/80" : "text-muted-foreground"
                  }`}>
                    {quest.description}
                  </p>

                  {/* ✅ Progress bars for specific quests */}
                  {(quest.id === "explore" || quest.id === "guru") && (
                    <div className="mt-2">
                      <Progress value={progress} className="h-2" />
                      <p className="text-[10px] text-muted-foreground mt-1 text-right">
                        {quest.id === "explore"
                          ? `${Math.round(progress / 20)}/5 Fields`
                          : `${gameState.correctAnswers.size}/15 Correct`}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
