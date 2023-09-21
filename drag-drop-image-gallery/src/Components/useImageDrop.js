// useImageDrop.js
import React, { createContext, useContext, useState } from 'react';

const ImageDropContext = createContext();

export function useImageDrop() {
  const context = useContext(ImageDropContext);
  if (!context) {
    throw new Error('useImageDrop must be used within an ImageDropProvider');
  }
  return context;
}

export function ImageDropProvider({ children }) {
  const [droppedImage, setDroppedImage] = useState(null);

  const handleDrop = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setDroppedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const clearDroppedImage = () => {
    setDroppedImage(null);
  };

  return (
    <ImageDropContext.Provider value={{ droppedImage, handleDrop, clearDroppedImage }}>
      {children}
    </ImageDropContext.Provider>
  );
}
