# PokerNook Web App

## Development Setup

### Recommended Tools

- Node.js 15.x
- Docker Desktop (or an alternative container runtime and local Kubernetes cluster)
- VS Code
- DevSpace CLI

Clone the repo, then run:

```bash
npm install # Install project dependencies

devspace dev # Run the app in a Kubernetes cluster
```

### NPM Scripts Overview

```bash
npm run dev # Create a hot-reloading Next.js server

npm run build # Build application for deployment

npm run sb # Storybook
```

## Contributing

### Pull Request Guidelines

- Pushes to `main` will get deployed to production, so all development should be done in dedicated branches.

- Checkout a topic branch from the relevant branch (i.e. `main`), and merge back against that branch.
