# CI/CD Pipeline Setup Guide

This project includes a comprehensive CI/CD pipeline using GitHub Actions. The pipeline includes testing, linting, building, security scanning, and deployment.

## Workflows Overview

### 1. Main CI/CD Pipeline (`.github/workflows/ci.yml`)
<<<<<<< HEAD

=======
>>>>>>> b08f2c3 (feat: add CI/CD pipeline setup)
- **Triggers**: Push to `main`/`develop` branches and pull requests
- **Jobs**:
  - **Test**: Runs TypeScript checks, ESLint, and tests with coverage
  - **Build**: Creates production build and uploads artifacts
  - **Deploy Preview**: Deploys preview for pull requests (Vercel)
  - **Deploy Production**: Deploys to production on main branch (Vercel)

### 2. GitHub Pages Deployment (`.github/workflows/deploy.yml`)
<<<<<<< HEAD

=======
>>>>>>> b08f2c3 (feat: add CI/CD pipeline setup)
- **Triggers**: Push to `main` branch
- **Purpose**: Deploys to GitHub Pages (free hosting)

### 3. Security Scanning (`.github/workflows/security.yml`)
<<<<<<< HEAD

=======
>>>>>>> b08f2c3 (feat: add CI/CD pipeline setup)
- **Triggers**: Push/PR to main/develop + weekly schedule
- **Purpose**: Scans for vulnerabilities in dependencies and code

## Setup Instructions

### 1. Enable GitHub Actions
<<<<<<< HEAD

=======
>>>>>>> b08f2c3 (feat: add CI/CD pipeline setup)
1. Go to your GitHub repository
2. Navigate to Settings → Actions → General
3. Ensure "Allow all actions and reusable workflows" is selected
4. Save the changes

### 2. Set up GitHub Pages (Optional)
<<<<<<< HEAD

=======
>>>>>>> b08f2c3 (feat: add CI/CD pipeline setup)
If you want to use GitHub Pages for hosting:

1. Go to Settings → Pages
2. Source: Select "GitHub Actions"
3. The deployment will happen automatically when you push to main

### 3. Set up Vercel Deployment (Optional)
<<<<<<< HEAD

=======
>>>>>>> b08f2c3 (feat: add CI/CD pipeline setup)
If you want to use Vercel for hosting:

1. Create a Vercel account and connect your GitHub repository
2. Get your Vercel tokens from Vercel dashboard
3. Add these secrets to your GitHub repository (Settings → Secrets and variables → Actions):
   - `VERCEL_TOKEN`: Your Vercel API token
   - `VERCEL_ORG_ID`: Your Vercel organization ID
   - `VERCEL_PROJECT_ID`: Your Vercel project ID

### 4. Set up Code Coverage (Optional)
<<<<<<< HEAD

=======
>>>>>>> b08f2c3 (feat: add CI/CD pipeline setup)
For code coverage reporting:

