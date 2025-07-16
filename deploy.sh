#!/bin/bash

# 🚀 Vercel Deployment Script
# This script helps you prepare and deploy your portfolio to Vercel

echo "🎵 Portfolio Deployment Script"
echo "================================"

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "⚠️  Warning: .env.local file not found!"
    echo "Please create .env.local with your Spotify Client ID:"
    echo "VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id_here"
    echo ""
    read -p "Press Enter to continue anyway..."
fi

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not found!"
    echo "Please initialize git and push to GitHub first:"
    echo "git init"
    echo "git add ."
    echo "git commit -m 'Initial commit'"
    echo "git remote add origin your-github-repo-url"
    echo "git push -u origin main"
    exit 1
fi

# Check if changes are committed
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 Uncommitted changes detected!"
    echo "Please commit your changes first:"
    echo "git add ."
    echo "git commit -m 'Prepare for deployment'"
    echo "git push"
    exit 1
fi

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi

echo ""
echo "🎉 Ready for deployment!"
echo "================================"
echo ""
echo "Next steps:"
echo "1. Go to https://vercel.com"
echo "2. Sign in with your GitHub account"
echo "3. Click 'New Project'"
echo "4. Import your GitHub repository"
echo "5. Add environment variable: VITE_SPOTIFY_CLIENT_ID"
echo "6. Deploy!"
echo ""
echo "📚 See DEPLOYMENT_GUIDE.md for detailed instructions"
echo "" 