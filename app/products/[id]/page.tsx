import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductDetail from '@/components/products/ProductDetail';

export const metadata = {
  title: 'Product Details - Royalwood Furniture',
  description: 'View detailed product information, specifications, and customer reviews.',
};

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <ProductDetail productId={params.id} />
      </main>
      <Footer />
    </div>
  );
}