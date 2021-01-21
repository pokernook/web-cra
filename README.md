# PokerNook Web App

## Development Setup

### Recommended Tools

- Node.js 15.x
- Docker Desktop (or an alternative container runtime and local Kubernetes cluster)
- VS Code

Clone the repo, then run:

```bash
npm install # Install project dependencies

npm run dev # Run the app
```

### NPM Scripts Overview

```bash
npm run dev # Create a hot-reloading React app

npm run build # Build application for deployment

npm run generate # Generate GraphQL types
```

## Contributing

### Pull Request Guidelines

- Pushes to `main` will get deployed to production, so all development should be done in dedicated branches.

- Checkout a topic branch from the relevant branch (i.e. `main`), and merge back against that branch.
