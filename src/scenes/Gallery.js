import GalleryData from '../assets/data/galleryData.json'
import GalleryDataJs from '../components/GalleryData'
console.log(GalleryData)

function Gallery() {

    return(
        <div>
            {
                GalleryData.map(item => {
                    return <GalleryDataJs 
                    key="item.id"
                    title={item.title}
                    cover={item.cover}
                    />
                })
            }
        </div>
        ) 
   
 }
 
 export default Gallery;