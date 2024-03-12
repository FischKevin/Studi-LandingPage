import Navbar from '../base/Navbar';
import Header from '../base/Header';
import Description from '../landingPage/Description';
import Planning from '../landingPage/Planning';
import AccessInfo from '../landingPage/AccessInfo';
import News from '../landingPage/News';
import FAQ from '../landingPage/FAQ';
import Contact from '../landingPage/Contact';
import Footer from '../base/Footer';
import CookieConsent from '../CookieConsent';

function LandingPage() {
  return (
    <>
      <Navbar />
      <Header />
      <Description />
      <Planning />
      <AccessInfo />
      <News />
      <FAQ />
      <Contact />
      <Footer />
      <CookieConsent />
    </>
  );
}

export default LandingPage;
