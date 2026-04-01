import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import Features from "../components/home/Features";
import CallToAction from "../components/home/CallToAction";
import WhoItsFor from "../components/home/WhoItsFor";
import KeyFeatures from "../components/home/KeyFeatures";
import WhyChoose from "../components/home/WhyChoose";
import ReviewsCarousel from "../components/home/ReviewsCarousel";
import FAQ from "../components/home/FAQ";
import TikTokSection from "../components/home/TikTokSection";
import FadeInSection from "../components/common/FadeInSection";

const Home = () => {
  return (
    <>
      <FadeInSection>
        <Hero />
      </FadeInSection>

      <FadeInSection>
        <HowItWorks />
      </FadeInSection>

      <FadeInSection>
        <WhoItsFor />
      </FadeInSection>

      <FadeInSection>
        <KeyFeatures />
      </FadeInSection>

      <FadeInSection>
        <WhyChoose />
      </FadeInSection>

      <FadeInSection>
        <ReviewsCarousel />
      </FadeInSection>

      <FadeInSection>
        <TikTokSection />
      </FadeInSection>

      <FadeInSection>
        <FAQ />
      </FadeInSection>

      <FadeInSection>
        <Features />
      </FadeInSection>

      <FadeInSection>
        <CallToAction />
      </FadeInSection>
    </>
  );
};

export default Home;
