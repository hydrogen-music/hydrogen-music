import React from 'react';

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ScreenshotGalleryProps {
  images: GalleryImage[];
}

const ScreenshotGallery: React.FC<ScreenshotGalleryProps> = ({ images }) => {
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigate = (direction: 'prev' | 'next') => {
    setCurrentIndex((prev) => {
      if (direction === 'prev') {
        return prev === 0 ? images.length - 1 : prev - 1;
      }
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        navigate('prev');
      } else if (e.key === 'ArrowRight') {
        navigate('next');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, images.length]);

  const currentImage = images[currentIndex];

  return (
    <div className="hydrogen-screenshot-gallery">
      <div className="hydrogen-screenshot-gallery__grid">
        {images.map((image, index) => (
          <button
            key={index}
            className="hydrogen-screenshot-gallery__item"
            onClick={() => openLightbox(index)}
            aria-label={`View ${image.alt}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="hydrogen-screenshot-gallery__image"
              loading="lazy"
            />
            {image.caption && (
              <span className="hydrogen-screenshot-gallery__caption">
                {image.caption}
              </span>
            )}
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <div className="hydrogen-screenshot-gallery__lightbox">
          <div
            className="hydrogen-screenshot-gallery__lightbox-backdrop"
            onClick={closeLightbox}
          />
          <button
            className="hydrogen-screenshot-gallery__lightbox-close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            &times;
          </button>

          <button
            className="hydrogen-screenshot-gallery__lightbox-nav hydrogen-screenshot-gallery__lightbox-nav--prev"
            onClick={() => navigate('prev')}
            aria-label="Previous image"
          >
            &#8249;
          </button>

          <button
            className="hydrogen-screenshot-gallery__lightbox-nav hydrogen-screenshot-gallery__lightbox-nav--next"
            onClick={() => navigate('next')}
            aria-label="Next image"
          >
            &#8250;
          </button>

          <div className="hydrogen-screenshot-gallery__lightbox-content">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="hydrogen-screenshot-gallery__lightbox-image"
            />
            <div className="hydrogen-screenshot-gallery__lightbox-caption">
              {currentImage.caption || currentImage.alt}
              <span className="hydrogen-screenshot-gallery__lightbox-counter">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScreenshotGallery;
