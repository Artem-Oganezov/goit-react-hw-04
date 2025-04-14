import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ loadMoreI }) => {
  return (
    <div className={s.btn_box}>
      <button className={s.button} onClick={() => loadMoreI()}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
