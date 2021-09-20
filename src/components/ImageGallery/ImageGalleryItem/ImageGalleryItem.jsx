import React from "react";
import { Li, Img } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({
  webformatURL,
  tags,
  onClick,
  largeImageUrl,
}) => {
  return (
    <Li>
      <Img
        src={webformatURL}
        alt={tags}
        onClick={() => onClick(largeImageUrl)}
      />
    </Li>
  );
};
