# AI-Powered Developer Support & Ticketing Platform

A production-ready platform for developer support and ticketing, powered by AI.

## Tech Stack

- **Backend**: Go + Gin
- **Database**: PostgreSQL
- **Cache**: Redis
- **Frontend**: Next.js + TypeScript
- **AI**: LLM API (integrated via backend)
- **Infrastructure**: Docker Compose
- **CI/CD**: GitHub Actions

## Getting Started

### Prerequisites

- Docker and Docker Compose
- Go 1.22+ (for backend development)
- Node.js 18+ (for frontend development)

### Local Development

1. Clone the repository
2. Copy environment example:
   ```bash
   cp .env.example .env
   ```
   (Modify .env as needed for your local setup)

3. Start the infrastructure:
   ```bash
   docker-compose up -d
   ```
4. Install frontend dependencies:
   ```bash
   cd frontend && npm install
   ```
5. Start the frontend development server:
   ```bash
   npm run dev
   ```
6. The backend is already running via Docker Compose on port 8080.

### Available Services

- Backend API: http://localhost:8080
- Frontend: http://localhost:3000
- PostgreSQL: localhost:5432
- Redis: localhost:6379

### Verifying Services

To verify that all services are running correctly:

1. Check Docker containers:
   ```bash
   docker-compose ps
   ```

2. Check backend health endpoint:
   ```bash
   curl http://localhost:8080/ping
   ```
   Should return: `{"message":"pong"}`

3. Check PostgreSQL connection:
   ```bash
   docker-compose exec postgres pg_isready -U postgres
   ```

4. Check Redis connection:
   ```bash
   docker-compose exec redis redis-cli ping
   ```
   Should return: `PONG`

### Development Workflow

- Backend code changes: Rebuild and restart the backend service
  ```bash
  docker-compose up --build backend
  ```

- Frontend code changes: The development server will auto-reload

- Database migrations: (To be implemented)
  ```bash
  # Example format when migrations are added
  # docker-compose run --rm backend migrate up
  ```

## Project Structure

- `backend/` - Go/Gin application
- `frontend/` - Next.js/TypeScript application
- `docs/` - Documentation
- `.github/workflows/` - CI/CD pipelines

## License

[Specify license here]
