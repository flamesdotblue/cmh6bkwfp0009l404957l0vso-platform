export default function Footer() {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = data.get('email');
    if (email) {
      alert(`Thanks for subscribing, ${email}!`);
      form.reset();
    }
  };

  return (
    <footer className="mt-16 border-t border-neutral-100 bg-neutral-50/60" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-rose-500" />
            <span className="font-semibold tracking-tight">SareeAura</span>
          </div>
          <p className="mt-3 text-sm text-neutral-600 max-w-md">
            Curating exquisite sarees from the finest looms across India. Ethically sourced, quality guaranteed, and shipped with care.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-neutral-900">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-neutral-600">
            <li><a href="#products" className="hover:text-neutral-900">Shop</a></li>
            <li><a href="#about" className="hover:text-neutral-900">About</a></li>
            <li><a href="#contact" className="hover:text-neutral-900">Contact</a></li>
            <li><a href="#" className="hover:text-neutral-900">Shipping & Returns</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-neutral-900">Get updates</h4>
          <p className="mt-3 text-sm text-neutral-600">Subscribe for new arrivals and offers.</p>
          <form onSubmit={onSubmit} className="mt-3 flex items-center gap-2">
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
            <button className="inline-flex items-center rounded-md bg-rose-600 px-3 py-2 text-sm font-medium text-white hover:bg-rose-700">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} SareeAura. All rights reserved.
      </div>
    </footer>
  );
}
