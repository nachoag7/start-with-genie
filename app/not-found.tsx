import React from 'react'
import Link from 'next/link'
import { Button } from '../components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-gray-800">404</h1>
          <h2 className="mt-4 text-2xl font-semibold text-gray-800">Page not found</h2>
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
            <div className="space-y-4">
              <Link href="/">
                <Button className="w-full hover:scale-105 bg-[#1E40AF] text-white border border-[#1E40AF] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Go back home
                </Button>
              </Link>
              <Link href="/checkout">
                <Button
                  variant="ghost"
                  className="w-full border border-[#1E40AF] text-[#1E40AF] bg-white hover:bg-[#EFF6FF] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-150"
                  style={{ boxShadow: 'none' }}
                >
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
 

 
 
