import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import TechBadge from "../ui/TechBadge";

const featuredPosts = [
  {
    slug: "kubernetes-bare-metal",
    title: "Building a Production-Grade Kubernetes Cluster on Bare Metal",
    excerpt: "How I designed and deployed a multi-node Kubernetes cluster using kubeadm, complete with HA control plane and persistent storage.",
    date: "2024-01-15",
    readTime: "12 min read",
    tags: ["Kubernetes", "Bare Metal", "HA"],
  },
  {
    slug: "gitops-argocd",
    title: "GitOps with ArgoCD: From Zero to Production",
    excerpt: "Implementing a complete GitOps workflow using ArgoCD for automated deployments, with rollback strategies and multi-environment support.",
    date: "2024-01-08",
    readTime: "10 min read",
    tags: ["GitOps", "ArgoCD", "CI/CD"],
  },
  {
    slug: "observability-stack",
    title: "Complete Observability Stack: Prometheus, Grafana, and Loki",
    excerpt: "Setting up a production-ready monitoring and logging solution with alerting, dashboards, and log aggregation.",
    date: "2024-01-01",
    readTime: "15 min read",
    tags: ["Prometheus", "Grafana", "Monitoring"],
  },
];

const FeaturedPosts = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="section-heading">Homelab Journey</h2>
          <Link
            to="/blog"
            className="hidden md:inline-flex items-center gap-2 text-primary hover:underline font-mono text-sm"
          >
            View all posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post, index) => (
            <article
              key={post.slug}
              className="blog-card group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <TechBadge key={tag}>{tag}</TechBadge>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>

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
            </article>
          ))}
        </div>

        <div className="md:hidden mt-8 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:underline font-mono text-sm"
          >
            View all posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
