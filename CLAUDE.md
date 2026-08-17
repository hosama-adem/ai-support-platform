# Project Context
This is an AI-powered developer support and ticketing platform built with:
- Backend: Go (Gin framework)
- Frontend: Next.js with TypeScript
- Database: PostgreSQL
- Cache: Redis
- AI: Integrated via LLM API in the backend
- Infrastructure: Docker Compose for local development, GitHub Actions for CI/CD

The architecture follows a modular structure:
- Backend: Go standard project layout with cmd, internal, pkg, etc.
- Frontend: Next.js 13+ app router with TypeScript
- Documentation: Separate directory for architecture, API, and deployment docs

# Development Principles
1. **Maintain Separation of Concerns**: Keep backend, frontend, and infrastructure code in their respective directories.
2. **Follow Established Patterns**: 
   - For backend: Use the internal/ package for application code, pkg/ for reusable libraries, and cmd/ for entry points.
   - For frontend: Use the app router, colocate styles with components, and follow Next.js best practices.
3. **Write Tests**: 
   - Backend: Unit and integration tests in the tests/ directory.
   - Frontend: Unit tests with Jest and React Testing Library, E2E tests with Cypress or Playwright.
4. **Use Environment Variables**: Configure via environment files (not committed) and Docker Compose for local development.
5. **Keep Dependencies Updated**: Regularly update Go and Node.js dependencies.
6. **Document Changes**: Update the docs/ directory when adding new features or changing APIs.
7. **Code Reviews**: All changes should be reviewed via pull requests.
8. **CI/CD**: Ensure the CI pipeline passes before merging.
