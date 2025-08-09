import { cn } from "@/lib/utils";

interface TaliaLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
}

export const TaliaLogo = ({ className, size = "md", animated = true }: TaliaLogoProps) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
    xl: "text-6xl"
  };

  return (
    <div className={cn(
      "talia-logo inline-block relative",
      sizeClasses[size],
      animated && "animate-pulse",
      className
    )}>
      <span className="relative z-10">TALIA</span>
      {animated && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 blur-xl animate-pulse" />
      )}
    </div>
  );
};