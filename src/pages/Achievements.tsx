import Layout from "@/components/layout/Layout";
import { Award, CheckCircle, Target, Zap } from "lucide-react";
import TechBadge from "@/components/ui/TechBadge";

const achievements = [
  {
    category: "Kubernetes & Container Orchestration",
    icon: Target,
    items: [
      {
        title: "Built Multi-Node Production Kubernetes Cluster",
        description: "Deployed a 7-node Kubernetes cluster from scratch using kubeadm, featuring a 3-node HA control plane with etcd clustering, achieving 99.9% uptime over 6 months.",
        impact: "Demonstrates hands-on experience with complex cluster architecture and high availability patterns.",
        tags: ["Kubernetes", "kubeadm", "HA", "etcd"],
      },
      {
        title: "Implemented Persistent Storage with Longhorn",
        description: "Configured distributed block storage across worker nodes with replication factor of 3, automated backups to S3, and volume snapshots for stateful workloads.",
        impact: "Solved production-critical data persistence challenges for stateful applications.",
        tags: ["Longhorn", "Storage", "Backups"],
      },
    ],
  },
  {
    category: "CI/CD & Automation",
    icon: Zap,
    items: [
      {
        title: "Implemented End-to-End GitOps with ArgoCD",
        description: "Designed and deployed a complete GitOps workflow where all cluster state is defined in Git. Changes to manifests automatically sync to clusters with built-in rollback capabilities.",
        impact: "Reduced deployment time from 30 minutes to under 5 minutes while eliminating manual deployment errors.",
        tags: ["ArgoCD", "GitOps", "Automation"],
      },
      {
        title: "Built Comprehensive CI Pipelines with GitHub Actions",
        description: "Created multi-stage pipelines including unit testing, integration testing, container building, vulnerability scanning with Trivy, and automatic image pushing to registry.",
        impact: "Achieved 100% automated testing coverage with zero manual intervention required for deployments.",
        tags: ["GitHub Actions", "CI/CD", "Trivy"],
      },
    ],
  },
  {
    category: "Observability & Monitoring",
    icon: CheckCircle,
    items: [
      {
        title: "Deployed Production Observability Stack",
        description: "Set up Prometheus for metrics collection, Grafana for visualization with 15+ custom dashboards, and Loki for log aggregation. Configured alerting rules with Slack integration.",
        impact: "Enabled proactive issue detection and reduced mean time to detection (MTTD) by 70%.",
        tags: ["Prometheus", "Grafana", "Loki", "Alerting"],
      },
      {
        title: "Implemented Distributed Tracing",
        description: "Integrated Jaeger for distributed tracing across microservices, enabling end-to-end request visibility and performance bottleneck identification.",
        impact: "Identified and resolved latency issues that improved overall application response time by 40%.",
        tags: ["Jaeger", "Tracing", "Performance"],
      },
    ],
  },
  {
    category: "Security & Best Practices",
    icon: Award,
    items: [
      {
        title: "Implemented Zero-Trust Security Model",
        description: "Configured Kubernetes RBAC with least-privilege access, network policies for pod isolation, and secrets management using sealed-secrets for GitOps compatibility.",
        impact: "Established security baseline meeting enterprise compliance requirements.",
        tags: ["RBAC", "Network Policies", "Secrets"],
      },
      {
        title: "Automated SSL/TLS Certificate Management",
        description: "Deployed cert-manager with Let's Encrypt for automatic certificate provisioning and renewal, securing all ingress endpoints with HTTPS.",
        impact: "Eliminated manual certificate management and prevented service disruptions from expired certificates.",
        tags: ["cert-manager", "SSL/TLS", "Let's Encrypt"],
      },
    ],
  },
];

const Achievements = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              <span className="text-primary">//</span> Achievements
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "100ms" }}>
              Key technical accomplishments demonstrating hands-on expertise with 
              production-grade infrastructure, automation, and cloud-native technologies.
            </p>
          </div>

          {/* Achievements by Category */}
          <div className="space-y-12">
            {achievements.map((category, catIndex) => (
              <div key={category.category} className="animate-fade-in" style={{ animationDelay: `${catIndex * 100}ms` }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold">{category.category}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <article
                      key={item.title}
                      className="blog-card"
                      style={{ animationDelay: `${(catIndex * 100) + (itemIndex * 50)}ms` }}
                    >
                      <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                      
                      <div className="p-3 bg-accent/5 border border-accent/20 rounded-lg mb-4">
                        <p className="text-sm">
                          <span className="text-accent font-semibold">Impact: </span>
                          <span className="text-muted-foreground">{item.impact}</span>
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <TechBadge key={tag}>{tag}</TechBadge>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-16 p-8 bg-card border border-border rounded-lg animate-fade-in" style={{ animationDelay: "500ms" }}>
            <h3 className="text-xl font-bold mb-6 text-center">By the Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-mono">7</div>
                <div className="text-sm text-muted-foreground">Kubernetes Nodes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-mono">12+</div>
                <div className="text-sm text-muted-foreground">CI/CD Pipelines</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-mono">99.9%</div>
                <div className="text-sm text-muted-foreground">Cluster Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-mono">&lt;5min</div>
                <div className="text-sm text-muted-foreground">Deploy Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Achievements;
