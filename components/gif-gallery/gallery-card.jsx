// GalleryCard.jsx
import "./gallery-card.scss"
import React from "react"
import {motion} from "framer-motion"

const GalleryCard = ({ gif, still, description }) => {
  const [inView, setInView] = React.useState(false)

  return (
    <motion.div
      className="item-container"
      initial={{ opacity: .3, scale: 0.95, x: 20 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ margin: "-500px", once: false }}
      onViewportEnter={() => setInView(true)}
      onViewportLeave={() => setInView(false)}
      transition={{ duration: 0.5 }}
    >
      <div className="gif-container">
        {inView ? (
          <img src={gif} alt="Gif preview" className="gif" />
        ) : (
          <img src={still} alt="Still preview" className="still" />
        )}
      </div>
    </motion.div>
  )
}

export default GalleryCard
