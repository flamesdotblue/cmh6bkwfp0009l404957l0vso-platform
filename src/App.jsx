import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

const productsData = [
  {
    id: 'p1',
    name: 'Kanjeevaram Silk Saree - Ruby Red',
    price: 12999,
    category: 'Kanjeevaram',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1542060748-10c28b62716a?q=80&w=1600&auto=format&fit=crop',
    color: 'Red',
  },
  {
    id: 'p2',
    name: 'Banarasi Brocade Saree - Emerald',
    price: 10999,
    category: 'Banarasi',
    rating: 4,
    image:
      'https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1600&auto=format&fit=crop',
    color: 'Green',
  },
  {
    id: 'p3',
    name: 'Chiffon Floral Saree - Blush Pink',
    price: 3499,
    category: 'Chiffon',
    rating: 4,
    image:
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1600&auto=format&fit=crop',
    color: 'Pink',
  },
  {
    id: 'p4',
    name: 'Cotton Handloom Saree - Indigo',
    price: 2499,
    category: 'Cotton',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop',
    color: 'Blue',
  },
  {
    id: 'p5',
    name: 'Banarasi Silk Saree - Gold Zari',
    price: 14999,
    category: 'Banarasi',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?q=80&w=1600&auto=format&fit=crop',
    color: 'Gold',
  },
  {
    id: 'p6',
    name: 'Kanjeevaram Silk Saree - Royal Purple',
    price: 13999,
    category: 'Kanjeevaram',
    rating: 4,
    image:
      'https://images.unsplash.com/photo-1604908176997-43168666f1a7?q=80&w=1600&auto=format&fit=crop',
    color: 'Purple',
  },
  {
    id: 'p7',
    name: 'Chiffon Ombre Saree - Sunset',
    price: 3999,
    category: 'Chiffon',
    rating: 4,
    image:
      'https://images.unsplash.com/photo-1556909114-8f162f66d7cc?q=80&w=1600&auto=format&fit=crop',
    color: 'Orange',
  },
  {
    id: 'p8',
    name: 'Cotton Block Print Saree - Marigold',
    price: 2199,
    category: 'Cotton',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1610030469983-98e1615d6d2b?q=80&w=1600&auto=format&fit=crop',
    color: 'Yellow',
  },
];

const categories = ['All', 'Kanjeevaram', 'Banarasi', 'Chiffon', 'Cotton'];

export default function App() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return productsData.filter((p) => {
      const matchesCategory = category === 'All' || p.category === category;
      const matchesQuery = !q || [p.name, p.category, p.color]
        .join(' ')
        .toLowerCase()
        .includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">
      <Navbar onSearch={setQuery} />
      <main className="flex-1">
        <Hero onShopNow={() => {
          const el = document.getElementById('products');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }} />
        <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl font-semibold tracking-tight">Featured Sarees</h2>
            <div className="flex items-center gap-3">
              <label htmlFor="category" className="text-sm text-neutral-600">Category</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
          <ProductGrid products={filtered} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
