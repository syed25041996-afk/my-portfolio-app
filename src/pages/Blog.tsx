import Layout from "@/components/layout/Layout";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import TechBadge from "@/components/ui/TechBadge";

const blogPosts = [
  {
    slug: "why-i-built-homelab",
    title: "Why I Built My Homelab: From Developer to DevOps",
    excerpt: "The journey from writing application code to building the infrastructure that runs it. Understanding production from the ground up.",
    date: "2024-01-20",
    readTime: "8 min read",
    tags: ["Career", "Homelab", "Learning"],
    category: "Getting Started",
  },
  {
    slug: "kubernetes-bare-metal",
    title: "Building a Production-Grade Kubernetes Cluster on Bare Metal",
    excerpt: "How I designed and deployed a multi-node Kubernetes cluster using kubeadm, complete with HA control plane and persistent storage.",
    date: "2024-01-15",
    readTime: "12 min read",
    tags: ["Kubernetes", "Bare Metal", "HA"],
    category: "Kubernetes",
  },
  {
    slug: "proxmox-infrastructure",
    title: "Proxmox VE: Designing a Virtualization Foundation",
    excerpt: "Setting up Proxmox as the hypervisor layer, creating VM templates, and establishing a solid foundation for the homelab.",
    date: "2024-01-12",
    readTime: "10 min read",
    tags: ["Proxmox", "Virtualization", "Infrastructure"],
    category: "Infrastructure",
  },
  {
    slug: "gitops-argocd",
    title: "GitOps with ArgoCD: From Zero to Production",
    excerpt: "Implementing a complete GitOps workflow using ArgoCD for automated deployments, with rollback strategies and multi-environment support.",
    date: "2024-01-08",
    readTime: "10 min read",
    tags: ["GitOps", "ArgoCD", "CI/CD"],
    category: "CI/CD",
  },
  {
    slug: "cicd-github-actions",
    title: "CI/CD Pipelines: GitHub Actions and Jenkins Integration",
    excerpt: "Building automated pipelines that test, build, and deploy applications. Comparing GitHub Actions and Jenkins for different use cases.",
    date: "2024-01-05",
    readTime: "14 min read",
    tags: ["GitHub Actions", "Jenkins", "Automation"],
    category: "CI/CD",
  },
  {
    slug: "observability-stack",
    title: "Complete Observability Stack: Prometheus, Grafana, and Loki",
    excerpt: "Setting up a production-ready monitoring and logging solution with alerting, dashboards, and log aggregation.",
    date: "2024-01-01",
    readTime: "15 min read",
    tags: ["Prometheus", "Grafana", "Monitoring"],
    category: "Observability",
  },
  {
    slug: "nginx-reverse-proxy",
    title: "Nginx Reverse Proxy with SSL/TLS and Let's Encrypt",
    excerpt: "Configuring Nginx as a reverse proxy, automating SSL certificates, and implementing security best practices.",
    date: "2023-12-28",
    readTime: "9 min read",
    tags: ["Nginx", "SSL", "Security"],
    category: "Networking",
  },
  {
    slug: "fullstack-deployment",
    title: "Deploying a Full-Stack App: Angular + Express + PostgreSQL",
    excerpt: "End-to-end deployment of a production-ready application with Docker Compose and Kubernetes manifests.",
    date: "2023-12-25",
    readTime: "11 min read",
    tags: ["Docker", "Full-Stack", "PostgreSQL"],
    category: "Applications",
  },
  {
    slug: "incident-simulation",
    title: "Chaos Engineering: Simulating Failures in My Homelab",
    excerpt: "Breaking things on purpose to understand failure modes, recovery procedures, and building resilience.",
    date: "2023-12-20",
    readTime: "13 min read",
    tags: ["Chaos Engineering", "SRE", "Resilience"],
    category: "SRE",
  },
];

const Blog = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              <span className="text-primary">//</span> Homelab Journey
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "100ms" }}>
              A technical blog documenting my path from developer to DevOps engineer. 
              Real implementations, honest challenges, and lessons learned while building 
              production-grade infrastructure in my homelab.
            </p>
          </div>

          {/* Terminal-style prompt */}
          <div className="bg-card border border-border rounded-lg p-4 mb-10 font-mono text-sm animate-fade-in" style={{ animationDelay: "200ms" }}>
            <span className="text-primary">$</span>{" "}
            <span className="text-muted-foreground">cat /var/log/homelab-journey.log | tail -n 9</span>
          </div>

          {/* Blog Posts */}
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <article
                key={post.slug}
                className="blog-card group animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 50}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="text-muted-foreground/40">•</span>
                      {post.tags.slice(0, 3).map((tag) => (
                        <TechBadge key={tag}>{tag}</TechBadge>
                      ))}
                    </div>

                    <h2 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-primary text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        Read more <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
