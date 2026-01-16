import { ArrowRight, Github, Linkedin, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import TechBadge from "../ui/TechBadge";

const skills = [
  "Kubernetes",
  "Docker",
  "CI/CD",
  "GitOps",
  "Terraform",
  "AWS",
  "Prometheus",
  "ArgoCD",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Terminal-style intro */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-sm text-muted-foreground">
              Available for DevOps & Platform Engineering roles
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <span className="text-muted-foreground">Hi, I'm Syed a</span>
            <br />
            <span className="gradient-text">DevOps Engineer</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Full-stack developer turned infrastructure enthusiast. I build production-grade 
            platforms, automate everything, and document my homelab journey along the way.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-10 animate-fade-in" style={{ animationDelay: "300ms" }}>
            {skills.map((skill) => (
              <TechBadge key={skill} variant="outline">
                {skill}
              </TechBadge>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              <Terminal className="w-4 h-4" />
              Read My Journey
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-mono font-medium rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              View Resume
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-12 animate-fade-in" style={{ animationDelay: "500ms" }}>
            <span className="text-sm text-muted-foreground font-mono">Connect:</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
