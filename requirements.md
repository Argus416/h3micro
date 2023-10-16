# Microservices Project Specifications 🐳

## Objective

[ ] Develop a full-stack project using microservices architecture while adhering to technical requirements.

## Specifications

Please find the specifications for your second-year Microservices module project. The project will be evaluated based on four criteria. The first two criteria are essential for achieving a passing grade (10/20).

**Basic Technical Components:**

-   [x] Your project must include a frontend with a minimum of two routes (e.g., a home page and a generic route).
-   [x] Your project should have a backend with a database in a specific container. Explain your choice of database technology (relational or non-relational).
-   [x] The database must be functional, comprising at least one table or collection with an explicit schema.

-   [x] Your project must include at least 2 Dockerfiles.
-   [x] Your project must have at least one docker-compose.yml file.
-   [ ] You have pushed at least one Docker image to a container registry (e.g., Docker Hub, Azure Registry, GCR, etc.).
-   [x] Your project is publicly accessible online via a version control platform like GitHub, Bitbucket, GitLab, etc.
-   [ ] Your project has been built without errors (include a screenshot in your README.md), and the public addresses of the images you've built during the project are provided.
-   You have at least some test files (bash or other) that:
    -   [x] Test the health of your containers.
    -   [x] Test the proper functioning of your application (frontend and backend).
    -   [x] Test the proper functioning of your database.

**Architecture:**

You have illustrated the architecture of your project in vector format (e.g., using draw.io or other web tools), including:

-   [ ] The different components/services of your application.
-   [ ] Links between these components/services, protocols, and sample requests (e.g., POST, GET) in curl/json format.
-   [ ] Highlighted exposed ports on the client and backend sides.

**Deployment & Production:**

-   [ ] Your project features a reverse proxy service such as Nginx or Traefik.
-   [ ] SSL and HTTPS are implemented.
-   [ ] Your project has auto-generated documentation, e.g., OpenAPI (formerly Swagger Specification).
-   [ ] You have employed an orchestrator like Docker Swarm or Kubernetes to manage your containers.
-   [ ] Your project is deployed with a public and secure access URL on a cloud provider (e.g., Heroku, GCP, Azure, AWS).
-   [ ] You have automated tests in your docker-compose.yml file.
-   [ ] Real-time monitoring of your containers is in place, and you can share a monitoring dashboard via an external public URL (e.g., Grafana, Prometheus, Weave Scope).
-   [ ] Your solution includes a queuing or notification management system in the form of a container (e.g., RabbitMQ, Celery) or cloud pub/sub, serverless solutions.

**Clean Code:**

-   [ ] Your project has clear and concise documentation explaining the different endpoints and request types (POST, GET, UPDATE) of your application, as well as the exposed ports.
-   [ ] Comments are present in ALL your code files.
-   [ ] Your root-level README.md on GitHub contains instructions for building and running your project, along with an error-free online demo.

## Mid-term Report (October 18, 2023)

In a few lines, describe your project, detail its architecture, and specify the technologies you plan to use. Push this summary to your README.md at the root of your Git repository.
