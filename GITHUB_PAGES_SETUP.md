# GitHub Pages Setup Guide

This guide will help you enable GitHub Pages hosting for The Monarch website.

## Prerequisites
- Repository must be pushed to GitHub
- You need admin access to the repository settings

## Step-by-Step Setup

### 1. Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub: `https://github.com/Miva-Ctrl-Alt-Elite/Miva-Ctrl-Alt-Elite`
2. Click on **Settings** (⚙️ gear icon at the top)
3. In the left sidebar, scroll down and click on **Pages** under "Code and automation"
4. Under **"Build and deployment"**:
   - **Source**: Select **"GitHub Actions"** from the dropdown
   - (No need to select a branch when using GitHub Actions)
5. Click **Save** (if applicable)

### 2. Merge the Pull Request

1. Go to the **Pull Requests** tab
2. Find and open the PR titled "Add GitHub Pages deployment configuration"
3. Review the changes:
   - `.github/workflows/deploy.yml` - Automated deployment workflow
   - `.nojekyll` - Prevents Jekyll processing
   - `README.md` - Updated with GitHub Pages information
   - `index.html` - Fixed path separator for cross-platform compatibility
4. Click **Merge pull request**
5. Click **Confirm merge**

### 3. Automatic Deployment

Once the PR is merged to the `main` branch:
- The GitHub Actions workflow will automatically trigger
- You can monitor the deployment:
  1. Go to the **Actions** tab in your repository
  2. Look for the "Deploy to GitHub Pages" workflow run
  3. Click on it to see the deployment progress

### 4. Access Your Live Website

After the workflow completes successfully (usually takes 1-2 minutes):
- Your website will be live at: **https://miva-ctrl-alt-elite.github.io/Miva-Ctrl-Alt-Elite/**
- You can also find this URL in the **Settings → Pages** section under "Your site is live at"

## Manual Deployment (Optional)

If you need to manually trigger a deployment:
1. Go to the **Actions** tab
2. Select **"Deploy to GitHub Pages"** workflow from the left sidebar
3. Click the **"Run workflow"** button on the right
4. Select the `main` branch
5. Click **"Run workflow"**

## Troubleshooting

### Workflow Doesn't Run
- Make sure the PR is merged to the `main` branch (the workflow only runs on main)
- Check that GitHub Actions are enabled in your repository settings

### 404 Error on Website
- Wait a few minutes after deployment completes
- Clear your browser cache
- Make sure the deployment workflow completed successfully in the Actions tab

### Permission Errors
- Ensure the repository has the correct permissions set in Settings → Actions → General
- Under "Workflow permissions", select "Read and write permissions"

## What Was Added

### GitHub Actions Workflow (`.github/workflows/deploy.yml`)
This workflow automatically:
- Triggers on every push to the `main` branch
- Can also be manually triggered
- Configures GitHub Pages
- Uploads the website files
- Deploys to GitHub Pages

### .nojekyll File
This empty file tells GitHub Pages not to use Jekyll processing, which could interfere with your static HTML/CSS/JS files.

### Updated Documentation
The README now includes:
- Link to the live demo
- GitHub Pages deployment instructions
- Manual deployment guide

## Future Updates

Every time you push changes to the `main` branch:
- The workflow will automatically run
- Your site will be updated within 1-2 minutes
- No manual intervention needed!

## Support

If you encounter any issues:
1. Check the Actions tab for error messages
2. Review the workflow logs for detailed information
3. Ensure all file paths use forward slashes (/) not backslashes (\)
