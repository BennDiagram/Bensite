import "./gif-gallery.scss"
import GalleryCard from "./gallery-card"
import {motion} from "framer-motion"

const GifGallery = () => {

    const projects = [
        {gif: "../../media/bensite/HavenPreview.gif", still: "../../media/bensite/HavenPreviewStill.gif", description: "Placeholder"}
    ]
    return (
        <div className="gif-gallery">
            {projects.map((proj, index) => (
                <GalleryCard
                    key={index}
                    still={proj.still}
                    gif={proj.gif}
                    description={proj.description}
                />
            ))}
        </div> 
    )
}

export default GifGallery