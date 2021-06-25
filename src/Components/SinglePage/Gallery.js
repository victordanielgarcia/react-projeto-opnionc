import React from "react";

import one from "../../Assets/one.png";
import two from "../../Assets/two.png";
import tree from "../../Assets/tree.png";
import four from "../../Assets/four.png";

function Gallery() {
  return (
    <div className="gallery-background gallery23">
      <div className="p-mt-5 p-d-flex p-jc-center">
        <h2>Galeria</h2>
      </div>

      <div className="p-d-flex p-jc-center">
        <div className="p-mt-3 gallery-line"></div>
      </div>

      <div class="wrap">
        <div class="gallery">
          <img src={one} alt="Imagem" />
          <img src={two} alt="Imagem" />
          <img src={tree} alt="Imagem" />
          <img src={four} alt="Imagem" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
