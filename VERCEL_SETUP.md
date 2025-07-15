# Vercel Environment Variables Setup

## 🔧 Fix the "supabaseKey is required" Error

The error occurs because the `SUPABASE_SERVICE_ROLE_KEY` environment variable is missing in your Vercel deployment.

### Step 1: Get Your Supabase Keys

1. Go to your **Supabase Dashboard**
2. Click on your project
3. Go to **Settings** → **API**
4. Copy these values:
   - **Project URL** (for `NEXT_PUBLIC_SUPABASE_URL`)
   - **anon public** key (for `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
   - **service_role** key (for `SUPABASE_SERVICE_ROLE_KEY`)

### Step 2: Set Environment Variables in Vercel

1. Go to your **Vercel Dashboard**
2. Click on your project
3. Go to **Settings** → **Environment Variables**
4. Add these environment variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

### Step 3: Redeploy

1. After adding the environment variables, go to **Deployments**
2. Click **"Redeploy"** on your latest deployment
3. Or push a new commit to trigger a new deployment

### Step 4: Verify

The contact form should now work properly on your deployed site!

## 🔍 Troubleshooting

If you still get errors:

1. **Check environment variables** are set correctly in Vercel
2. **Verify Supabase keys** are correct and not expired
3. **Check database tables** are created (run the SQL script)
4. **Test locally** first with `npm run dev`

## 📝 Local Development

For local development, create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

This will ensure your local development environment matches production. 