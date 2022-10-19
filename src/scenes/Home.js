import HomeBanner from "../assets/img/Banniere-accueil.png";
import Gallery from "./Gallery";

function Home() {
  return (
    <section class='sectionBanner'>
        <div>
           <img src={HomeBanner} alt="Bannière Accueil" />   
           <div class="centerBannerText">Chez vous, partout et ailleurs</div>
        </div>
        <section>

        </section>
        <Gallery />
    </section>
  );
}

export default Home;
