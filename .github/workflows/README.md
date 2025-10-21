# GitHub Actions Workflows

This directory contains automated workflows for CI/CD, deployment, and releases.

## 📋 Available Workflows

### 🔄 CI (Continuous Integration)
**File**: `ci.yml`
**Triggers**: Push to `main`/`develop` branches, Pull Requests
**Actions**:
- ✅ Code linting with ESLint
- ✅ TypeScript type checking
- ✅ Build verification
- ✅ Security audit
- ✅ Artifact archiving

### 🚀 Deploy (Continuous Deployment)
**File**: `deploy.yml`
**Triggers**: Push to `main` branch
**Deployments**:
- 🌐 **Vercel** (Primary)
- 📄 **GitHub Pages** (Backup)
- 🔗 **Netlify** (Alternative)

### 🏷️ Release (Automated Releases)
**File**: `release.yml`
**Triggers**: Git tags (`v*.*.*`)
**Actions**:
- 📦 Create GitHub release
- 📁 Upload build artifacts
- 🏷️ Tag management

## 🔧 Required Secrets

### For Vercel Deployment:
- `VERCEL_TOKEN`: Your Vercel API token
- `VERCEL_ORG_ID`: Your Vercel organization ID
- `VERCEL_PROJECT_ID`: Your Vercel project ID

### For Netlify Deployment:
- `NETLIFY_AUTH_TOKEN`: Your Netlify API token

### Automatic (No setup needed):
- `GITHUB_TOKEN`: Automatically provided by GitHub

## 🚀 Quick Setup

1. **Enable GitHub Actions** in your repository settings
2. **Add required secrets** in repository settings → Secrets and variables → Actions
3. **Push to main branch** to trigger deployment
4. **Monitor deployments** in the Actions tab

## 📊 Workflow Status

Check the Actions tab in your GitHub repository to monitor:
- ✅ Build status
- 🚀 Deployment progress
- 📈 Performance metrics
- ❌ Error logs

## 🔍 Troubleshooting

### Common Issues:
- **Build failures**: Check TypeScript errors and ESLint issues
- **Deployment failures**: Verify secrets are correctly configured
- **Permission errors**: Ensure GitHub Actions has proper permissions

### Getting Help:
- Check the Actions tab for detailed logs
- Review workflow files for configuration issues
- Ensure all required secrets are properly set