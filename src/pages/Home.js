import HomeBanner from "../assets/img/Banniere-accueil.png";
import Banner from "../components/Banner";
import Gallery from "./Gallery";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <section className="section-banner">
      <Banner src={HomeBanner} content="Chez vous, partout et ailleurs" />
      <Gallery />
      <Footer />
    </section>
    
  );
}
