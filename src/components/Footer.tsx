import { brand, footerLinks, socialLinks } from "../data/siteContent";

export function Footer() {
  return (
    <footer className="border-t border-olive/12 bg-ivory px-5 py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <p className="font-display text-3xl font-semibold text-charcoal">
            {brand.name}
          </p>
          <p className="mt-4 max-w-sm text-[15px] leading-7 text-ink/68">
            {brand.tagline}
          </p>
          <p className="mt-5 text-sm font-bold text-olive">{brand.instagram}</p>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-terracotta">
            Quick links
          </p>
          <div className="mt-4 space-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="block text-sm font-bold text-ink/68 transition hover:text-charcoal"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-terracotta">
            Contact
          </p>
          <div className="mt-4 space-y-3 text-sm font-bold leading-6 text-ink/68">
            <p>{brand.phone}</p>
            <p>{brand.email}</p>
            <p>{brand.address}</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-terracotta">
            Hours and social
          </p>
          <p className="mt-4 text-sm font-bold leading-6 text-ink/68">
            {brand.hours}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full border border-olive/14 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-olive transition hover:border-terracotta/30 hover:text-terracotta"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-olive/12 pt-6 text-xs font-bold text-ink/52 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Savory Table Catering. Template content is replaceable.</p>
        <p>Service areas: New York, Brooklyn, Chicago, London, Manchester.</p>
      </div>
    </footer>
  );
}
