import { useState } from "react";
import "./ImageCard.module.css";
import s from "./ImageCard.module.css";

import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageCard = ({ urls, alt_description }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <img
        className={s.img}
        src={urls.small}
        alt={alt_description}
        onClick={() => setIsOpen(true)}
      />
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Image Modal"
        shouldCloseOnOverlayClick={true}
        style={{
          content: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "none",
            border: "none",
            padding: 0,
          },
          overlay: {
            backgroundColor: "rgba(0,0,0,0.8)",
          },
        }}
      >
        <img
          src={urls.regular}
          alt={alt_description}
          style={{ maxHeight: "90vh", maxWidth: "100%" }}
          onClick={() => setIsOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default ImageCard;
