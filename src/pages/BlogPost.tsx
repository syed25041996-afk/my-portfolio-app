import Layout from "@/components/layout/Layout";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import TechBadge from "@/components/ui/TechBadge";

// Sample blog post content
const blogPosts: Record<string, {
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string[];
}> = {
  "kubernetes-bare-metal": {
    title: "Building a Production-Grade Kubernetes Cluster on Bare Metal",
    date: "2024-01-15",
    readTime: "12 min read",
    tags: ["Kubernetes", "Bare Metal", "HA", "kubeadm"],
    content: [
      "When I decided to build a Kubernetes cluster in my homelab, I had one goal: make it as close to production as possible. No managed Kubernetes, no shortcuts. Just bare metal nodes and kubeadm.",
      "## Why Bare Metal?",
      "Cloud-managed Kubernetes is great, but it abstracts away so much of the complexity. To truly understand Kubernetes, I wanted to experience the full lifecycle: bootstrapping control planes, managing etcd, configuring networking, and handling node failures.",
      "## The Architecture",
      "I designed a 7-node cluster: 3 control plane nodes for high availability and 4 worker nodes for running workloads. Each control plane node runs etcd as part of a stacked cluster, with keepalived providing a virtual IP for the API server.",
      "```\n┌─────────────────────────────────────────────┐\n│                 Virtual IP                   │\n│              (keepalived/haproxy)            │\n└─────────────────┬───────────────────────────┘\n                  │\n    ┌─────────────┼─────────────┐\n    │             │             │\n┌───┴───┐    ┌───┴───┐    ┌───┴───┐\n│ CP-1  │    │ CP-2  │    │ CP-3  │\n│ etcd  │    │ etcd  │    │ etcd  │\n└───────┘    └───────┘    └───────┘\n```",
      "## Networking Decisions",
      "I chose Calico for CNI, primarily for its NetworkPolicy support and excellent documentation. For load balancing services, MetalLB in L2 mode provides external IPs from a dedicated pool.",
      "## Persistent Storage",
      "This was one of the trickier parts. I evaluated several options and settled on Longhorn for its Kubernetes-native design and built-in backup capabilities. Each worker node contributes local storage to a distributed pool.",
      "## What I'd Do Differently in Production",
      "- External etcd cluster for better isolation\n- Dedicated nodes for infrastructure workloads\n- Hardware load balancer instead of software keepalived\n- Proper network segmentation with VLANs",
      "## Lessons Learned",
      "The biggest lesson was understanding failure modes. By intentionally breaking things—killing nodes, corrupting etcd, network partitions—I learned how Kubernetes handles failures and how to recover from them.",
      "This homelab cluster has been running for 6 months now with 99.9% uptime. It's not just a learning exercise; it's a production-like environment where I deploy and test real applications.",
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <Layout>
        <div className="py-20 container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-primary hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Back Link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-mono text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-12 animate-fade-in">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <TechBadge key={tag}>{tag}</TechBadge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-mono">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                DevOps Engineer
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none animate-fade-in" style={{ animationDelay: "100ms" }}>
            {post.content.map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-10 mb-4 text-foreground">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("```")) {
                const code = paragraph.replace(/```/g, "").trim();
                return (
                  <pre key={index} className="code-block text-sm overflow-x-auto my-6">
                    <code className="text-muted-foreground">{code}</code>
                  </pre>
                );
              }
              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n").filter(item => item.startsWith("- "));
                return (
                  <ul key={index} className="space-y-2 my-4">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">▹</span>
                        <span>{item.replace("- ", "")}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-muted-foreground leading-relaxed my-4">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-primary hover:underline font-mono text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                More posts
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
