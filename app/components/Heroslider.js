import Image from "next/image";
import React from "react";

import 'swiper/css';
const img = "/assets/images";
function Heroslider({ settings ,children  }) {
  const bgImage = settings.bgImage;
  return (
    <div className={settings.containerClass}>
        
      <Image
        src={img + "/" + bgImage}
        alt={settings.alt}
        container={settings.container}
        layout={settings.layout} // This will make the image fill the container,
        objectFit={settings.objectFit} // Ensures the image covers the full container area,
        className={settings.className}
      />
      {children}
    </div>


  );
}

export default Heroslider;
