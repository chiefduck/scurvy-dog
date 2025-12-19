# The Scurvy Dog Tattoo - Setup Instructions

This document explains how to configure the website for deployment on Netlify.

## Overview

The site has been configured to:
- Use local images from the `public` folder instead of remote CDN images
- Handle contact form submissions via Resend email service
- Work seamlessly with Netlify Functions for serverless form processing

## Required Environment Variables

You need to set the following environment variables in your Netlify dashboard:

### 1. RESEND_API_KEY
- **Required**: Yes
- **Description**: Your Resend API key for sending emails
- **How to get it**:
  1. Sign up at [https://resend.com](https://resend.com)
  2. Navigate to API Keys in your dashboard
  3. Create a new API key
  4. Copy the key (it will only be shown once)

### 2. RESEND_FROM_EMAIL
- **Required**: Yes
- **Description**: The email address that will appear as the sender
- **Format**: Must be a verified domain in Resend (e.g., `noreply@yourdomain.com`)
- **Default fallback**: `onboarding@resend.dev` (for testing only)
- **How to set it up**:
  1. In Resend dashboard, go to Domains
  2. Add and verify your domain
  3. Use an email address from that domain

### 3. RESEND_TO_EMAIL
- **Required**: Yes
- **Description**: The email address where form submissions will be sent
- **Format**: Any valid email address (e.g., `info@scurvydogtattoo.com`)
- **Default fallback**: `info@example.com` (not functional)

## Setting Environment Variables in Netlify

1. Go to your Netlify site dashboard
2. Navigate to **Site settings** → **Environment variables**
3. Click **Add a variable**
4. Add each of the three variables listed above with their respective values
5. Save your changes

Example:
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=contact@yourdomain.com
RESEND_TO_EMAIL=info@scurvydogtattoo.com
```

## Local Development

If you want to test the form locally, you'll need to:

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Install function dependencies:
   ```bash
   cd netlify/functions
   npm install
   cd ../..
   ```

3. Create a `.env` file in the root directory:
   ```env
   RESEND_API_KEY=your_api_key_here
   RESEND_FROM_EMAIL=contact@yourdomain.com
   RESEND_TO_EMAIL=info@scurvydogtattoo.com
   ```

4. Run the development server:
   ```bash
   netlify dev
   ```

## Files Modified/Created

### Created Files:
- `netlify/functions/submit-contact.js` - Serverless function to handle form submissions
- `netlify/functions/package.json` - Dependencies for the Netlify function
- `public/form-handler.js` - Client-side form submission handler
- `netlify.toml` - Netlify configuration file

### Modified Files:
- `contact-us.html` - Added form handler script
- All HTML files - Replaced remote image URLs with local paths

## Image Updates

All images have been updated to use local files from the `public/` folder:
- Logo: `public/logo10.png`
- Background: `public/thescurvydogtattooprojectllc.jpg`

## Deployment

1. Push your code to your Git repository
2. Connect your repository to Netlify
3. Set the environment variables as described above
4. Deploy!

The site will automatically build and deploy. The contact form will send emails via Resend when submitted.

## Troubleshooting

### Form submissions not working:
1. Check that all environment variables are set correctly in Netlify
2. Verify your domain is properly configured in Resend
3. Check the Netlify Functions logs for errors

### Images not displaying:
- Ensure the `public` folder is deployed with your site
- Check browser console for 404 errors
- Verify image paths are correct

## Support

For issues with:
- **Resend**: Visit [https://resend.com/docs](https://resend.com/docs)
- **Netlify**: Visit [https://docs.netlify.com](https://docs.netlify.com)
