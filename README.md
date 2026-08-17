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
2. Start the infrastructure:
   ```bash
   docker-compose up -d
   ```
3. Install frontend dependencies:
   ```bash
   cd frontend && npm install
   ```
4. Start the frontend development server:
   ```bash
   npm run dev
   ```
5. The backend is already running via Docker Compose on port 8080.

### Available Services

- Backend API: http://localhost:8080
- Frontend: http://localhost:3000
- PostgreSQL: localhost:5432
- Redis: localhost:6379

## Project Structure

- `backend/` - Go/Gin application
- `frontend/` - Next.js/TypeScript application
- `docs/` - Documentation
- `.github/workflows/` - CI/CD pipelines

## License

[Specify license here]
