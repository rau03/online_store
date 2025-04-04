#!/bin/bash

# Deploy to AWS Amplify
echo "🚀 Deploying to AWS Amplify..."

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI is not installed. Please install it first."
    echo "Visit: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"
    exit 1
fi

# Check if Amplify CLI is installed
if ! command -v amplify &> /dev/null; then
    echo "❌ Amplify CLI is not installed. Installing..."
    npm install -g @aws-amplify/cli
fi

# Check if user is logged in to AWS
if ! aws sts get-caller-identity &> /dev/null; then
    echo "❌ Not logged in to AWS. Please run 'amplify configure' first."
    exit 1
fi

# Initialize Amplify if not already initialized
if [ ! -d "amplify" ]; then
    echo "📝 Initializing Amplify..."
    amplify init
else
    echo "✅ Amplify already initialized."
fi

# Push changes to Amplify
echo "📤 Pushing changes to Amplify..."
amplify push

echo "✅ Deployment complete! Your app should be live soon."
echo "🔍 Check the Amplify Console for deployment status."

# Install AWS CLI (if not already installed)
# For macOS:
brew install awscli

# Install Amplify CLI
npm install -g @aws-amplify/cli

amplify configure 