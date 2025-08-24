import "./gallery-card.scss";
import React from "react";
import {motion} from "framer-motion";

const GalleryCard = ({gif, still, description}) => {
    return (
        <div className="item-container">
            <div className="gif-container">
                    <img src="{gif}" alt="Haven Gif" class="gif" />
                    <img src="{still}" alt="Haven Still" class="still" />
            </div>
        </div>
    )
}

export default GifGallery