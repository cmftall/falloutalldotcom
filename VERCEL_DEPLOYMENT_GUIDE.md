# 🚀 Complete Vercel Deployment Guide

## 📋 Prerequisites Checklist

✅ **Website builds successfully** (154 kB first load)  
✅ **Repository is clean** (`cmftall/falloutalldotcom`)  
✅ **Main branch is default**  
✅ **CI/CD workflows ready**  
✅ **Static export working** (`out/` directory generated)  

---

## 🎯 Step-by-Step Deployment

### **Step 1: Create Vercel Account**

1. **Go to Vercel**: https://vercel.com
2. **Sign up/Login** with your GitHub account
3. **Verify email** if required

### **Step 2: Import Your Repository**

1. **Click "New Project"** on Vercel dashboard
2. **Import Git Repository**:
   - Find `cmftall/falloutalldotcom`
   - Click **"Import"**

### **Step 3: Configure Project Settings**

**⚠️ IMPORTANT**: Configure these settings exactly:

```
Project Name: falloutalldotcom (or your preferred name)
Framework Preset: Next.js
Root Directory: website
Build Command: npm run build
Output Directory: out
Install Command: npm install
```

**Screenshot of settings:**
```
┌─────────────────────────────────────────┐
│ Project Name: falloutalldotcom          │
│ Framework: Next.js                      │
│ Root Directory: website                 │
│ Build Command: npm run build            │
│ Output Directory: out                   │
│ Install Command: npm install            │
└─────────────────────────────────────────┘
```

### **Step 4: Environment Variables (Optional)**

Add these in **Project Settings → Environment Variables**:

```env
# Google Analytics (Optional)
NEXT_PUBLIC_GA_TRACKING_ID=your_ga_id

# Plausible Analytics (Optional)  
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your_domain

# Google Search Console (Optional)
GOOGLE_VERIFICATION_CODE=your_verification_code
```

### **Step 5: Deploy**

1. **Click "Deploy"**
2. **Wait for build** (2-3 minutes)
3. **Get your live URL**: `https://falloutalldotcom.vercel.app`

---

## 🔧 Alternative: Vercel CLI Deployment

If you prefer command line:

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from website directory
cd website
vercel --prod

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - Project name: falloutalldotcom
# - Directory: ./
# - Override settings? N
```

---

## 🌐 Custom Domain Setup (Optional)

### **Step 1: Add Domain in Vercel**

1. **Go to Project Settings → Domains**
2. **Add your domain**: `falloutall.com`
3. **Configure DNS** as instructed

### **Step 2: DNS Configuration**

Add these DNS records:

```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

---

## 📊 Post-Deployment Verification

### **Check These URLs:**

✅ **Homepage**: `https://your-project.vercel.app`  
✅ **Sitemap**: `https://your-project.vercel.app/sitemap.xml`  
✅ **404 Page**: `https://your-project.vercel.app/nonexistent`  
✅ **Performance**: Run Lighthouse audit  

### **Expected Results:**

- **Lighthouse Score**: 95+ across all metrics
- **Load Time**: < 2 seconds
- **All Pages**: Working correctly
- **Responsive**: Mobile and desktop
- **SEO**: Meta tags and structured data

---

## 🔄 Automatic Deployments

Once set up, Vercel will automatically:

✅ **Deploy on every push** to `main` branch  
✅ **Run GitHub Actions** CI/CD pipeline  
✅ **Update live site** in 2-3 minutes  
✅ **Send notifications** on success/failure  

---

## 🛠️ Troubleshooting

### **Build Fails?**

1. **Check build logs** in Vercel dashboard
2. **Verify settings**: Root directory = `website`
3. **Test locally**: `cd website && npm run build`

### **404 Errors?**

1. **Check Output Directory**: Must be `out`
2. **Verify static export**: `out/` directory exists
3. **Check Next.js config**: `output: 'export'` enabled

### **Performance Issues?**

1. **Enable Vercel Analytics** in project settings
2. **Check Core Web Vitals** in Vercel dashboard
3. **Optimize images** if needed

---

## 🎉 Success!

Your website will be live at:
**`https://falloutalldotcom.vercel.app`**

### **Next Steps:**

1. **Test all functionality**
2. **Set up custom domain** (optional)
3. **Configure analytics** (optional)
4. **Share your live website!**

---

## 📞 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **GitHub Repository**: https://github.com/cmftall/falloutalldotcom
- **Build Logs**: Check Vercel dashboard for detailed logs

**Your production-ready website is ready to deploy!** 🚀
