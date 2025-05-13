"use client"

import { useEffect } from "react"

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Optionally log the error to an external service
    console.error("App Error:", error)
  }, [error])

  return (
    <div className="p-4 text-center">
      <h2 className="text-red-600 font-semibold">Something went wrong:</h2>
      <p className="mb-4">{error.message}</p>
      <button
        onClick={reset}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Try Again
      </button>
    </div>
  )
}