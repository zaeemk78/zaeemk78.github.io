import { useState } from "react";
import { TaliaLogo } from "@/components/TaliaLogo";
import { FloatingParticles } from "@/components/FloatingParticles";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Shield, Calendar, Video } from "lucide-react";

const Onboarding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      icon: Video,
      title: "Talk to a GP in minutes",
      description: "Connect with qualified doctors instantly through secure video calls"
    },
    {
      icon: Calendar,
      title: "Get prescriptions same-day",
      description: "Receive digital prescriptions and medication delivery on the same day"
    },
    {
      icon: Shield,
      title: "Your data stays private",
      description: "End-to-end encryption ensures your health information remains secure"
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate("/waiting-room");
    }
  };

  const CurrentIcon = slides[currentSlide].icon;

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingParticles />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 text-center">
          <TaliaLogo size="md" className="mb-2" />
          <p className="text-sm text-muted-foreground">Welcome to the future of healthcare</p>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 max-w-md mx-auto w-full">
          <Card className="talia-card w-full p-8 text-center">
            <div className="mb-8">
              <div className="relative mx-auto w-24 h-24 mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" />
                <div className="relative z-10 w-full h-full bg-primary/10 rounded-full flex items-center justify-center border border-primary/30">
                  <CurrentIcon className="w-10 h-10 text-primary" />
                </div>
              </div>
              
              <h2 className="text-2xl font-medium mb-4 text-foreground">
                {slides[currentSlide].title}
              </h2>
              
              <p className="text-muted-foreground leading-relaxed">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mb-8">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? "bg-primary w-6" 
                      : "bg-primary/30"
                  }`}
                />
              ))}
            </div>

            <Button 
              onClick={nextSlide}
              className="talia-glow-button w-full h-12 rounded-xl group"
            >
              {currentSlide < slides.length - 1 ? "Next" : "Get Started"}
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>

          {/* Talia Watermark */}
          <div className="mt-8 opacity-20">
            <TaliaLogo size="sm" animated={false} className="text-primary/50" />
          </div>
        </main>

        {/* Progress */}
        <footer className="p-6">
          <div className="w-full bg-border/30 rounded-full h-1">
            <div 
              className="bg-primary h-1 rounded-full transition-all duration-500"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Onboarding;