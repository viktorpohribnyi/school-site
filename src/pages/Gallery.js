import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';
import photo_3 from '../assets/photo_3.jpg';
import photo_4 from '../assets/photo_4.jpg';
import photo_5 from '../assets/photo_5.jpg';
import photo_6 from '../assets/photo_6.jpg';
import photo_7 from '../assets/photo_7.jpg';
import photo_8 from '../assets/photo_8.jpg';

function Gallery() {
  const images = [
    { src: photo_5, title: 'Змагання по футболу' },
    { src: photo_4, title: 'Свято Першого Дзвоника' },
    { src: photo_8, title: 'Свято Нового року' },
    { src: photo_3, title: 'Флешмоб до Дня Незалежності' },
    { src: photo_6, title: 'Шкільний концерт' },
    { src: photo_7, title: 'Наші уроки' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Галерея школи</h2>
      <p className="text-center text-muted mb-5">Погляньте на яскраві моменти шкільного життя!</p>

      <Fade cascade damping={0.1}>
        <div className="row g-4">
          {images.map((img, idx) => (
            <div className="col-sm-6 col-md-4" key={idx}>
              <div
                className="position-relative overflow-hidden rounded shadow-sm gallery-img"
                onClick={() => openLightbox(idx)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="img-fluid w-100 rounded gallery-hover"
                />
                <div className="position-absolute bottom-0 start-0 bg-dark bg-opacity-50 text-white w-100 p-2">
                  {img.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fade>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].src}
          nextSrc={images[(photoIndex + 1) % images.length].src}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          imageTitle={images[photoIndex].title}
        />
      )}
    </div>
  );
}

export default Gallery;
