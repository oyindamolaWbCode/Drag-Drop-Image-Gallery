// import './gallery.css';

import React from "react";
import { useState, useRef } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Close } from "@mui/icons-material";
import img1 from "../../assets/Images/anna-keibalo-SJ4NDKx-I_8-unsplash.jpg";
import img2 from "../../assets/Images/christopher-kuzman-R7uGA03vbbk-unsplash.jpg";
import img3 from "../../assets/Images/hi-estudio-UPE9seVOHck-unsplash.jpg";
import img4 from "../../assets/Images/hossein-nasr-8lBZWmYjymA-unsplash.jpg";
import img5 from "../../assets/Images/siru-zhou-2-zX9_O596U-unsplash.jpg";
import img6 from "../../assets/Images/karsten-winegeart-KNY03bluawE-unsplash.jpg";
import img7 from "../../assets/Images/vertex-designs-TfTndxmMaTQ-unsplash.jpg";
import img8 from "../../assets/Images/mahdi-bafande--s5_TDJCPAI-unsplash.jpg";
import img9 from "../../assets/Images/mark-mc-neill-Q1zvqzJaJh0-unsplash.jpg";
import img10 from "../../assets/Images/kevin-schmid-KSqBqjP0yDA-unsplash.jpg";
import img11 from "../../assets/Images/nick-design-1TaHqA3XIEI-unsplash.jpg";
import img12 from "../../assets/Images/siru-zhou-2-zX9_O596U-unsplash.jpg";
import img13 from "../../assets/Images/priscilla-du-preez-q-vr0_ZNgd4-unsplash.jpg";
import img14 from "../../assets/Images/taylor-heery-I8ut0x5rofw-unsplash.jpg";
import img15 from "../../assets/Images/taylor-heery-6g0lrIg6QT4-unsplash.jpg";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: img1,
    },

    {
      id: 2,
      imgSrc: img2,
    },

    {
      id: 3,
      imgSrc: img3,
    },

    {
      id: 4,
      imgSrc: img4,
    },

    {
      id: 5,
      imgSrc: img5,
    },

    {
      id: 6,
      imgSrc: img6,
    },
    {
      id: 7,
      imgSrc: img7,
    },
    {
      id: 8,
      imgSrc: img8,
    },
    {
      id: 9,
      imgSrc: img9,
    },
    {
      id: 10,
      imgSrc: img10,
    },
    {
      id: 11,
      imgSrc: img11,
    },
    {
      id: 12,
      imgSrc: img12,
    },
    {
      id: 13,
      imgSrc: img13,
    },
    {
      id: 14,
      imgSrc: img14,
    },
    {
      id: 15,
      imgSrc: img15,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const [images, setImages] = useState(data);

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  const handleDragDrop = (results) => {
    const { source, destination, type } = results;
    console.log('Results:', results);
  
    if (!destination) return;
  
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;
  
    const reorderedImages = [...images];
  
    if (type === "group") {
      // Reorder images within the same droppable group
      const [movedImage] = reorderedImages.splice(source.index, 1);
      reorderedImages.splice(destination.index, 0, movedImage);
    } else {
      // Move an image from one droppable group to another
      const [movedImage] = reorderedImages.splice(source.index, 1);
      reorderedImages.splice(destination.index, 0, movedImage);
    }
  
    setImages(reorderedImages);
  };
  

  return (
    <div className="Gallery-page">
      <h1>This the Gallery page</h1>
      <div className={model ? "model open" : "model"}>
        {tempimgSrc && (
          <>
            <img src={tempimgSrc} alt="Modal" />
            <Close onClick={() => setModel(false)} />
          </>
        )}
      </div>
      <DragDropContext
        onDragEnd={handleDragDrop}
      >
        <div className="gallery-shop">
          <Droppable droppableId="ROOT" type="group">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {images.map((item, index) => {
                  return (
                   <Draggable draggableId={item.id.toString()} key={item.id} index={index}>
                    {(Provided) =>(
                         <div
                         className="pics"
                         key={index}
                         onClick={() => getImg(item.imgSrc)} {...Provided.dragHandleProps} {...Provided.draggableProps} ref={Provided.innerRef}
                       >
                         <img
                           src={item.imgSrc}
                           style={{
                             width: "100%",
                             backgroundPosition: "center",
                             backgroundSize: "contain",
                             backgroundRepeat: "none",
                             padding: "5px 0px",
                           }}
                           alt={`Image ${item.id}`}
                         />
                       </div>
                    )}
                   </Draggable>
                  );
                })}
              </div>
               
            )}
            
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
};

export default Gallery;
