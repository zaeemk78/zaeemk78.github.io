import { TaliaLogo } from "@/components/TaliaLogo";
import { FloatingParticles } from "@/components/FloatingParticles";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Video, Calendar, Users, Clock, Star, ArrowRight, Play } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingParticles />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <TaliaLogo size="md" />
            <span className="text-xs text-muted-foreground tracking-wider">AI TELEHEALTH</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How it Works</a>
            <a href="#stats" className="text-muted-foreground hover:text-primary transition-colors">Impact</a>
          </div>
          <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
            Request Demo
          </Button>
        </nav>

        {/* Hero Section */}
        <section className="text-center py-20 px-6 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-light text-foreground mb-6 leading-tight">
              Healthcare
              <br />
              <span className="relative">
                reimagined with
                <TaliaLogo size="xl" className="inline mx-4" />
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The future of AI-powered telehealth. Connecting patients with qualified doctors 
              through intelligent matching, secure consultations, and streamlined healthcare delivery.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="talia-glow-button h-14 px-8 text-lg">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-primary/30 hover:bg-primary/10">
              Schedule Pitch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Hero Vision */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="talia-card p-6 text-center border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">AI First</div>
              <div className="text-muted-foreground">Intelligent healthcare matching</div>
            </Card>
            <Card className="talia-card p-6 text-center border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">Vision</div>
              <div className="text-muted-foreground">Accessible healthcare for all</div>
            </Card>
            <Card className="talia-card p-6 text-center border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">Future</div>
              <div className="text-muted-foreground">Next-gen telehealth platform</div>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-foreground mb-4">
              Our vision for <TaliaLogo size="md" className="inline mx-2" />
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pioneering AI technology designed to transform healthcare accessibility and delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="talia-card p-8 text-center border-primary/20">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Video className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-4">Smart Consultations</h3>
              <p className="text-muted-foreground">AI-powered matching system designed to connect patients with the right healthcare providers</p>
            </Card>

            <Card className="talia-card p-8 text-center border-primary/20">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-4">Digital Prescriptions</h3>
              <p className="text-muted-foreground">Streamlined prescription management system designed for modern healthcare</p>
            </Card>

            <Card className="talia-card p-8 text-center border-primary/20">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-4">Enterprise Security</h3>
              <p className="text-muted-foreground">End-to-end encryption with HIPAA compliance and military-grade security</p>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-foreground mb-4">
                Simple process, powerful results
              </h2>
              <p className="text-xl text-muted-foreground">From symptoms to treatment in three easy steps</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <span className="text-2xl font-bold text-primary">1</span>
                  <TaliaLogo size="sm" className="absolute -top-2 -right-2 opacity-50" />
                </div>
                <h3 className="text-xl font-medium mb-4">Describe Symptoms</h3>
                <p className="text-muted-foreground">AI analyzes your symptoms and matches you with the right specialist</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <span className="text-2xl font-bold text-primary">2</span>
                  <TaliaLogo size="sm" className="absolute -top-2 -right-2 opacity-50" />
                </div>
                <h3 className="text-xl font-medium mb-4">Video Consultation</h3>
                <p className="text-muted-foreground">Secure video call with qualified doctors within minutes</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <span className="text-2xl font-bold text-primary">3</span>
                  <TaliaLogo size="sm" className="absolute -top-2 -right-2 opacity-50" />
                </div>
                <h3 className="text-xl font-medium mb-4">Get Treatment</h3>
                <p className="text-muted-foreground">Receive prescriptions and follow-up care instantly</p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Stats */}
        <section id="stats" className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-foreground mb-4">
              Market opportunity with <TaliaLogo size="md" className="inline mx-2" />
            </h2>
            <p className="text-xl text-muted-foreground">Disrupting a $350B global telehealth market</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$350B</div>
              <div className="text-muted-foreground">Global telehealth market</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">40%</div>
              <div className="text-muted-foreground">Annual growth rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <div className="text-muted-foreground">Cost reduction vs traditional</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1M+</div>
              <div className="text-muted-foreground">Potential users year 1</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-light text-foreground mb-6">
              Ready to revolutionize healthcare?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Join us in building the future of telehealth with <TaliaLogo size="md" className="inline mx-2" />
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Button size="lg" className="talia-glow-button h-16 px-12 text-xl">
                Request Investment Deck
              </Button>
              <Button variant="outline" size="lg" className="h-16 px-12 text-xl border-primary/30 hover:bg-primary/10">
                Schedule Meeting
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-primary/20">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <TaliaLogo size="lg" className="mb-4" />
              <p className="text-muted-foreground">AI-powered telehealth for the modern world</p>
            </div>
            
            <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
              <span>© 2024 Talia AI</span>
              <span>•</span>
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
              <span>•</span>
              <span>Contact</span>
            </div>
          </div>
        </footer>
      </div>

      {/* Floating Talia Logos */}
      <div className="fixed top-4 right-4 opacity-10">
        <TaliaLogo size="sm" animated={false} />
      </div>
      <div className="fixed bottom-4 left-4 opacity-10">
        <TaliaLogo size="sm" animated={false} />
      </div>
    </div>
  );
};

export default Index;
