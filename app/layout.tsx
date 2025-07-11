// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from './AuthProvider';

export const metadata: Metadata = {
  title: "Cloudcrate",
  icons: {
    icon: "/favicon.svg", // Change this to your new logo path
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Moved SessionProvider to a separate client component */}
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}