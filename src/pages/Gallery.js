import GalleryData from '../assets/data/galleryData.json'
import GalleryDataJs from '../components/GalleryData'
console.log(GalleryData)

export default function Gallery() {

    return(
        <section className='gallery-contener'>         
            {
                GalleryData.map(item => {
                    return <GalleryDataJs 
                    key="item.id"
                    title={item.title}
                    cover={item.cover}
                    />
                })
            }
        </section>
        ) 
   
 }
 