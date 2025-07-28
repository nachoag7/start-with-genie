# Security Documentation

## Overview
This document outlines the security measures implemented in the Start With Genie application to protect user data and prevent common web vulnerabilities.

## Security Measures Implemented

### 1. Environment Variable Security
- ✅ Removed debug logging of sensitive environment variables
- ✅ All secrets stored in environment variables (not in code)
- ✅ Added ADMIN_API_TOKEN for admin endpoint protection

### 2. Security Headers
The following security headers are configured in `next.config.js`:
- **X-Frame-Options**: DENY (prevents clickjacking)
- **X-Content-Type-Options**: nosniff (prevents MIME type sniffing)
- **Referrer-Policy**: origin-when-cross-origin (controls referrer information)
- **X-XSS-Protection**: 1; mode=block (enables XSS protection)
- **Strict-Transport-Security**: max-age=31536000; includeSubDomains (enforces HTTPS)
- **Content-Security-Policy**: Comprehensive CSP to prevent XSS and injection attacks

### 3. Rate Limiting
Implemented comprehensive rate limiting for all API endpoints:
- **Authentication endpoints**: 5 attempts per 15 minutes
- **General API endpoints**: 100 requests per minute
- **Lead submission**: 3 submissions per hour
- **Admin endpoints**: Protected with authentication

### 4. Input Validation
All user inputs are validated using Zod schemas:
- Email format validation
- String length limits
- Required field validation
- XSS prevention through HTML sanitization

### 5. Error Handling
- Sanitized error messages (no sensitive information exposed)
- Proper HTTP status codes
- Logging of errors for debugging (server-side only)

### 6. Admin Endpoint Protection
- All admin endpoints require ADMIN_API_TOKEN
- Unauthorized access returns 401 status
- Token-based authentication for sensitive operations

## Security Best Practices

### For Developers
1. **Never log sensitive information**
   - Avoid console.log of API keys, passwords, or user data
   - Use environment variables for all secrets

2. **Validate all inputs**
   - Use the validation schemas in `lib/validation.ts`
   - Sanitize HTML content before storage

3. **Rate limiting**
   - Apply rate limiting to all public endpoints
   - Use appropriate limits for different endpoint types

4. **Error handling**
   - Never expose internal errors to clients
   - Log errors server-side for debugging

### For Deployment
1. **Environment Variables**
   - Set all required environment variables
   - Use strong, unique values for ADMIN_API_TOKEN
   - Rotate secrets regularly

2. **HTTPS**
   - Ensure HTTPS is enabled in production
   - Configure proper SSL certificates

3. **Database Security**
   - Enable Row Level Security (RLS) in Supabase
   - Use service role keys only for admin operations

## Security Checklist

### Before Deployment
- [ ] All environment variables configured
- [ ] ADMIN_API_TOKEN set with strong value
- [ ] HTTPS enabled
- [ ] Database RLS policies configured
- [ ] No sensitive data in logs
- [ ] Rate limiting enabled
- [ ] Input validation implemented

### Regular Maintenance
- [ ] Rotate API keys quarterly
- [ ] Review access logs monthly
- [ ] Update dependencies regularly
- [ ] Monitor for suspicious activity
- [ ] Backup data regularly

## Incident Response

### If a security breach is suspected:
1. **Immediate Actions**
   - Rotate all API keys and tokens
   - Review access logs
   - Check for unauthorized data access

2. **Investigation**
   - Identify the source of the breach
   - Assess the scope of data exposure
   - Document findings

3. **Recovery**
   - Implement additional security measures
   - Notify affected users if necessary
   - Update security documentation

## Contact
For security concerns or questions, contact the development team at info@startwithgenie.com

## Updates
This security documentation should be reviewed and updated regularly as new security measures are implemented. 