1. Sign up for [Codecov](https://codecov.io)
2. Connect your GitHub repository
3. Add the `CODECOV_TOKEN` secret to your GitHub repository

### 5. Set up Security Scanning (Optional)
<<<<<<< HEAD

Set up Dependabot and CodeQL on GitHub, or for more enhanced security scanning:
=======
For enhanced security scanning:
>>>>>>> b08f2c3 (feat: add CI/CD pipeline setup)

1. Sign up for [Snyk](https://snyk.io)
2. Get your Snyk token
3. Add the `SNYK_TOKEN` secret to your GitHub repository

## Workflow Features

### Automatic Testing
<<<<<<< HEAD

=======
>>>>>>> b08f2c3 (feat: add CI/CD pipeline setup)
- TypeScript type checking
- ESLint code quality checks
- Unit tests with Vitest
- Code coverage reporting

### Quality Gates
<<<<<<< HEAD

=======
>>>>>>> b08f2c3 (feat: add CI/CD pipeline setup)
- All tests must pass
- No linting errors
- TypeScript compilation must succeed
- Security vulnerabilities must be below threshold

### Deployment Strategy
<<<<<<< HEAD

=======
>>>>>>> b08f2c3 (feat: add CI/CD pipeline setup)
- **Pull Requests**: Preview deployment for testing
- **Main Branch**: Production deployment
- **Artifacts**: Build files are stored for 30 days

### Security Features
<<<<<<< HEAD

=======
>>>>>>> b08f2c3 (feat: add CI/CD pipeline setup)
- Weekly vulnerability scans
- Dependency vulnerability checks
- CodeQL static analysis
- npm audit integration

## Customization

### Adding New Test Scripts
<<<<<<< HEAD

=======
>>>>>>> b08f2c3 (feat: add CI/CD pipeline setup)
Update your `package.json` scripts and the CI workflow:

```json
{
  "scripts": {
    "test:e2e": "playwright test",
    "test:integration": "jest --config jest.integration.config.js"
  }
}
```

### Changing Deployment Platform
<<<<<<< HEAD

Replace the Vercel deployment steps with your preferred platform:

#### Netlify Example:

=======
Replace the Vercel deployment steps with your preferred platform:

#### Netlify Example:
>>>>>>> b08f2c3 (feat: add CI/CD pipeline setup)
```yaml
- name: Deploy to Netlify
  uses: nwtgck/actions-netlify@v2.0
  with:
    publish-dir: './dist'
    production-branch: main
    github-token: ${{ secrets.GITHUB_TOKEN }}
<<<<<<< HEAD
    deploy-message: 'Deploy from GitHub Actions'
=======
    deploy-message: "Deploy from GitHub Actions"
>>>>>>> b08f2c3 (feat: add CI/CD pipeline setup)
  env:
    NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
    NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

#### AWS S3 Example:
<<<<<<< HEAD

=======
>>>>>>> b08f2c3 (feat: add CI/CD pipeline setup)
```yaml
- name: Deploy to S3
  uses: aws-actions/configure-aws-credentials@v4
  with:
    aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
    aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    aws-region: us-east-1

- name: Sync to S3
  run: aws s3 sync dist/ s3://your-bucket-name --delete
```

### Environment-Specific Configurations
<<<<<<< HEAD

=======
>>>>>>> b08f2c3 (feat: add CI/CD pipeline setup)
Add environment variables for different deployment stages:

```yaml
- name: Build with environment
  run: npm run build
  env:
    VITE_API_URL: ${{ secrets.API_URL }}
    VITE_ENVIRONMENT: production
```

## Monitoring and Troubleshooting

### Viewing Workflow Runs
<<<<<<< HEAD

=======
>>>>>>> b08f2c3 (feat: add CI/CD pipeline setup)
1. Go to your GitHub repository
2. Click on the "Actions" tab
3. Select the workflow you want to view
4. Click on a specific run to see detailed logs

### Common Issues

#### Build Failures
<<<<<<< HEAD

=======
>>>>>>> b08f2c3 (feat: add CI/CD pipeline setup)
- Check TypeScript errors: `npm run build`
- Check linting errors: `npm run lint`
- Check test failures: `npm test`

#### Deployment Failures
<<<<<<< HEAD

=======
>>>>>>> b08f2c3 (feat: add CI/CD pipeline setup)
- Verify secrets are correctly set
- Check deployment platform configuration
- Review build artifacts

#### Performance Issues
<<<<<<< HEAD

=======
>>>>>>> b08f2c3 (feat: add CI/CD pipeline setup)
- Enable dependency caching (already configured)
- Consider using matrix builds for parallel testing
- Optimize build steps

## Best Practices

1. **Branch Protection**: Enable branch protection rules for main branch
2. **Required Checks**: Make CI checks required before merging
3. **Review Process**: Require code reviews for pull requests
4. **Security**: Regularly update dependencies and scan for vulnerabilities
5. **Monitoring**: Set up alerts for failed deployments

## Next Steps

1. Push your code to GitHub to trigger the first workflow run
2. Monitor the Actions tab to ensure everything works correctly
3. Set up branch protection rules
4. Configure deployment secrets if using external hosting
5. Customize the workflows based on your specific needs

<<<<<<< HEAD
For more information, see the [GitHub Actions documentation](https://docs.github.com/en/actions).
=======
For more information, see the [GitHub Actions documentation](https://docs.github.com/en/actions). 
>>>>>>> b08f2c3 (feat: add CI/CD pipeline setup)
