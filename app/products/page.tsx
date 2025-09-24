import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCatalog from '@/components/products/ProductCatalog';

export const metadata = {
  title: 'Shop All Products - Royalwood Furniture',
  description: 'Browse our complete collection of premium furniture pieces. Filter by category, price, and style to find your perfect piece.',
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <ProductCatalog />
      </main>
      <Footer />
    </div>
  );
}