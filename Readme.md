# H3Micro Project README

## IMPORTANT

Please refer to [requirements.md](./requirements.md) for a comprehensive checklist of completed tasks and their status.

---

## Project: H3Micro - Embracing Microservices

### Introduction

Welcome to the H3Micro project! This initiative serves as a live demonstration of microservices architecture, featuring a well-coordinated ecosystem of key components:

-   **Frontend**: Crafted using React.
-   **Backend**: Engineered with Express.js.
-   **Container Network**: Enabling seamless communication among all containers.
-   **Volumes**: Ensuring resilient data persistence across containers.
-   **Reverse Proxy**: Empowered by Nginx to safeguard your connections, complete with HTTPS certificates for both frontend and backend.
-   **Scripts**: Equipped with a range of helpful scripts for Docker health checks, database testing, and comprehensive front-end and back-end testing.

### Prerequisites

Before diving into this project, make sure you have the following prerequisites installed:

-   [Docker](https://www.docker.com/get-started)
-   [Docker Compose](https://docs.docker.com/compose/install)

### Access Links

Explore the various components of this project via the following links:

-   **Frontend**:

    -   HTTP: [http://localhost:5173](http://localhost:5173)
    -   HTTPS: [https://localhost:444](https://localhost:444)

-   **Backend**:

    -   HTTP: [http://localhost:8000](http://localhost:8000)
    -   HTTPS: [https://localhost](https://localhost)

-   **Backend Documentation**:

    -   HTTP: [http://localhost:8000/api-docs](http://localhost:8000/api-docs)
    -   HTTPS: [https://localhost/api-docs](https://localhost/api-docs)

-   **Production**:

    -   If the backend experiences a delay during startup, it's due to the cold start.
    -   Frontend: [https://h3micro.vercel.app](https://h3micro.vercel.app)
    -   Backend: [https://h3microserver.onrender.com](https://h3microserver.onrender.com)
    -   Backend documentation: [https://h3microserver.onrender.com/api-docs](https://h3microserver.onrender.com/api-docs)

### Screenshots

### Development Environment Architecture Schema

Here's an architectural overview of the development environment:

![Development Environment Architecture](./images/diagram-export-18_10_2023%2011_30_56.png)

### Generated Schema with `docker-compose-viz`

The schema generated using the `docker-compose-viz` library visually represents the intricate relationships between all the services.

![Docker Compose Visualization](./images/docker-compose.png)

#### Azure Hub

![Azure Hub](./images/azure_hub.png)

#### Docker Compose in Action

![Docker Compose Running](./images/docker_compose_running.png)

## Montioring

### Promethus

![Promethus](./images/Prometheus.png)

### Grafana

![Grafana backend](./images/Grafana%20backend.png)
![Grafana Postgres](./images/Grafana%20PG.png)

### Metricbeat

![Alt text](image.png)
