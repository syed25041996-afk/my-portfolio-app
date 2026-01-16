import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface TechBadgeProps {
  icon?: LucideIcon;
  children: React.ReactNode;
  variant?: "default" | "outline" | "filled";
  size?: "sm" | "md";
}

const TechBadge = ({ icon: Icon, children, variant = "default", size = "sm" }: TechBadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono transition-colors",
        size === "sm" && "px-2.5 py-1 text-xs rounded-md",
        size === "md" && "px-3 py-1.5 text-sm rounded-lg",
        variant === "default" && "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20",
        variant === "outline" && "border border-border text-muted-foreground hover:border-primary/50 hover:text-primary",
        variant === "filled" && "bg-primary text-primary-foreground"
      )}
    >
      {Icon && <Icon className={cn(size === "sm" ? "w-3 h-3" : "w-4 h-4")} />}
      {children}
    </span>
  );
};

export default TechBadge;
