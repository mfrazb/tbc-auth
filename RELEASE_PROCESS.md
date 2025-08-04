# Release Process Guide

This document outlines the proper release and deployment process for this project.

## Release Workflow

### 1. Development Phase

- All development happens on `develop` branch
- Feature branches are created from `develop`
- CI runs on all feature branches and `develop`

### 2. Release Preparation

When ready to release:

```bash
# 1. Ensure develop is up to date
git checkout develop
git pull origin develop

# 2. Create a release branch
git checkout -b release/v1.0.0

# 3. Make any final adjustments (version bumps, etc.)
# Edit package.json version if needed

# 4. Push the release branch
git push origin release/v1.0.0
```

### 3. Release Validation

- The release workflow will automatically validate the release branch
- All tests, linting, and builds must pass
- Review the build artifacts if needed

### 4. Merge to Main

Once validation passes:

```bash
# 1. Create a Pull Request from release/v1.0.0 to main
# 2. Ensure all CI checks pass
# 3. Merge the PR to main
```

### 5. Production Deployment

- Merging to `main` automatically triggers deployment to GitHub Pages
- The deployment workflow will build and deploy the production version
- Site will be available at: `https://yourusername.github.io/tbc-auth/`

## Branch Strategy

```
develop    ←─── feature branches
   ↓
release/*  ←─── release branches (for testing)
   ↓
main       ←─── production (triggers deployment)
```

## Workflow Triggers

### CI Pipeline (`.github/workflows/ci.yml`)

- **Triggers**: All feature branches, `develop`, release branches, PRs to main
- **Purpose**: Validate code quality and tests

### Release Validation (`.github/workflows/release.yml`)

- **Triggers**: Release branches, PRs to main
- **Purpose**: Validate releases before production

### GitHub Pages Deployment (`.github/workflows/pages.yml`)

- **Triggers**: Only `main` branch
- **Purpose**: Deploy to production

## Best Practices

1. **Never push directly to main** - always use PRs
2. **Always create release branches** for production releases
3. **Test thoroughly** on release branches before merging to main
4. **Use semantic versioning** for release branch names (e.g., `release/v1.0.0`)
5. **Review all CI checks** before merging to main

## Rollback Process

If a deployment has issues:

1. **Revert the merge** to main
2. **Create a hotfix branch** from the previous working commit
3. **Test the hotfix** thoroughly
4. **Merge hotfix** to main for immediate deployment

## Environment Variables

For different environments, you can set environment-specific variables:

```yaml
# In your workflow
- name: Build with environment
  run: npm run build
  env:
    VITE_API_URL: ${{ secrets.PRODUCTION_API_URL }}
    VITE_ENVIRONMENT: production
```

## Monitoring

- **GitHub Actions**: Monitor workflow runs in the Actions tab
- **GitHub Pages**: Check deployment status in Settings → Pages
- **Site Health**: Monitor the deployed site for any issues

## Troubleshooting

### Deployment Fails

1. Check GitHub Actions logs
2. Verify all tests pass locally
3. Check for build errors
4. Verify environment variables are set

### Site Not Updating

1. Check GitHub Pages settings
2. Verify the workflow ran successfully
3. Check for caching issues (may take a few minutes)

### Build Errors

1. Run `npm run build` locally
2. Check TypeScript errors
3. Verify all dependencies are installed
4. Check for environment-specific issues
