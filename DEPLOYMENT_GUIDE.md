# 🚀 Vercel Deployment Guide

This guide will help you deploy your portfolio with Spotify music player to Vercel.

## Prerequisites

1. **GitHub Account**: Your code should be in a GitHub repository
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **Spotify App**: Already configured (from previous setup)

## Step 1: Prepare Your Repository

### 1.1 Create Environment File
Create a `.env.local` file in your project root:
```bash
# .env.local
VITE_SPOTIFY_CLIENT_ID=your_actual_spotify_client_id_here
```

### 1.2 Update .gitignore
Make sure `.env.local` is in your `.gitignore`:
```bash
# .gitignore
.env.local
.env.*.local
```

### 1.3 Commit Your Changes
```bash
git add .
git commit -m "Add Spotify player and deployment config"
git push origin main
```

## Step 2: Deploy to Vercel

### 2.1 Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Import your GitHub repository

### 2.2 Configure Project Settings
- **Framework Preset**: Vite
- **Root Directory**: `./` (leave empty)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `dist` (auto-detected)

### 2.3 Add Environment Variables
1. In the Vercel dashboard, go to your project
2. Navigate to "Settings" → "Environment Variables"
3. Add the following variable:
   - **Name**: `VITE_SPOTIFY_CLIENT_ID`
   - **Value**: Your Spotify Client ID
   - **Environment**: Production, Preview, Development

### 2.4 Deploy
1. Click "Deploy"
2. Wait for the build to complete
3. Your site will be live at `https://your-project-name.vercel.app`

## Step 3: Configure Spotify App

### 3.1 Update Redirect URIs
1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Select your app
3. Go to "Edit Settings"
4. Add your Vercel domain to Redirect URIs:
   - `https://your-project-name.vercel.app`
   - `https://your-custom-domain.com` (if you have one)

### 3.2 Test the Player
1. Visit your deployed site
2. Look for the Spotify player button (bottom-right)
3. Click to connect and test functionality

## Step 4: Custom Domain (Optional)

### 4.1 Add Custom Domain
1. In Vercel dashboard, go to "Settings" → "Domains"
2. Add your custom domain
3. Follow DNS configuration instructions

### 4.2 Update Spotify Redirect URI
1. Add your custom domain to Spotify app redirect URIs
2. Update environment variable if needed

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check build logs in Vercel dashboard
   - Ensure all dependencies are in `package.json`
   - Verify environment variables are set

2. **Spotify Player Not Working**
   - Check browser console for errors
   - Verify redirect URI matches exactly
   - Ensure environment variable is set correctly

3. **Environment Variables Not Working**
   - Redeploy after adding environment variables
   - Check variable names match exactly
   - Ensure variables are set for all environments

4. **404 Errors on Refresh**
   - The `vercel.json` file handles this automatically
   - If issues persist, check the rewrites configuration

### Build Optimization

Your `vercel.json` includes:
- ✅ **SPA Routing**: Handles client-side routing
- ✅ **Security Headers**: Basic security protection
- ✅ **Build Optimization**: Proper build settings

## Post-Deployment Checklist

- [ ] Site loads without errors
- [ ] Spotify player appears and connects
- [ ] All sections display correctly
- [ ] Responsive design works on mobile
- [ ] Custom domain configured (if applicable)
- [ ] Environment variables set correctly

## Monitoring

### Vercel Analytics
1. Enable Vercel Analytics in dashboard
2. Monitor performance and errors
3. Track user interactions

### Spotify API Limits
- Monitor Spotify API usage
- Check for rate limiting issues
- Review authentication errors

## Security Best Practices

1. **Environment Variables**: Never commit sensitive data
2. **HTTPS**: Vercel provides SSL automatically
3. **Security Headers**: Already configured in `vercel.json`
4. **Regular Updates**: Keep dependencies updated

## Support

If you encounter issues:
1. Check Vercel build logs
2. Review browser console errors
3. Verify Spotify app configuration
4. Test locally with `npm run dev`

## Next Steps

After successful deployment:
1. Share your portfolio URL
2. Monitor performance
3. Consider adding analytics
4. Set up custom domain
5. Configure automatic deployments from GitHub 