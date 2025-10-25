import { Star, ShoppingCart } from 'lucide-react';

function formatPrice(INR) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(INR);
}

function Rating({ value = 0 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rated ${value} out of 5`}>
      {[0,1,2,3,4].map((i) => (
        <Star key={i} size={14} className={i < value ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300'} />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="group rounded-xl border border-neutral-200 overflow-hidden bg-white hover:shadow-md transition-shadow">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
        <div className="absolute left-2 top-2 inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-neutral-700 ring-1 ring-neutral-200">
          {product.category}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-sm font-medium text-neutral-900 line-clamp-2">{product.name}</h3>
            <div className="mt-1"><Rating value={product.rating} /></div>
          </div>
          <div className="text-sm font-semibold text-neutral-900 whitespace-nowrap">{formatPrice(product.price)}</div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-neutral-500">Color: {product.color}</span>
          <button className="inline-flex items-center gap-1 rounded-md bg-neutral-900 px-3 py-2 text-xs font-semibold text-white hover:bg-neutral-800">
            <ShoppingCart size={14} /> Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid({ products = [] }) {
  if (!products.length) {
    return (
      <div className="rounded-xl border border-dashed border-neutral-300 p-12 text-center">
        <p className="text-neutral-700 font-medium">No sarees found</p>
        <p className="text-neutral-500 text-sm mt-1">Try a different category or search term.</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
