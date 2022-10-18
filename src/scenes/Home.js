import HommeBanner from "../assets/img/Banniere-accueil.png";

function Home() {
  return (
    <section>
        <div>
           <img src={HommeBanner} alt="Bannière Accueil" />   
           <div class="centerBannerText">Chez vous, partout et ailleurs</div>
        </div>
        
    </section>
  );
}

export default Home;
