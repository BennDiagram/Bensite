import React from "react";
import ReactDOM from "react-dom/client";

import GifGallery from "./components/gif-gallery/gif-gallery.jsx";
import ProjectGallery from "./components/project-gallery/ProjectGallery.js";

ReactDOM.createRoot(document.getElementById("gallery-root")!).render(
  <React.StrictMode>
    <ProjectGallery />
    <GifGallery />
  </React.StrictMode>
);
