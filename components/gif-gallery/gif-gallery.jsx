import "B:/.repos/bensite/components/gif-gallery/gif-gallery.scss"
import {motion} from "framer-motion"

const GifGallery = () => {
    return (
        <div class="item-container">
            <div class="gif-container">
                    <img src="media/bensite/HavenPreview.gif" alt="Haven Gif" class="gif" />
                    <img src="media/bensite/HavenPreviewStill.jpg" alt="Haven Still" class="still" />
            </div>
        </div>
    )
}

export default GifGallery