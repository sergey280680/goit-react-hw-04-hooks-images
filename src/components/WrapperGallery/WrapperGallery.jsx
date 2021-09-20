import React, { useState, useEffect, Component } from "react";
import { fetchImages } from "components/fetchImages/fetchImages";
import toast, { Toaster } from "react-hot-toast";
import { LoadMore } from "components/LoadMore/LoadMore";
import { Modal } from "components/Modal/Modal";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Header } from "components/Header/Header";
import { SpinnerLoader } from "components/Spinner/Spinner";

export function WrapperGallery() {
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [images, setImages] = useState(null);
  const [quantityImages, setQuantityImages] = useState(0);
  const [totalHits, setTotalHits] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    const getLoadImages = async (page, query) => {
      const data = await fetchImages({ page, query });
      setTotalHits(data.data.totalHits);
      return data.data.hits;
    };

    const arrImages = async () => {
      setStatus("pending");
      const newImages = await getLoadImages(page, query);
      if (newImages.length === 0) {
        setStatus("error");
        return toast.error(`search for the query "${query}" gave nothing `, {
          duration: 3000,
          style: {
            backgroundColor: "red",
            marginTop: 50,
            transition: "all 3s ease-out",
          },
        });
      } else if (page === 1) {
        setImages(newImages);
        setStatus("resolved");
      } else {
        setImages([...images, ...newImages]);
        setStatus("resolved");
        window.scrollTo({
          top: document.documentElement.scrollHeight - 1230,
          behavior: "smooth",
        });
      }
    };

    arrImages();
  }, [query, page]);

  useEffect(() => {
    if (images) {
      setQuantityImages(images.length);
    }
  }, [images]);

  // ========================

  const handleFormSubmit = (query) => {
    setPage(1);
    setQuery(query);
  };

  const handleSelectImage = (largeImageURL) => {
    setSelectedImage(largeImageURL);
  };

  const handlePage = () => {
    setPage(page + 1);
  };

  const closeModal = (e) => {
    setSelectedImage(null);
  };

  return (
    <>
      <Header handleFormSubmit={handleFormSubmit} query={query} />
      {status === "pending" && <SpinnerLoader />}
      {status === "error" && <Toaster />}
      {status === "resolved" && (
        <>
          <ImageGallery images={images} handleSelectImage={handleSelectImage} />
          {totalHits !== quantityImages && <LoadMore handlePage={handlePage} />}
          {selectedImage && (
            <Modal selectedImage={selectedImage} closeModal={closeModal} />
          )}
        </>
      )}
    </>
  );
}
