// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

export const metadata: Metadata = {
  title: "Cloudcrate",
  icons: {
    icon: "/favicon.svg",
  },
};

// This part must be a Client Component
function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}

// Export the ClientLayout as default
export default ClientLayout;