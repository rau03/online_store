#!/bin/bash

echo "🔍 Diagnosing AWS Amplify deployment issues..."

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
  echo "❌ AWS CLI is not installed. Please install it first:"
  echo "   brew install awscli"
  exit 1
fi

# Check if Amplify CLI is installed
if ! command -v amplify &> /dev/null; then
  echo "❌ Amplify CLI is not installed. Installing..."
  npm install -g @aws-amplify/cli
fi

# Check if user is logged in to AWS
echo "🔑 Checking AWS login status..."
if ! aws sts get-caller-identity &> /dev/null; then
  echo "❌ Not logged in to AWS. Please run 'amplify configure' first."
  exit 1
fi

# Check if Amplify is initialized
if [ ! -d "amplify" ]; then
  echo "❌ Amplify is not initialized. Please run 'amplify init' first."
  exit 1
fi

# Check for environment variables
echo "🔍 Checking environment variables..."
if [ ! -f ".env" ]; then
  echo "❌ .env file not found. Creating a template..."
  echo "STRIPE_SECRET_KEY=your_stripe_secret_key" > .env
  echo "NEXT_PUBLIC_BASE_URL=https://your-app.amplifyapp.com" >> .env
  echo "⚠️ Please update the .env file with your actual values."
fi

# Check for build issues
echo "🔍 Checking for build issues..."
if ! npm run build &> /dev/null; then
  echo "❌ Build failed. Please check the error messages above."
  exit 1
fi

# Push changes to Amplify
echo "🚀 Pushing changes to Amplify..."
amplify push

echo "✅ Diagnosis complete. If you're still having issues, please check the AWS Amplify Console for more details." 