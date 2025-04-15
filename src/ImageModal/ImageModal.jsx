import ReactModal from "react-modal";
import s from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onClose, image }) => {
  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        shouldCloseOnOverlayClick={true}
        contentLabel="Images Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          content: {
            background: "none",
            border: "none",
            padding: 0,
            inset: "auto",
          },
        }}
      >
        {image?.urls?.regular && (
          <img
            className={s.img_modal}
            src={image.urls.regular || "../assets/react.svg"}
            alt={image.alt_description || "Image"}
          />
        )}
      </ReactModal>
    </>
  );
};

export default ImageModal;
