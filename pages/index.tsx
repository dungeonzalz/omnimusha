import Link from "next/link";
import HeroSection from "../components/HeroSection";

export default function Landing() {
  return (
    <div>
      <HeroSection />
      <div className="max-w-2xl mx-auto text-center py-12">
        <h2 className="text-3xl font-bold mb-4">Oligarchy Economie</h2>
        <p className="mb-6">
          A decentralized financial platform integrating blockchain, digital assets, automated dividends, and a real-time investment dashboard.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/register" className="bg-secondary text-primary px-6 py-2 rounded font-bold">Register</Link>
          <Link href="/login" className="bg-primary text-secondary px-6 py-2 rounded font-bold border border-secondary">Login</Link>
        </div>
        <div className="mt-8">
          <a href="/docs/whitepaper.pdf" className="underline text-primary font-semibold">Download Whitepaper</a>
        </div>
      </div>
    </div>
  );
}