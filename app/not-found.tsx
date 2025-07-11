"use client";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <SessionProvider>
      <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8 pb-20 sm:p-20 font-sans flex  justify-center overflow-hidden">
        {/* Background Floating Circles */}
        <div className="absolute inset-0 z-0">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`absolute bg-white/10 rounded-full blur-3xl animate-float${
                i + 1
              }`}
              style={{
                width: `${80 + i * 40}px`,
                height: `${80 + i * 40}px`,
                top: `${i * 20 + 10}%`,
                left: `${i % 2 === 0 ? i * 15 : 100 - i * 15}%`,
              }}
            />
          ))}
        </div>

        {/* Card */}
        <div className="relative z-10 w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/30">
          {/* Header */}
          <div className="bg-indigo-900/90 px-6 py-5 text-center">
            <Image
              src="/favicon.svg"
              alt="CloudCrate Logo"
              width={150}
              height={40}
              className="mx-auto mb-2"
            />
            <h1 className="text-xl font-semibold text-white tracking-wide">
              CloudCrate
            </h1>
          </div>

          {/* Content */}
          <div className="p-8 text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-100 shadow-inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              404 - Page Not Found
            </h2>
            <p className="text-gray-600 mb-6">
              Sorry, the page you’re looking for doesn’t exist or has been moved.
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg shadow-md transition duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </SessionProvider>
  );
}
