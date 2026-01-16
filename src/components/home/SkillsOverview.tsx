import { Cloud, Container, GitBranch, Monitor, Server, Shield } from "lucide-react";

const skillCategories = [
  {
    icon: Container,
    title: "Containerization",
    description: "Docker, Kubernetes, Helm, container orchestration at scale",
    color: "text-terminal-cyan",
  },
  {
    icon: GitBranch,
    title: "CI/CD & GitOps",
    description: "GitHub Actions, Jenkins, ArgoCD, automated pipelines",
    color: "text-terminal-green",
  },
  {
    icon: Cloud,
    title: "Cloud & IaC",
    description: "AWS, Terraform, Infrastructure as Code, cloud-native design",
    color: "text-terminal-yellow",
  },
  {
    icon: Monitor,
    title: "Observability",
    description: "Prometheus, Grafana, Loki, distributed tracing",
    color: "text-terminal-purple",
  },
  {
    icon: Server,
    title: "Infrastructure",
    description: "Proxmox, bare metal, networking, Linux administration",
    color: "text-primary",
  },
  {
    icon: Shield,
    title: "Security",
    description: "RBAC, secrets management, SSL/TLS, least privilege",
    color: "text-terminal-red",
  },
];

const SkillsOverview = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Core Competencies</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((skill, index) => (
            <div
              key={skill.title}
              className="p-6 rounded-lg border border-border bg-background/50 hover:border-primary/30 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <skill.icon className={`w-10 h-10 ${skill.color} mb-4`} />
              <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsOverview;
