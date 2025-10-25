import { useEffect, useState } from 'react';
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react';

export default function Navbar({ onSearch }) {
  const [open, setOpen] = useState(false);
  const [localQuery, setLocalQuery] = useState('');

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
      <li><a href="#products" className="text-sm font-medium text-neutral-700 hover:text-rose-600">Shop</a></li>
      <li><a href="#about" className="text-sm font-medium text-neutral-700 hover:text-rose-600">About</a></li>
      <li><a href="#contact" className="text-sm font-medium text-neutral-700 hover:text-rose-600">Contact</a></li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-neutral-100"
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-rose-500" />
              <span className="font-semibold tracking-tight">SareeAura</span>
            </a>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); onSearch?.(localQuery); }}
            className="hidden md:flex items-center gap-2 flex-1 max-w-lg mx-4"
            role="search"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
              <input
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
                placeholder="Search sarees, colors, categories..."
                className="w-full rounded-md border border-neutral-200 bg-white pl-9 pr-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
            </div>
            <button type="submit" className="inline-flex items-center rounded-md bg-rose-600 px-3 py-2 text-sm font-medium text-white hover:bg-rose-700">
              Search
            </button>
          </form>

          <div className="flex items-center gap-2">
            <button className="hidden md:inline-flex items-center gap-2 rounded-md border border-neutral-200 px-3 py-2 text-sm hover:bg-neutral-50">
              <User size={18} />
              <span>Sign in</span>
            </button>
            <button className="relative inline-flex items-center rounded-md border border-neutral-200 p-2 hover:bg-neutral-50" aria-label="Cart">
              <ShoppingCart size={18} />
              <span className="absolute -top-1 -right-1 h-5 min-w-[20px] rounded-full bg-rose-600 px-1.5 text-[10px] font-semibold text-white grid place-items-center">0</span>
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="md:hidden border-t border-neutral-100 py-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                <input
                  value={localQuery}
                  onChange={(e) => setLocalQuery(e.target.value)}
                  placeholder="Search sarees..."
                  className="w-full rounded-md border border-neutral-200 bg-white pl-9 pr-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
              </div>
              <button
                onClick={() => { onSearch?.(localQuery); setOpen(false); }}
                className="inline-flex items-center rounded-md bg-rose-600 px-3 py-2 text-sm font-medium text-white hover:bg-rose-700"
              >
                Go
              </button>
            </div>
            <NavLinks />
          </div>
        )}
      </div>
    </header>
  );
}
