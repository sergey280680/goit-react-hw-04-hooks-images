import React from "react";
import { Ul } from "./ImageGallery.styled";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";

export function ImageGallery({ images, handleSelectImage }) {
  return (
    <>
      {images && (
        <>
          <Ul>
            {images.map(({ webformatURL, largeImageURL, tags, id }) => (
              <ImageGalleryItem
                webformatURL={webformatURL}
                key={id}
                largeImageUrl={largeImageURL}
                tags={tags}
                onClick={handleSelectImage}
              />
            ))}
          </Ul>
        </>
      )}
    </>
  );
}
