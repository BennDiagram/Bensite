import React from 'react'
import ReactDOM from 'react-dom/client'

import GifGallery from './components/gif-gallery/gif-gallery.jsx'
import "./components/gif-gallery/gif-gallery.scss"

ReactDOM.createRoot(document.getElementById('gif-gallery-root')).render(
  <React.StrictMode>
    <GifGallery />
  </React.StrictMode>,
)
