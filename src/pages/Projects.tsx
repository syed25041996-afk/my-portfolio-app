import Layout from "@/components/layout/Layout";
import { ExternalLink, Github, Server, GitBranch, Shield } from "lucide-react";
import TechBadge from "@/components/ui/TechBadge";

const projects = [
  {
    title: "Production Kubernetes Platform",
    description: "A multi-node Kubernetes cluster designed with production best practices. Features HA control plane, MetalLB for load balancing, Longhorn for persistent storage, and complete RBAC configuration.",
    architecture: [
      "3 control plane nodes for high availability",
      "4 worker nodes with labeled node pools",
      "MetalLB for bare-metal load balancing",
      "Longhorn for distributed block storage",
      "Ingress-NGINX for traffic management",
    ],
    techStack: ["Kubernetes", "kubeadm", "MetalLB", "Longhorn", "Helm"],
    icon: Server,
    metrics: [
      { label: "Nodes", value: "7" },
      { label: "Uptime", value: "99.9%" },
      { label: "Pods", value: "50+" },
    ],
  },
  {
    title: "GitOps CI/CD Pipeline",
    description: "Fully automated deployment pipeline implementing GitOps principles. Code changes trigger builds, tests, and deployments automatically with built-in rollback capabilities.",
    architecture: [
      "GitHub Actions for CI (build, test, scan)",
      "ArgoCD for continuous deployment",
      "Image scanning with Trivy",
      "Slack notifications for pipeline status",
      "Automated rollback on failure",
    ],
    techStack: ["GitHub Actions", "ArgoCD", "Docker", "Trivy", "Helm"],
    icon: GitBranch,
    metrics: [
      { label: "Deploy Time", value: "<5min" },
      { label: "Pipelines", value: "12" },
      { label: "Deployments/week", value: "30+" },
    ],
  },
  {
    title: "Secure File Storage Application",
    description: "Production-grade full-stack application with secure file upload, authentication, and encrypted storage. Demonstrates end-to-end application deployment best practices.",
    architecture: [
      "Angular frontend with responsive design",
      "Express.js REST API with JWT auth",
      "PostgreSQL database with encrypted fields",
      "MinIO for S3-compatible object storage",
      "Redis for session caching",
    ],
    techStack: ["Angular", "Express", "PostgreSQL", "MinIO", "Redis"],
    icon: Shield,
    metrics: [
      { label: "Endpoints", value: "25" },
      { label: "Test Coverage", value: "85%" },
      { label: "Response Time", value: "<100ms" },
    ],
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              <span className="text-primary">//</span> Projects
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "100ms" }}>
              Homelab projects built with production standards in mind. Each project 
              emphasizes scalability, reliability, automation, and real-world applicability.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="blog-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <project.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-secondary/30 rounded-lg">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="text-2xl font-bold text-primary font-mono">{metric.value}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Architecture */}
                <div className="mb-6">
                  <h3 className="font-mono text-sm uppercase tracking-wider text-muted-foreground mb-3">
                    Architecture
                  </h3>
                  <ul className="space-y-2">
                    {project.architecture.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">▹</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <TechBadge key={tech} size="md">{tech}</TechBadge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-6 pt-6 border-t border-border">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Read Case Study
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
