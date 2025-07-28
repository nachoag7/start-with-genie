import { z } from 'zod'

// Email validation schema
export const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address').min(1).max(255),
})

// Contact form validation schema
export const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email address').min(1).max(255),
  subject: z.string().min(1, 'Subject is required').max(200, 'Subject is too long'),
  message: z.string().min(1, 'Message is required').max(2000, 'Message is too long'),
})

// Lead submission validation schema
export const leadSchema = z.object({
  email: z.string().email('Please enter a valid email address').min(1).max(255),
  sourcePage: z.string().min(1, 'Source page is required').max(500),
  type: z.string().optional().default('ein_guide'),
})

// User registration validation schema
export const userRegistrationSchema = z.object({
  fullName: z.string().min(1, 'Full name is required').max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email address').min(1).max(255),
  password: z.string().min(8, 'Password must be at least 8 characters').max(100),
  state: z.string().min(1, 'State is required').max(50),
  businessName: z.string().min(1, 'Business name is required').max(200, 'Business name is too long'),
  businessAddress: z.string().min(1, 'Business address is required').max(500, 'Address is too long'),
})

// Login validation schema
export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address').min(1).max(255),
  password: z.string().min(1, 'Password is required').max(100),
})

// Payment intent validation schema
export const paymentIntentSchema = z.object({
  amount: z.number().min(1).max(1000000), // $0.01 to $10,000
  currency: z.string().default('usd'),
  metadata: z.record(z.string()).optional(),
})

// Sanitize HTML content to prevent XSS
export function sanitizeHtml(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

// Validate and sanitize user input
export function validateAndSanitize<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; errors: string[] } {
  try {
    const validatedData = schema.parse(data)
    return { success: true, data: validatedData }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        errors: error.errors.map(err => err.message) 
      }
    }
    return { success: false, errors: ['Validation failed'] }
  }
}

// Rate limiting validation
export const rateLimitSchema = z.object({
  windowMs: z.number().min(1000).max(3600000), // 1 second to 1 hour
  maxRequests: z.number().min(1).max(10000),
  message: z.string().optional(),
})

// API response validation
export const apiResponseSchema = z.object({
  success: z.boolean(),
  data: z.unknown().optional(),
  error: z.string().optional(),
  message: z.string().optional(),
})

export type EmailData = z.infer<typeof emailSchema>
export type ContactData = z.infer<typeof contactSchema>
export type LeadData = z.infer<typeof leadSchema>
export type UserRegistrationData = z.infer<typeof userRegistrationSchema>
export type LoginData = z.infer<typeof loginSchema>
export type PaymentIntentData = z.infer<typeof paymentIntentSchema> 