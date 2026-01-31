import { AnimacaoHome } from '@/components/AnimacaoHome';
import { ContatoHome } from '@/components/ContatoHome';
import HeroSection from '@/components/HeroSection';
import IntegrantesHome from '@/components/IntegrantesHome';
import PropostasHome from '@/components/PropostasHome';

export const Home = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">

            <div className="relative z-10 w-full">
                <HeroSection />
            </div>

            <div className="w-full">
                <IntegrantesHome />
            </div>

            <div className="w-full">
                <PropostasHome />
            </div>

            <div className="w-full">
                <ContatoHome />
            </div>

            <AnimacaoHome />
        </div>
    );
};

export default Home;