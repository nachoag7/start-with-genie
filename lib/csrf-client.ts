// Client-side CSRF token utility
export function getCSRFToken(): string | null {
  if (typeof document === 'undefined') return null; // SSR check
  
  return document.cookie
    .split('; ')
    .find(row => row.startsWith('csrf-token='))
    ?.split('=')[1] || null;
}

// Enhanced fetch with CSRF token
export async function fetchWithCSRF(url: string, options: RequestInit = {}) {
  const csrfToken = getCSRFToken();
  
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (csrfToken) {
    headers['x-csrf-token'] = csrfToken;
  }

  return fetch(url, {
    ...options,
    headers,
  });
}

// Helper for form submissions
export function getFormDataWithCSRF(formData: FormData): FormData {
  const csrfToken = getCSRFToken();
  if (csrfToken) {
    formData.append('csrf-token', csrfToken);
  }
  return formData;
} 