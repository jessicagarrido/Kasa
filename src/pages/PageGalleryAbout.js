import { useParams } from "react-router-dom";
import Apropos from "../assets/img/Background.png";
import Collapse from "../components/Collapse";
import GalleryData from "../assets/data/galleryData.json";
// import { isHtmlElement } from "react-router-dom/dist/dom";

export default function PageGalleryAbout() {
  let { id } = useParams();

  let item = GalleryData.filter((item) => item.id === id)[0];

  return (
    <section className="about-contener">
      <div>
        <img className="carrousel" src={Apropos} alt="galleries d'images" />

        <div className="details-contener">
          <div className="contener-text">
            <div className="title-subtitle">
              <h1>{item.title}</h1>
              <p>{item.location}</p>
            </div>

            <div className="profile">
              <p>{item.host.name}</p>
              <img src={item.host.picture} alt="Photo de l'hôte" />
            </div>
          </div>
          <div className="tags-rating">
            <div className="tags">
              <div className="tag">{item.tags}</div>
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
          <div className="CollapseContainer2">
            <Collapse title="Description">{item.description}</Collapse>
            <Collapse title="Equipements">
              <ul>
                <li>{item.equipments}</li>
              </ul>
            </Collapse>
          </div>
        </div>
      </div>
    </section>
  );
}
