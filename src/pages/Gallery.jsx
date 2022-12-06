import GalleryData from "../assets/data/galleryData.json";
import GalleryDataJsx from "../components/GalleryData";

export default function Gallery() {
  return (
    <section className="gallery-container">
      {GalleryData.map((item) => {
        return (
          <GalleryDataJsx
            key={item.id}
            title={item.title}
            id={item.id}
            cover={item.cover}
          />
        );
      })}
    </section>
  );
}
