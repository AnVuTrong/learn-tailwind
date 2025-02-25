import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setHeroVisibility, setActiveFeature } from '../../store/slices/landingPageSlice';
import { Hero } from './sections/hero.component';
import { Features } from './sections/features.component';
import { Testimonials } from './sections/testimonials.component';
import { CTASection } from './sections/cta-section.component';

export const LandingPage = () => {
  const dispatch = useDispatch();
  const { isHeroVisible, activeFeatureIndex } = useSelector(
    (state: RootState) => state.landingPage
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      dispatch(setHeroVisibility(scrollPosition < 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero isVisible={isHeroVisible} />
      <Features activeIndex={activeFeatureIndex} onFeatureClick={(index) => dispatch(setActiveFeature(index))} />
      <Testimonials />
      <CTASection />
    </div>
  );
};
