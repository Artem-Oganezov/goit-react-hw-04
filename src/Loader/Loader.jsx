import s from "./Loader.module.css";
import { ScaleLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className={s.loader}>
      <ScaleLoader color="blue" />
    </div>
  );
};

export default Loader;
