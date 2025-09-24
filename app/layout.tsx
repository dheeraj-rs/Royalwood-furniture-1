import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CartProvider } from '@/context/CartContext';
import { AuthProvider } from '@/context/AuthContext';
import { WishlistProvider } from '@/context/WishlistContext';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Royalwood - Premium Luxury Furniture',
  description: 'Discover exquisite handcrafted furniture pieces that blend timeless elegance with contemporary design. Premium quality, sustainable materials.',
  keywords: 'luxury furniture, handcrafted furniture, premium home decor, sustainable furniture, modern furniture',
  authors: [{ name: 'Royalwood Furniture' }],
  openGraph: {
    title: 'Royalwood - Premium Luxury Furniture',
    description: 'Discover exquisite handcrafted furniture pieces that blend timeless elegance with contemporary design.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              {children}
              <Toaster position="top-right" />
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}