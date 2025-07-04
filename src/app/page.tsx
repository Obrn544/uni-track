import { Header } from '@/home/components/Header';
import { HeroSection } from '@/home/components/HeroSection';
import { FeaturesSection } from '@/home/components/FeaturesSection';
import { Footer } from '@/core/shared/components/Footer';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'>
      <Header />

      <HeroSection />

      <FeaturesSection />

      <div className='py-4'>
        <Footer />
      </div>
    </div>
  );
}
