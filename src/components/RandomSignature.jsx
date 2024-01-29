import React, { useState, useEffect, memo } from 'react';

const RandomSignature = ({ onImagesLoad }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const handleImageLoad = () => {
      const allImagesLoaded = document
        .querySelectorAll('.random-signature img')
        .every((img) => img.complete);

      if (allImagesLoaded) {
        setImagesLoaded(true);
        onImagesLoad(); // Вызываем колбэк, чтобы сообщить родительскому компоненту о загрузке изображений
      }
    };

    document.querySelectorAll('.random-signature img').forEach((img) => {
      img.addEventListener('load', handleImageLoad);
    });

    return () => {
      document.querySelectorAll('.random-signature img').forEach((img) => {
        img.removeEventListener('load', handleImageLoad);
      });
    };
  }, [onImagesLoad]); // Добавили onImagesLoad в зависимости, чтобы useEffect следил за его изменениями

  const randomIndex = Math.floor(Math.random() * 4) + 1;
  const imageUrl = require(`../assets/image/signature${randomIndex}.jpg`);

  return <img className="random-signature" src={imageUrl} alt="Random Signature" style={{ width: '100%' }} />;
};

export default memo(RandomSignature);
