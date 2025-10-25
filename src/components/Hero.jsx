export default function Hero({ onShopNow }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,#ffe4e6_0%,#ffffff_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-700 ring-1 ring-inset ring-rose-200">Festive Edit 2025</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
            Handpicked Sarees for Every Celebration
          </h1>
          <p className="mt-4 text-neutral-600 text-base md:text-lg">
            Discover timeless Kanjeevarams, regal Banarasis, breezy chiffons, and artisanal cottons crafted by master weavers across India. Free shipping on orders above ₹999.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <button onClick={onShopNow} className="inline-flex items-center rounded-md bg-rose-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-rose-700">
              Shop now
            </button>
            <a href="#about" className="inline-flex items-center rounded-md border border-neutral-200 px-5 py-3 text-sm font-semibold hover:bg-neutral-50">
              Learn more
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-neutral-200">
            <img
              src="https://images.unsplash.com/photo-1540638349517-8b5b527b5d0c?q=80&w=1600&auto=format&fit=crop"
              alt="Woman wearing a traditional saree"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?q=80&w=800&auto=format&fit=crop"
              alt="Saree detail"
              className="w-40 h-40 rounded-xl object-cover shadow-lg ring-1 ring-neutral-200"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
