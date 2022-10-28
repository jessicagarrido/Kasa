import HomeBanner from "../assets/img/Banniere-accueil.png";
import Gallery from "./Gallery";
import Footer from "../components/Footer"

export default function Home() {
  return (
    <section className='sectionBanner'>
        <div>
           <img src={HomeBanner} alt="Bannière Accueil" />   
           <div className="centerBannerText">Chez vous, partout et ailleurs</div>
        </div>
        <section>

        </section>
        <Gallery />
        <Footer />
    </section>
    
  );
}

