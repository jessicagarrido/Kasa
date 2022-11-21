import { useParams } from "react-router-dom";
import Apropos from "../assets/img/Background.png";
import Collapse from "../components/Collapse";
import Tags from "../components/Tags";
import GalleryData from "../assets/data/galleryData.json";
import RedStar from '../assets/img/redStar.svg'
import GreyStar from '../assets/img/greyStar.svg'
// import Carrousel from "../components/Carrousel";

export default function PageGalleryAbout() {

  let { id } = useParams();
  let item = GalleryData.filter((item) => item.id === id)[0];


  // Rate
  let scoreRate = [];
  let fullStar = true;
  for (let index = 0; index < 5; index++) {
    if(index ===parseInt(item?.rating)) {
      fullStar = false;
    }
    if(fullStar === true) {
      scoreRate.push(<img key={index} className="star" src={RedStar} alt={`${item?.rating}/5`}/>)
    } else {
      scoreRate.push(<img key={index} className="star" src={GreyStar} alt={`${item?.rating}/5`}/>)
    }
  }

  // Equipments

  const material = item?.equipments.map((equipment, index) => {
    return <li key={index}>{equipment}</li>
})


  return (
    <section className="about-container">
      <div>
        {/* <Carrousel /> */}
        <img className="carrousel" src={Apropos} alt="galleries d'images" />

        <div className="details-container">
          <div className="container-text">
            <div className="title-subtitle">
              <h1>{item.title}</h1>
              <p>{item.location}</p>
              <div className="tags-rating">
                {item.tags.map((tag) => (
                  <Tags content={tag} key={tag} />
                ))}
              </div>
            </div>

            <div className="profile-stars">
              <div className="profile">
                <p>{item.host.name}</p>
                <img src={item.host.picture} alt="Photo de l'hôte" />
              </div>

              <div className="stars">
                {scoreRate}
              </div>
            </div>
          </div>

          <div className="CollapseContainer2">
            <Collapse title="Description">{item.description}</Collapse>
            <Collapse title="Equipements">
              {material}
            </Collapse>
          </div>
        </div>
      </div>
    </section>
  );
}
