import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Play, Video, Info } from "lucide-react";
import VideoModal from "@/components/VideoModal";
import AboutModal from "@/components/AboutModal";
import vocoLogo from "@assets/generated_images/VOCO_college_logo_design_4e979c16.png";

export default function Home() {
  const [, setLocation] = useLocation();
  const [showVideo, setShowVideo] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-background px-4">
      <div className="w-full max-w-2xl text-center space-y-12">
        <div className="space-y-6">
          <img
            src={vocoLogo}
            alt="VOCO Logo"
            className="h-20 md:h-24 mx-auto"
            data-testid="img-voco-logo"
          />
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">
            IT Bingo
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Discover your perfect IT study field at VOCO
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-md mx-auto">
          <Button
            size="lg"
            className="w-full h-14 text-base font-semibold"
            onClick={() => setLocation("/game")}
            data-testid="button-play"
          >
            <Play className="w-5 h-5 mr-2" />
            Play IT Bingo
          </Button>

          <Button
            size="lg"
            variant="secondary"
            className="w-full h-12 text-base"
            onClick={() => setShowVideo(true)}
            data-testid="button-video"
          >
            <Video className="w-5 h-5 mr-2" />
            Watch Video
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full h-12 text-base"
            onClick={() => setShowAbout(true)}
            data-testid="button-about"
          >
            <Info className="w-5 h-5 mr-2" />
            About VOCO
          </Button>
        </div>
      </div>

      <VideoModal open={showVideo} onClose={() => setShowVideo(false)} />
      <AboutModal open={showAbout} onClose={() => setShowAbout(false)} />
    </div>
  );
}
