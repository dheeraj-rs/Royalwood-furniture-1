import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Royal Executive Desk',
    description: 'Handcrafted executive desk made from premium walnut wood with gold-plated accents. Features multiple drawers and built-in cable management.',
    price: 2499,
    originalPrice: 2999,
    images: [
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg',
    ],
    category: 'Office',
    subcategory: 'Desks',
    materials: ['Walnut Wood', 'Gold-plated Hardware', 'Leather'],
    dimensions: { width: 180, height: 75, depth: 80 },
    weight: 65,
    colors: ['Walnut', 'Mahogany'],
    inStock: true,
    stockQuantity: 15,
    rating: 4.8,
    reviewCount: 24,
    features: ['Built-in Cable Management', 'Soft-close Drawers', 'Leather Writing Pad'],
    care: ['Dust regularly with soft cloth', 'Use wood conditioner monthly'],
    warranty: '5 Years Limited',
    featured: true,
    sale: true,
  },
  {
    id: '2',
    name: 'Luxe Velvet Armchair',
    description: 'Elegant armchair upholstered in premium velvet fabric with gold-finished metal legs. Perfect for reading corners or accent seating.',
    price: 899,
    images: [
      'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg',
      'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg',
    ],
    category: 'Living Room',
    subcategory: 'Chairs',
    materials: ['Velvet Fabric', 'Gold-finished Metal', 'High-density Foam'],
    dimensions: { width: 80, height: 85, depth: 75 },
    weight: 28,
    colors: ['Emerald Green', 'Navy Blue', 'Burgundy'],
    inStock: true,
    stockQuantity: 8,
    rating: 4.6,
    reviewCount: 18,
    features: ['360° Swivel Base', 'High-density Cushioning', 'Stain-resistant Fabric'],
    care: ['Professional cleaning recommended', 'Vacuum regularly'],
    warranty: '2 Years Limited',
    featured: true,
    sale: false,
  },
  {
    id: '3',
    name: 'Crystal Glass Dining Table',
    description: 'Stunning dining table featuring a crystal-clear glass top supported by sculptural gold-plated legs. Seats up to 8 people comfortably.',
    price: 1899,
    images: [
      'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg',
      'https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg',
    ],
    category: 'Dining Room',
    subcategory: 'Tables',
    materials: ['Tempered Glass', 'Gold-plated Steel', 'Marble Base'],
    dimensions: { width: 200, height: 75, depth: 100 },
    weight: 95,
    colors: ['Clear Glass', 'Smoked Glass'],
    inStock: true,
    stockQuantity: 5,
    rating: 4.9,
    reviewCount: 12,
    features: ['Tempered Safety Glass', 'Scratch-resistant Surface', 'Easy to Clean'],
    care: ['Clean with glass cleaner', 'Avoid harsh chemicals'],
    warranty: '3 Years Limited',
    featured: true,
    sale: false,
  },
  {
    id: '4',
    name: 'Heritage Bookshelf',
    description: 'Majestic bookshelf crafted from reclaimed oak wood with brass accents. Features adjustable shelves and hidden LED lighting.',
    price: 1299,
    originalPrice: 1599,
    images: [
      'https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg',
      'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg',
    ],
    category: 'Office',
    subcategory: 'Storage',
    materials: ['Reclaimed Oak', 'Brass Hardware', 'LED Lighting'],
    dimensions: { width: 120, height: 200, depth: 35 },
    weight: 78,
    colors: ['Natural Oak', 'Dark Walnut'],
    inStock: true,
    stockQuantity: 12,
    rating: 4.7,
    reviewCount: 31,
    features: ['Adjustable Shelves', 'Hidden LED Lighting', 'Cable Management'],
    care: ['Dust weekly', 'Polish every 3 months'],
    warranty: '5 Years Limited',
    featured: false,
    sale: true,
  },
  {
    id: '5',
    name: 'Midnight Black Dresser',
    description: 'Sleek dresser with a high-gloss black finish and gold hardware. Features six spacious drawers with soft-close mechanisms.',
    price: 1099,
    images: [
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg',
    ],
    category: 'Bedroom',
    subcategory: 'Storage',
    materials: ['MDF with High-gloss Finish', 'Gold Hardware', 'Soft-close Slides'],
    dimensions: { width: 150, height: 80, depth: 45 },
    weight: 55,
    colors: ['Midnight Black', 'Pearl White'],
    inStock: true,
    stockQuantity: 20,
    rating: 4.5,
    reviewCount: 45,
    features: ['Soft-close Drawers', 'Anti-tip Safety', 'Scratch-resistant Surface'],
    care: ['Clean with microfiber cloth', 'Avoid abrasive cleaners'],
    warranty: '3 Years Limited',
    featured: false,
    sale: false,
  },
  {
    id: '6',
    name: 'Golden Era Coffee Table',
    description: 'Art deco-inspired coffee table with a marble top and geometric gold-plated base. A statement piece for modern living rooms.',
    price: 799,
    images: [
      'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg',
      'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg',
    ],
    category: 'Living Room',
    subcategory: 'Tables',
    materials: ['Carrara Marble', 'Gold-plated Steel', 'Rubber Feet'],
    dimensions: { width: 120, height: 45, depth: 60 },
    weight: 42,
    colors: ['White Marble', 'Black Marble'],
    inStock: true,
    stockQuantity: 15,
    rating: 4.8,
    reviewCount: 22,
    features: ['Natural Marble Variations', 'Geometric Design', 'Non-slip Feet'],
    care: ['Seal marble annually', 'Clean spills immediately'],
    warranty: '2 Years Limited',
    featured: true,
    sale: false,
  },
];

export const getProducts = (): Product[] => {
  return products;
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
};