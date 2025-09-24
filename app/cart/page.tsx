import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartPage from '@/components/cart/CartPage';

export const metadata = {
  title: 'Shopping Cart - Royalwood Furniture',
  description: 'Review your selected items and proceed to checkout.',
};

export default function Cart() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <CartPage />
      </main>
      <Footer />
    </div>
  );
}