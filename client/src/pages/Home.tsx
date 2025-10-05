import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Play, Video, Info } from "lucide-react";
import VideoModal from "@/components/VideoModal";
import AboutModal from "@/components/AboutModal";
import Sisekommunikatsioonilogo from "../components/assets/Sisekommunikatsioonilogo.svg";
import VOCOmuster from "../components/assets/VOCOmuster.svg";
import Oppekava from "../components/assets/Oppekava.svg";
import "./Home.css";


export default function Home() {
  const [, setLocation] = useLocation();
  const [showVideo, setShowVideo] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

   return (
    <div className="home-container">
      <img src={VOCOmuster} alt="VOCO Muster" className="home-pattern" />
      <img src={Oppekava} alt="Oppekava" className="home-oppekava" />

      <div className="home-content">
        <img src={Sisekommunikatsioonilogo} alt="VOCO Logo" className="home-logo" />
        <h1 className="home-title">VOCO BINGO</h1>
      
        <div className="home-buttons">
         <Button
  size="lg"
  className="w-full h-14 text-base font-semibold play-btn"
  onClick={() => setLocation("/game")}
>
  <Play className="w-5 h-5 mr-2" />
  Mängi
</Button>

<Button
  size="lg"
  variant="secondary"
  className="w-full h-12 text-base video-btn"
  onClick={() => setShowVideo(true)}
>
  <Video className="w-5 h-5 mr-2" />
  Video
</Button>

<Button
  size="lg"
  variant="outline"
  className="w-full h-12 text-base info-btn"
  onClick={() => setShowAbout(true)}
>
  <Info className="w-5 h-5 mr-2" />
  Lisaks
</Button>
<div className="text">
    <p className="home-subtitle">
Mängi end kooli!
        </p>

</div>
        </div>
      </div>

      <VideoModal open={showVideo} onClose={() => setShowVideo(false)} />
      <AboutModal open={showAbout} onClose={() => setShowAbout(false)} />
    </div>
  );
}