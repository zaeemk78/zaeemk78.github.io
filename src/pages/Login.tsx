import { useState } from "react";
import { TaliaLogo } from "@/components/TaliaLogo";
import { FloatingParticles } from "@/components/FloatingParticles";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showMFA, setShowMFA] = useState(false);
  const [mfaCode, setMfaCode] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!showMFA) {
      setShowMFA(true);
    } else {
      navigate("/onboarding");
    }
  };

  const handleMFAChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...mfaCode];
      newCode[index] = value;
      setMfaCode(newCode);
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`mfa-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingParticles />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <TaliaLogo size="lg" className="mb-4" />
          <p className="text-muted-foreground">Sign in to continue</p>
        </div>

        <Card className="talia-card w-full max-w-md p-8">
          {!showMFA ? (
            <div className="space-y-6">
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 bg-background/50 border-primary/30 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 bg-background/50 border-primary/30 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <Button 
                onClick={handleLogin}
                className="talia-glow-button w-full h-14 text-lg rounded-xl"
              >
                Sign in
              </Button>

              <div className="text-center">
                <button className="text-sm text-primary/80 hover:text-primary transition-colors">
                  Forgot password?
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-medium mb-2">Enter verification code</h3>
                <p className="text-sm text-muted-foreground">We sent a 6-digit code to your email</p>
              </div>

              <div className="flex justify-center space-x-3">
                {mfaCode.map((digit, index) => (
                  <Input
                    key={index}
                    id={`mfa-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleMFAChange(index, e.target.value)}
                    className="w-12 h-14 text-center text-xl bg-background/50 border-primary/30 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                ))}
              </div>

              <Button 
                onClick={handleLogin}
                className="talia-glow-button w-full h-14 text-lg rounded-xl"
              >
                Verify & Continue
              </Button>
            </div>
          )}
        </Card>

        {/* Talia Branding */}
        <div className="mt-8 opacity-30">
          <TaliaLogo size="sm" animated={false} className="text-primary/50" />
        </div>
      </div>
    </div>
  );
};

export default Login;