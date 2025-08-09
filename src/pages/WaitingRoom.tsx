import { useState, useEffect } from "react";
import { TaliaLogo } from "@/components/TaliaLogo";
import { FloatingParticles } from "@/components/FloatingParticles";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { MessageCircle, X } from "lucide-react";

const WaitingRoom = () => {
  const [timeLeft, setTimeLeft] = useState(131); // 2:11 in seconds
  const [showChat, setShowChat] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          navigate("/consultation");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingParticles />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 text-center border-b border-primary/20">
          <TaliaLogo size="md" className="mb-2" />
          <p className="text-sm text-muted-foreground">Waiting Room</p>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 max-w-md mx-auto w-full">
          <div className="text-center mb-12">
            {/* Timer Circle */}
            <div className="relative mx-auto w-55 h-55 mb-8">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  stroke="hsl(var(--border))"
                  strokeWidth="6"
                  fill="none"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  stroke="hsl(var(--primary))"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 90}`}
                  strokeDashoffset={`${2 * Math.PI * 90 * (1 - timeLeft / 180)}`}
                  className="transition-all duration-1000 drop-shadow-lg"
                  style={{ filter: "drop-shadow(0 0 8px hsl(var(--primary) / 0.5))" }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-light text-foreground">
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>

            <h2 className="text-2xl font-medium mb-4 text-foreground">
              Doctor will join soon...
            </h2>
            
            <p className="text-muted-foreground mb-8">
              Please stay on this page. Dr. Sarah Chen will be with you shortly.
            </p>

            <div className="space-y-4">
              <Button 
                variant="outline"
                className="w-full h-12 border-primary/30 hover:border-primary/50 hover:bg-primary/10"
                onClick={() => navigate("/")}
              >
                Cancel Appointment
              </Button>

              <Button 
                variant="ghost"
                className="w-full h-12 text-primary hover:bg-primary/10"
                onClick={() => setShowChat(true)}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat with support
              </Button>
            </div>
          </div>

          {/* Talia Branding */}
          <div className="opacity-30">
            <TaliaLogo size="sm" animated={false} className="text-primary/50" />
          </div>
        </main>
      </div>

      {/* Chat Sidebar */}
      {showChat && (
        <div className="fixed right-0 top-0 h-full w-80 bg-card/95 backdrop-blur-xl border-l border-primary/20 z-50 transform transition-transform duration-300">
          <div className="p-4 border-b border-primary/20 flex items-center justify-between">
            <div>
              <h3 className="font-medium">Support Chat</h3>
              <p className="text-xs text-muted-foreground">We're here to help</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowChat(false)}
              className="h-8 w-8"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex-1 p-4">
            <div className="space-y-4">
              <div className="bg-primary/20 rounded-lg p-3 max-w-xs">
                <p className="text-sm">Hi! How can I help you today?</p>
                <span className="text-xs text-muted-foreground">Just now</span>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-primary/20">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 bg-background/50 border border-primary/30 rounded-lg text-sm focus:outline-none focus:border-primary"
              />
              <Button size="sm" className="talia-glow-button">
                Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WaitingRoom;