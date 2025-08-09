import { TaliaLogo } from "@/components/TaliaLogo";
import { FloatingParticles } from "@/components/FloatingParticles";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Calendar, ChevronRight } from "lucide-react";

const History = () => {
  const navigate = useNavigate();

  const visits = [
    { id: 1, title: "Dermatitis consultation", date: "Mar 4, 2025", doctor: "Dr. Sarah Chen" },
    { id: 2, title: "Annual checkup", date: "Feb 18, 2025", doctor: "Dr. Michael Park" },
    { id: 3, title: "Anxiety follow-up", date: "Feb 5, 2025", doctor: "Dr. Lisa Wang" },
    { id: 4, title: "Cold symptoms", date: "Jan 22, 2025", doctor: "Dr. Sarah Chen" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingParticles />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background" />
      
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 border-b border-primary/20">
          <div className="flex items-center justify-between max-w-md mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-primary hover:bg-primary/10"
            >
              ← Back
            </Button>
            <TaliaLogo size="sm" />
            <div className="w-16" /> {/* Spacer */}
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 px-6 py-8 max-w-md mx-auto w-full">
          <div className="mb-8">
            <h1 className="text-2xl font-medium mb-2">Visit History</h1>
            <p className="text-muted-foreground">Your past consultations and appointments</p>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search visits..."
              className="w-full h-12 px-4 bg-background/50 border border-primary/30 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Visit List */}
          <div className="space-y-3">
            {visits.map((visit) => (
              <Card key={visit.id} className="talia-card p-4 hover:bg-card/80 transition-colors cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground truncate">
                      {visit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {visit.date} • {visit.doctor}
                    </p>
                  </div>
                  
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </Card>
            ))}
          </div>

          {/* Talia Branding */}
          <div className="mt-12 text-center opacity-30">
            <TaliaLogo size="sm" animated={false} className="text-primary/50" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default History;