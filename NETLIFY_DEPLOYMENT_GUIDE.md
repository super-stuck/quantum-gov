# Netlify Deployment Guide for QuantumGov Revolution

## 🚀 Quick Setup

Your repository is now configured with the necessary files for Netlify deployment:

- ✅ `netlify.toml` - Build configuration
- ✅ `.nvmrc` - Node.js version specification  
- ✅ `next.config.js` - Optimized for static export
- ✅ `package.json` - Build scripts configured

## 📋 Netlify Build Settings

When setting up on Netlify, use these settings:

### Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `out`
- **Node.js version**: `18` (automatically detected from `.nvmrc`)

### Environment Variables (Optional)
```
NODE_ENV=production
```

## 🔧 Common Issues & Solutions

### Issue 1: "Build failed" or "Command not found"
**Solution**: Ensure Netlify is using the correct Node.js version
- Check that `.nvmrc` file contains `18`
- In Netlify dashboard → Site Settings → Environment Variables → add `NODE_VERSION = 18`

### Issue 2: "Module not found" or dependency errors
**Solution**: Clear cache and rebuild
```bash
# In Netlify deployment log, look for:
npm ci --cache /opt/build/cache/node_modules/.npm --prefer-offline --no-audit
```

### Issue 3: Static assets not loading correctly
**Solution**: Already fixed in `next.config.js`
- Removed `assetPrefix` that can cause issues on Netlify
- Added `trailingSlash: true` for proper routing
- Set `images.unoptimized: true` for static export

### Issue 4: 404 errors on page routes
**Solution**: Next.js App Router is configured for static export
- All routes are pre-rendered as static files
- No additional redirects needed for basic routing

### Issue 5: Large build size or timeout
**Current bundle size**: ~87KB (very optimized!)
- If timeout occurs, increase build timeout in Netlify settings
- Consider enabling build caching for faster subsequent builds

## 📱 Manual Deployment Steps

If automatic deployment fails:

1. **Build locally**:
   ```bash
   npm install
   npm run build
   ```

2. **Upload `out` folder**:
   - Compress the `out` directory
   - Drag and drop to Netlify dashboard
   - Or use Netlify CLI: `netlify deploy --prod --dir=out`

## 🔍 Debugging Build Issues

### Check build logs for these patterns:

**✅ Success indicators:**
```
✓ Compiled successfully
✓ Generating static pages (38/38)
✓ Finalizing page optimization
```

**❌ Common error patterns:**
- `Module not found` → Check dependencies
- `Command failed` → Check Node.js version
- `ENOENT` → Check file paths
- `Out of memory` → Increase memory limit

### Enable detailed logging:
Add to `netlify.toml`:
```toml
[build.environment]
  NODE_ENV = "production"
  DEBUG = "*"
```

## 📦 Project Structure Verification

Ensure these key files exist:
```
├── netlify.toml          ✓ Build configuration
├── .nvmrc               ✓ Node.js version
├── package.json         ✓ Dependencies & scripts
├── next.config.js       ✓ Next.js configuration
├── src/app/            ✓ App router pages
├── public/             ✓ Static assets
└── out/                ✓ Build output (after npm run build)
```

## 🚦 Deployment Checklist

- [ ] Repository connected to Netlify
- [ ] Build command: `npm run build`
- [ ] Publish directory: `out`
- [ ] Node.js version: 18
- [ ] Environment variables set (if needed)
- [ ] All files committed to repository
- [ ] Build succeeds locally

## 🆘 Emergency Deployment

If all else fails, use the static HTML fallback:

1. Copy `index.html` from project root to `out/index.html`
2. Ensure all assets in `public/` are accessible
3. Deploy the `out` directory manually
4. This provides basic functionality while troubleshooting

## 📞 Support Resources

- **Netlify Documentation**: https://docs.netlify.com/
- **Next.js Static Export**: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- **Build Troubleshooting**: Check Netlify build logs for specific error messages

## 🔄 Continuous Deployment

Once configured, Netlify will automatically deploy when you push to the main branch:
- Webhook triggers on GitHub push
- Automatic build using `netlify.toml` settings
- Deploy to production URL
- Build status notifications

---

**Status**: Ready for deployment! 🎉

All configuration files are in place and the build has been tested locally. The project should deploy successfully on Netlify with these optimized settings.