import { Header } from '@/home/components/Header';
import { HeroSection } from '@/home/components/HeroSection';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'>
      <Header />

      <HeroSection />
    </div>
  );
}
