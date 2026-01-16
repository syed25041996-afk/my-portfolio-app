import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Terminal className="w-5 h-5 text-primary" />
              <span className="font-mono font-bold">
                <span className="text-primary">~/</span>devops-engineer
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Building production-grade infrastructure, one commit at a time.
            </p>
          </div>

          <div>
            <h4 className="font-mono font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Homelab Journey
              </Link>
              <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Projects
              </Link>
              <Link to="/resume" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Resume
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-mono font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm font-mono">
            <span className="text-primary">$</span> echo "Built with passion for infrastructure" | cat
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
