# Email Popup Backend Setup Guide

## Overview
The email popup backend handles lead capture for the EIN guide and other email campaigns. It includes database storage, email sending, and comprehensive error handling.

## Prerequisites

1. **Supabase Project**: You need a Supabase project with the following environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`

2. **Resend Account**: For email sending, you need a Resend account with:
   - `RESEND_API_KEY`

## Database Setup

### Option 1: Using Supabase Dashboard
1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Run the SQL from `supabase-leads-table.sql`

### Option 2: Using the Setup Script
```bash
npm run setup-leads-table
```

## Environment Variables

Create a `.env.local` file with:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Email Configuration (Resend)
RESEND_API_KEY=your_resend_api_key_here
```

## API Endpoints

### Main Lead Submission
- **POST** `/api/leads`
- Submits email and sends EIN guide
- Includes validation and rate limiting

### Test Endpoint
- **GET** `/api/leads/test`
- Verifies API functionality and database connection

### Admin Endpoint
- **GET** `/api/leads/admin`
- Views recent leads (for debugging)

## Features

### ✅ Implemented
- [x] Email validation with regex
- [x] Rate limiting (prevents duplicate submissions)
- [x] Comprehensive error handling
- [x] Email sending via Resend
- [x] Database storage in Supabase
- [x] Professional email template
- [x] Logging for debugging
- [x] TypeScript support
- [x] Test endpoints

### 🔧 Backend Components

1. **API Routes**:
   - `app/api/leads/route.ts` - Main submission endpoint
   - `app/api/leads/test/route.ts` - Test endpoint
   - `app/api/leads/admin/route.ts` - Admin endpoint

2. **Database**:
   - `leads` table in Supabase
   - Indexes for performance
   - UUID primary keys

3. **Email Service**:
   - Resend integration
   - HTML email template
   - PDF guide attachment

4. **Frontend Integration**:
   - `components/EINGuidePopup.tsx` - Popup component
   - Error handling and user feedback
   - Success animations

## Testing

### Test the API
```bash
# Test endpoint
curl http://localhost:3000/api/leads/test

# Submit a test lead
curl -X POST http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","sourcePage":"/test","type":"ein_guide"}'
```

### Test the Frontend
1. Start the development server: `npm run dev`
2. Navigate to any page with the EIN popup
3. Submit an email and verify:
   - Success message appears
   - Email is received
   - Lead is saved in database

## Troubleshooting

### Common Issues

1. **Database Connection Failed**
   - Verify Supabase environment variables
   - Check if leads table exists
   - Run the setup script

2. **Email Not Sending**
   - Verify Resend API key
   - Check Resend dashboard for errors
   - Verify email template

3. **Rate Limiting Issues**
   - Check if email already exists in database
   - Clear test data if needed

### Debug Commands
```bash
# Check database connection
curl http://localhost:3000/api/leads/test

# View recent leads
curl http://localhost:3000/api/leads/admin

# Check environment variables
echo $NEXT_PUBLIC_SUPABASE_URL
echo $RESEND_API_KEY
```

## Security Features

- Email validation
- Rate limiting
- Error handling
- Logging for monitoring
- No sensitive data exposure

## Performance

- Database indexes for fast queries
- Efficient email validation
- Minimal API response time
- Optimized email template

## Next Steps

1. Set up monitoring and analytics
2. Add email templates for other campaigns
3. Implement A/B testing
4. Add analytics tracking
5. Set up automated backups 