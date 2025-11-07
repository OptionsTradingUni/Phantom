# Railway Deployment Guide

This project is configured for easy deployment on Railway.

## Quick Deploy

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template)

## Manual Deployment Steps

1. **Create a Railway Account**
   - Go to [railway.app](https://railway.app)
   - Sign up or log in with GitHub

2. **Create a New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Authorize Railway to access your repositories
   - Select this repository

3. **Configuration**
   - Railway will automatically detect the `railway.json` and `nixpacks.toml` configuration
   - The build process will:
     - Install Node.js 20
     - Run `npm ci` to install dependencies
     - Run `npm run build` to build the application
     - Start the server with `npm run start`

4. **Environment Variables** (Optional)
   - If you need any environment variables, add them in the Railway dashboard:
     - Click on your service
     - Go to "Variables" tab
     - Add your environment variables (e.g., `SESSION_SECRET`)

5. **Deploy**
   - Railway will automatically deploy your application
   - You'll get a public URL once deployment is complete
   - The application will be available at `https://your-app.up.railway.app`

## Configuration Files

- **railway.json**: Defines the deployment configuration
- **nixpacks.toml**: Specifies build phases and start command
- **package.json**: Contains build and start scripts

## Build Process

```bash
# Install dependencies
npm ci

# Build frontend and backend
npm run build

# Start production server
npm run start
```

## Port Configuration

The application automatically uses Railway's `PORT` environment variable. No manual configuration needed.

## Troubleshooting

If deployment fails:

1. Check the Railway build logs
2. Ensure all dependencies are listed in `package.json`
3. Verify the build script completes successfully locally
4. Check that the start script runs the built application

## Local Testing

Test the production build locally before deploying:

```bash
npm run build
npm run start
```

Visit `http://localhost:5000` to verify the application works correctly.
