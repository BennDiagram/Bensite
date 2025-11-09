// GifGallery.jsx
import "./gif-gallery.scss"
import GalleryCard from "./gallery-card"
import {motion} from "framer-motion"

const GifGallery = () => {
  const projects = [
    {gif: "../../media/bensite/HavenPreview.gif", still: "../../media/bensite/HavenPreviewStill.jpg", description: "Placeholder"},
    {gif: "../../media/bensite/MushroomPreviewLowres.gif", still: "../../media/bensite/MushroomPreviewStill.jpeg", description: "Placeholder"},
    {gif: "../../media/bensite/HavenPreview.gif", still: "../../media/bensite/HavenPreviewStill.jpg", description: "Placeholder"}
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
