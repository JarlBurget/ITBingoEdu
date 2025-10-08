import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Play, Video, Info } from "lucide-react";
import VideoModal from "@/components/VideoModal";
import AboutModal from "@/components/AboutModal";
import vocoLogo from "@assets/generated_images/logo3.svg";
import voco_top from "@assets/generated_images/voco_top.png";
import voco_bottom from "@assets/generated_images/voco_bottom.png";

export default function Home() {
  const [, setLocation] = useLocation();
  const [showVideo, setShowVideo] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Top-left image */}
      <img
        src={voco_top}
        alt="VOCO Top"
        className="absolute top-0 left-0 z-0 w-[calc(100%/3*0.9)] max-md:w-[calc(100%/3*0.6)]"
        style={{
          height: "auto",
          minWidth: "202px", // min size for top image
        }}
      />

      {/* Bottom-right image */}
      <img
        src={voco_bottom}
        alt="VOCO Bottom"
        className="absolute bottom-0 right-0 z-0 w-[calc(100%/3*0.9)] max-md:w-[calc(100%/3*0.6)]"
        style={{
          height: "auto",
          minWidth: "304px", // smaller min size for bottom image
        }}
      />

      {/* Main content */}
      <div className="w-full max-w-2xl text-center space-y-12 px-4 relative z-10">
        <div className="space-y-12">
          <img
            src={vocoLogo}
            alt="VOCO Logo"
            className="h-20 md:h-24 mx-auto"
            data-testid="img-voco-logo"
          />
          <h1 className="text-7xl md:text-8xl font-display font-bold text-white">
            VOCO BINGO
          </h1>
          <p className="text-lg md:text-xl text-white">
            Avasta oma ideaalne IT-õppevaldkond VOCO-s
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-md mx-auto">
          <Button
            size="lg"
            className="w-full h-14 text-base font-semibold"
            onClick={() => setLocation("game")}
            data-testid="button-play"
          >
            <Play className="w-5 h-5 mr-2" />
            Mängi
          </Button>

          <Button
            size="lg"
            variant="secondary"
            className="w-full h-12 text-base"
            onClick={() => setShowVideo(true)}
            data-testid="button-video"
          >
            <Video className="w-5 h-5 mr-2" />
            Video
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full h-12 text-base bg-gray-400 text-white border-gray-500 hover:bg-gray-500"
            onClick={() => setShowAbout(true)}
            data-testid="button-about"
          >
            <Info className="w-5 h-5 mr-2" />
            Lisaks
          </Button>

          <p className="text-3xl md:text-3xl text-white text-lg font-medium mt-12">
            Mängi end kooli!
          </p>
        </div>
      </div>

      <VideoModal open={showVideo} onClose={() => setShowVideo(false)} />
      <AboutModal open={showAbout} onClose={() => setShowAbout(false)} />
    </div>
  );
}
