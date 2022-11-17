import GalleryData from "../assets/data/galleryData.json";
import GalleryDataJs from "../components/GalleryData";

export default function Gallery() {
  return (
    <section className="gallery-contener">
      {GalleryData.map((item) => {
        return (
          <GalleryDataJs
            key="item.id"
            title={item.title}
            id={item.id}
            cover={item.cover}
          />
        );
      })}
    </section>
  );
}
