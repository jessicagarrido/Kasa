import Apropos from "../assets/img/Background.png";

export default function PageGalleryAbout() {
  return (
    <section className="about-contener">
      <div>
        <img className="carrousel" src={Apropos} alt="galleries d'images" />

        <div className="details-contener">
          <div className="contener-test">
             <div className="title-subtitle">
              <h1>Titre de la location</h1>
              <p>Location</p>
            </div>
            
            <div className="profile">
              <p>Prénom de la personne</p>
              <img
                src="https://cdn.icon-icons.com/icons2/1560/PNG/512/3430588-avatar-fashion-female-hair-profile-round-woman_107557.png"
                alt=""
              />
            </div>
            
          </div>
          <div className="tags-rating">
            <div className="tags">
              <span className="tag">charmant</span>
              <span className="tag">lumineux</span>
              <span className="tag">romantique</span>
            </div>

            

            <div className="stars">
              <div className="stars">
                <i class="fa-sharp fa-solid fa-star new-class"></i>
                <i class="fa-sharp fa-solid fa-star new-class"></i>
                <i class="fa-sharp fa-solid fa-star new-class"></i>
                <i class="fa-sharp fa-solid fa-star new-class"></i>
                <i class="fa-sharp fa-solid fa-star new-class"></i>
              </div>
            </div>
          </div>
          <div className="details-locations">
            <div className="details">
              <h1>Description</h1>
              <p>
                Vous serez à 50m du canal Saint-martin où vous pourrez
                pique-niquer l'été et à côté de nombreux bars et restaurants. Au
                cœur de Paris avec 5 lignes de métro et de nombreux bus.
                Logement parfait pour les voyageurs en solo et les voyageurs
                d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes
                à pied).
              </p>
            </div>
            <div className="details">
              <h1>Equipements</h1>
              <ul>
                <li>Climatisation</li>
                <li>Wi-fi</li>
                <li>Cuisine</li>
                <li>Espace de travail</li>
                <li>Fer à repasser</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
