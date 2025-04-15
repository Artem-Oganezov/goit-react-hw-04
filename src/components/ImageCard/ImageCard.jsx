import s from "./ImageCard.module.css";
const ImageCard = ({ handleImage, image }) => {
  return (
    <div>
      <img
        className={s.img}
        onClick={() => handleImage(image)}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
