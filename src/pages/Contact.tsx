import Layout from "@/components/layout/Layout";
import { Github, Linkedin, Mail, Send, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              <span className="text-primary">//</span> Let's Connect
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
              Interested in discussing DevOps, SRE practices, or potential opportunities? 
              I'm always open to connecting with fellow engineers and recruiters.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <a
              href="mailto:contact@example.com"
              className="blog-card group text-center animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              <div className="p-4 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">contact@example.com</p>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card group text-center animate-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              <div className="p-4 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Linkedin className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-muted-foreground text-sm">Connect professionally</p>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card group text-center animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              <div className="p-4 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Github className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-muted-foreground text-sm">View my code</p>
            </a>
          </div>

          {/* Terminal-style CTA */}
          <div className="bg-card border border-border rounded-lg p-8 animate-fade-in" style={{ animationDelay: "500ms" }}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-terminal-red" />
              <div className="w-3 h-3 rounded-full bg-terminal-yellow" />
              <div className="w-3 h-3 rounded-full bg-terminal-green" />
              <span className="ml-4 font-mono text-sm text-muted-foreground">contact.sh</span>
            </div>

            <div className="font-mono text-sm space-y-2">
              <p>
                <span className="text-primary">$</span>{" "}
                <span className="text-muted-foreground">echo "Looking for a DevOps Engineer?"</span>
              </p>
              <p className="text-foreground pl-4">Looking for a DevOps Engineer?</p>
              <p className="mt-4">
                <span className="text-primary">$</span>{" "}
                <span className="text-muted-foreground">cat availability.txt</span>
              </p>
              <p className="text-foreground pl-4">
                ✓ Open to full-time DevOps/SRE/Platform Engineering roles
                <br />
                ✓ Prefer remote, open to hybrid arrangements
                <br />
                ✓ Available for contract and consulting work
              </p>
              <p className="mt-4">
                <span className="text-primary">$</span>{" "}
                <span className="text-accent">_</span>
              </p>
            </div>
          </div>

          {/* For Recruiters */}
          <div className="mt-12 p-6 bg-secondary/30 border border-border rounded-lg animate-fade-in" style={{ animationDelay: "600ms" }}>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">For Recruiters & Hiring Managers</h3>
                <p className="text-muted-foreground text-sm">
                  I'm particularly interested in roles focused on Kubernetes, CI/CD automation, 
                  and platform engineering. I bring both development experience and infrastructure 
                  expertise, making me effective at bridging the gap between dev and ops teams. 
                  Feel free to reach out to discuss how I can contribute to your organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
