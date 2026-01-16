# DevOps Homelab & Platform Engineering Journey

This repository showcases my hands-on experience in building and managing a DevOps homelab to simulate production-grade environments for continuous learning and skill development in platform engineering and site reliability engineering (SRE).

I established this homelab to replicate real-world infrastructure challenges, enabling me to practice deploying, monitoring, and securing applications at scale without relying on cloud providers. The setup focuses on core DevOps principles: automation to reduce manual errors, reliability through redundancy and testing, observability for proactive issue detection, and security through layered defenses.

### Infrastructure Overview
- **Virtualization Platform**: Proxmox for managing bare-metal servers and virtual machines
- **Operating Systems**: Ubuntu Server VMs for consistent, Linux-based environments
- **Container Orchestration**: Kubernetes clusters spanning multiple nodes (both bare-metal and virtualized)
- **Networking**: VLANs, firewalls, and load balancing for isolated and secure communication

### Key Technologies and Practices
- **Kubernetes Clusters**: Multi-node setups for high availability, including control plane and worker node management
- **CI/CD Pipelines**: Automated workflows using GitHub Actions for code integration and Jenkins for complex deployment scenarios
- **GitOps Deployments**: ArgoCD for declarative, version-controlled application deployments
- **Containerization**: Docker for packaging applications and Docker Compose for local development stacks
- **Infrastructure as Code**: Terraform for provisioning infrastructure and Ansible for configuration management
- **Monitoring and Logging**: Prometheus for metrics collection, Grafana for visualization, and Loki for log aggregation
- **Reverse Proxy and Security**: Nginx for load balancing and SSL/TLS termination
- **Incident Response**: Regular simulation of failures, recovery testing, and performance optimization
- **Security Measures**: Role-based access control (RBAC), secrets management with tools like HashiCorp Vault, and adherence to least privilege principles

### Featured Project: Secure Full-Stack File Storage Platform
This project demonstrates end-to-end application lifecycle management in a homelab environment:
- **Frontend**: Angular for a responsive user interface
- **Backend**: Express.js for API services
- **Database**: PostgreSQL for data persistence
- **Authentication**: bcrypt for password hashing and access control mechanisms
- **Deployment**: Containerized with Docker and orchestrated via Docker Compose
- **CI/CD Integration**: Automated testing and deployment pipelines
- **Infrastructure**: Hosted on Proxmox with dedicated VMs for application and database layers, treated as a production internal platform
