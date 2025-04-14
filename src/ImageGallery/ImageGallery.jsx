import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ data }) => {
  return (
    <ul className={s.gallery}>
      {data.map((item) => (
        <li key={item.id}>
          <ImageCard {...item} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
