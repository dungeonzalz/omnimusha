import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="text-center mt-8">
        <a href="/register" className="px-4 py-2 bg-primary text-secondary rounded">Register</a>
        <a href="/login" className="ml-4 px-4 py-2 bg-primary text-secondary rounded">Login</a>
      </div>
    </div>
  );
}