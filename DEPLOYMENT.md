# Deploying to AWS Amplify

This guide will walk you through deploying your Next.js application to AWS Amplify.

## Prerequisites

- An AWS account
- Your code pushed to a Git repository (GitHub, GitLab, or BitBucket)
- AWS Amplify CLI installed (optional, for local testing)

## Deployment Steps

### 1. Connect to AWS Amplify

1. Go to the [AWS Amplify Console](https://console.aws.amazon.com/amplify/home)
2. Click "New app" > "Host web app"
3. Choose your Git provider and connect your repository

### 2. Configure Build Settings

AWS Amplify will automatically detect that this is a Next.js application and suggest the following build settings:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - "**/*"
  cache:
    paths:
      - node_modules/**/*
```

### 3. Environment Variables

Add the following environment variables in the Amplify Console:

- `STRIPE_SECRET_KEY`: Your Stripe secret key
- `NEXT_PUBLIC_BASE_URL`: Your production URL (e.g., https://your-app.amplifyapp.com)

### 4. Deploy

1. Review the build settings and click "Save and deploy"
2. Wait for the build and deployment to complete
3. Once deployed, you'll receive a URL for your application

## Custom Domain (Optional)

1. In the Amplify Console, go to your app
2. Click "Domain Management" in the left sidebar
3. Click "Add Domain"
4. Follow the instructions to set up your custom domain

## Troubleshooting

If you encounter any issues during deployment:

1. Check the build logs in the Amplify Console
2. Ensure all environment variables are correctly set
3. Verify that your Next.js application builds successfully locally

## Additional Resources

- [AWS Amplify Documentation](https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
