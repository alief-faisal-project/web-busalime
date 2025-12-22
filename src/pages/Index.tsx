import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import FeatureBar from '@/components/FeatureBar';
import AboutSection from '@/components/AboutSection';
import ProductSection from '@/components/ProductSection';
import EcommerceSection from '@/components/EcommerceSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroBanner />
        <FeatureBar />
        <AboutSection />
        <ProductSection />
        <EcommerceSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
