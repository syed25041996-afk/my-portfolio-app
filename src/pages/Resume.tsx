import Layout from "@/components/layout/Layout";
import { Download, MapPin, Mail, Linkedin, Github, Briefcase, GraduationCap, Wrench } from "lucide-react";
import TechBadge from "@/components/ui/TechBadge";

const Resume = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 animate-fade-in">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                DevOps Engineer
              </h1>
              <p className="text-lg text-muted-foreground">
                Full-Stack Background • Cloud-Native Enthusiast
              </p>
            </div>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono font-medium rounded-lg hover:opacity-90 transition-opacity">
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 mb-12 p-4 bg-card border border-border rounded-lg animate-fade-in" style={{ animationDelay: "100ms" }}>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              Available Remotely
            </span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4 text-primary" />
              contact@example.com
            </span>
            <a href="https://linkedin.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-4 h-4 text-primary" />
              LinkedIn
            </a>
            <a href="https://github.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-4 h-4 text-primary" />
              GitHub
            </a>
          </div>

          {/* Professional Summary */}
          <section className="mb-12 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h2 className="section-heading">Professional Summary</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-muted-foreground leading-relaxed">
                DevOps Engineer with a full-stack development background, specializing in 
                Kubernetes, CI/CD automation, and cloud-native infrastructure. Passionate 
                about building scalable, reliable systems and implementing SRE best practices. 
                Extensive hands-on experience through homelab projects that mirror production 
                environments, including multi-node Kubernetes clusters, GitOps workflows, 
                and comprehensive observability stacks.
              </p>
            </div>
          </section>

          {/* DevOps & Homelab Experience */}
          <section className="mb-12 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <h2 className="section-heading">
              <Server className="w-6 h-6 text-primary" />
              DevOps & Homelab Experience
            </h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Self-Directed DevOps Projects</h3>
                <span className="text-sm font-mono text-muted-foreground">2023 - Present</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span className="text-muted-foreground">
                    Designed and deployed a 7-node Kubernetes cluster on bare metal with HA control plane, MetalLB load balancing, and Longhorn persistent storage
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span className="text-muted-foreground">
                    Implemented GitOps workflows using ArgoCD, achieving automated deployments with 5-minute delivery cycles
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span className="text-muted-foreground">
                    Built comprehensive CI/CD pipelines with GitHub Actions and Jenkins, including container scanning and automated testing
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span className="text-muted-foreground">
                    Deployed production-grade observability stack with Prometheus, Grafana, and Loki for metrics, visualization, and log aggregation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span className="text-muted-foreground">
                    Configured Proxmox VE hypervisor managing 12 VMs across multiple physical hosts
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-12 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <h2 className="section-heading">
              <Briefcase className="w-6 h-6 text-primary" />
              Professional Experience
            </h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Software Engineer</h3>
                  <p className="text-primary font-mono">Zensar Technologies</p>
                </div>
                <span className="text-sm font-mono text-muted-foreground">2021 - 2023</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span className="text-muted-foreground">
                    Developed and maintained full-stack applications using Angular, Node.js, and PostgreSQL
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span className="text-muted-foreground">
                    Containerized legacy applications using Docker, reducing deployment time by 60%
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span className="text-muted-foreground">
                    Collaborated with DevOps team to implement CI/CD pipelines for 5+ microservices
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span className="text-muted-foreground">
                    Optimized database queries resulting in 40% improvement in API response times
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-12 animate-fade-in" style={{ animationDelay: "500ms" }}>
            <h2 className="section-heading">
              <Wrench className="w-6 h-6 text-primary" />
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-mono text-sm uppercase tracking-wider text-muted-foreground mb-4">
                  Container & Orchestration
                </h3>
                <div className="flex flex-wrap gap-2">
                  <TechBadge>Kubernetes</TechBadge>
                  <TechBadge>Docker</TechBadge>
                  <TechBadge>Helm</TechBadge>
                  <TechBadge>Docker Compose</TechBadge>
                  <TechBadge>containerd</TechBadge>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-mono text-sm uppercase tracking-wider text-muted-foreground mb-4">
                  CI/CD & GitOps
                </h3>
                <div className="flex flex-wrap gap-2">
                  <TechBadge>GitHub Actions</TechBadge>
                  <TechBadge>Jenkins</TechBadge>
                  <TechBadge>ArgoCD</TechBadge>
                  <TechBadge>Git</TechBadge>
                  <TechBadge>Trivy</TechBadge>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-mono text-sm uppercase tracking-wider text-muted-foreground mb-4">
                  Cloud & Infrastructure
                </h3>
                <div className="flex flex-wrap gap-2">
                  <TechBadge>AWS</TechBadge>
                  <TechBadge>Terraform</TechBadge>
                  <TechBadge>Proxmox</TechBadge>
                  <TechBadge>Linux</TechBadge>
                  <TechBadge>Nginx</TechBadge>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-mono text-sm uppercase tracking-wider text-muted-foreground mb-4">
                  Observability & Security
                </h3>
                <div className="flex flex-wrap gap-2">
                  <TechBadge>Prometheus</TechBadge>
                  <TechBadge>Grafana</TechBadge>
                  <TechBadge>Loki</TechBadge>
                  <TechBadge>RBAC</TechBadge>
                  <TechBadge>SSL/TLS</TechBadge>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="animate-fade-in" style={{ animationDelay: "600ms" }}>
            <h2 className="section-heading">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Bachelor of Technology in Computer Science</h3>
                  <p className="text-muted-foreground">University Name</p>
                </div>
                <span className="text-sm font-mono text-muted-foreground">2017 - 2021</span>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
};

const Server = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
  </svg>
);

export default Resume;
