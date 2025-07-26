# Leads API Backend Documentation

## Overview
The leads API handles email submissions for the EIN guide popup and other lead capture forms.

## Endpoints

### POST /api/leads
Submits a new lead and sends the EIN guide email.

**Request Body:**
```json
{
  "email": "user@example.com",
  "sourcePage": "/how-to-get-an-ein",
  "type": "ein_guide"
}
```

**Response:**
- `200`: Success
- `400`: Invalid email format or missing required fields
- `409`: Email already submitted
- `500`: Server error

### GET /api/leads/test
Test endpoint to verify API functionality.

**Response:**
```json
{
  "status": "ok",
  "message": "Leads API is working correctly",
  "database": "connected",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### GET /api/leads/admin
Admin endpoint to view recent leads (for debugging).

**Response:**
```json
{
  "leads": [...],
  "count": 25,
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Database Schema

The `leads` table has the following structure:
- `id`: UUID (primary key)
- `email`: TEXT (required)
- `source_page`: TEXT (required)
- `type`: TEXT (default: 'ein_guide')
- `created_at`: TIMESTAMP
- `updated_at`: TIMESTAMP

## Features

1. **Email Validation**: Validates email format using regex
2. **Rate Limiting**: Prevents duplicate submissions from the same email
3. **Error Handling**: Comprehensive error handling with specific error messages
4. **Email Sending**: Sends EIN guide via Resend email service
5. **Logging**: Detailed logging for debugging

## Environment Variables Required

- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL
- `SUPABASE_SERVICE_ROLE_KEY`: Supabase service role key
- `RESEND_API_KEY`: Resend API key for email sending

## Email Template

The EIN guide email includes:
- Professional HTML template
- Step-by-step guide information
- Download link to PDF guide
- Call-to-action for Start With Genie services 