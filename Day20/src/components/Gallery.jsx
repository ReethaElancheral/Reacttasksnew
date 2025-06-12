import React, { useState } from 'react';
import Lightbox from './Lightbox';


const images = [
  'https://picsum.photos/id/1015/600/400',
  'https://picsum.photos/id/1021/600/400',
  'https://picsum.photos/id/1025/600/400',
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
      <h2>Image Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index}`}
            className="gallery-thumb"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {selectedImage && (
        <Lightbox imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default Gallery;
