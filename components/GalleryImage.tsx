"use client"; 


type GalleryImageProps = {
  src: string;
  alt: string;
  placeholderSrc: string;
  className: string;
};

export default function GalleryImage({
  src,
  alt,
  placeholderSrc,
  className,
}: GalleryImageProps) {
  // This event handler is now allowed because this is a Client Component
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    (e.currentTarget as HTMLImageElement).src = placeholderSrc;
  };

  return (
    <img src={src} alt={alt} className={className} onError={handleError} />
  );
}
