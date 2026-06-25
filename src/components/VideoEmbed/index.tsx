import React from 'react';

export interface VideoEmbedProps {
  videoId: string;
  title: string;
  description?: string;
  requirement?: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({
  videoId,
  title,
  description,
  requirement,
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;

  const handleClick = () => {
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsPlaying(false);
  };

  return (
    <div className="hydrogen-video-embed" ref={cardRef}>
      {!isPlaying ? (
        <div className="hydrogen-video-embed__card">
          <a
            href={watchUrl}
            className="hydrogen-video-embed__thumbnail-link"
            onClick={handleClick}
            aria-label={`Watch ${title}`}
          >
            <div className="hydrogen-video-embed__thumbnail-wrapper">
              <img
                src={thumbnailUrl}
                alt={title}
                className="hydrogen-video-embed__thumbnail"
                loading="lazy"
              />
              <div className="hydrogen-video-embed__play-overlay">
                <svg
                  className="hydrogen-video-embed__play-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </a>
          <div className="hydrogen-video-embed__info">
            <h4 className="hydrogen-video-embed__title">{title}</h4>
            {description && (
              <p className="hydrogen-video-embed__description">{description}</p>
            )}
            {requirement && (
              <p className="hydrogen-video-embed__requirement">{requirement}</p>
            )}
          </div>
        </div>
      ) : (
        <div className="hydrogen-video-embed__modal">
          <div className="hydrogen-video-embed__modal-backdrop" onClick={handleClose} />
          <div className="hydrogen-video-embed__modal-content">
            <button
              className="hydrogen-video-embed__modal-close"
              onClick={handleClose}
              aria-label="Close video"
            >
              &times;
            </button>
            <div className="hydrogen-video-embed__modal-frame">
              <iframe
                src={embedUrl}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="hydrogen-video-embed__modal-title">{title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoEmbed;
