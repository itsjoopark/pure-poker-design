import AsciiBackground from '@/components/AsciiBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AsciiBackground />
      <Navbar />
      <HeroSection />
    </main>
  );
}
