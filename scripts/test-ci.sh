#!/bin/bash

# Local CI/CD testing script
# This script runs the same checks that the GitHub Actions workflow will run

set -e  # Exit on any error

echo "🧪 Running local CI/CD tests..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

echo "📦 Installing dependencies..."
npm ci

echo "🔍 Running TypeScript type check..."
npm run build

echo "🧹 Running ESLint..."
npm run lint

echo "🧪 Running tests..."
npm test

echo "📊 Running tests with coverage..."
npm run test:coverage

echo "✅ All CI checks passed! You can now push to GitHub."
echo "🚀 The CI/CD pipeline will run automatically on push."
