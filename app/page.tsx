import Image from "next/image";
import hero from "@/public/images/hero.jpeg";
import { siteDescription, siteName, siteUrl } from "./site";
import { SpeedInsights } from "@vercel/speed-insights/next";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: siteName,
  description: siteDescription,
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  image: `${siteUrl}/opengraph-image.jpg`,
  slogan: "Grace in every thread.",
};

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col items-center overflow-hidden px-4 py-10 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#fdf0e6_0%,_transparent_60%),radial-gradient(ellipse_at_bottom_left,_#f8dfe3_0%,_transparent_55%)]"
      />
      <div className="relative w-full max-w-5xl sm:w-[min(100%,85svh)]">
        <Image
          src={hero}
          alt="Alankrutha Vastra — Sarees, Women's Wear, Girls' Fashion, Boutique and Accessories"
          preload
          placeholder="blur"
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="h-auto w-full rounded-2xl shadow-[0_20px_60px_-25px_rgba(138,21,56,0.35)]"
        />
      </div>
      <section className="relative mt-10 flex max-w-2xl flex-col items-center text-center sm:mt-8">
        <div className="flex items-center gap-4 text-gold">
          <span className="h-px w-12 bg-gold/60 sm:w-20" />
          <h1 className="text-xs font-medium uppercase tracking-[0.4em]">
            Opening Soon
          </h1>
          <span className="h-px w-12 bg-gold/60 sm:w-20" />
        </div>

        <p className="mt-6 text-base leading-7 text-foreground/75 sm:text-lg sm:leading-8">
          We are weaving something beautiful for you — handpicked sarees,
          elegant women&apos;s wear, girls&apos; fashion, boutique collections
          and accessories, all in one place.
        </p>

        <p className="mt-8 font-serif text-xl italic text-gold sm:text-2xl">
          Grace in every thread.
        </p>
      </section>
      <footer className="relative mt-10 text-xs tracking-wider text-foreground/50">
        © Alankrutha Vastra
      </footer>
      <SpeedInsights />
    </main>
  );
}
