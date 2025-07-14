import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary-600">404</h1>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">Page not found</h2>
          <p className="mt-2 text-gray-600">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-6">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="space-y-3">
              <Link href="/">
                <Button className="w-full">
                  Go back home
                </Button>
              </Link>
              <Link href="/onboarding">
                <Button variant="outline" className="w-full">
                  Get started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 