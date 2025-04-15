import s from "./ErrorMessage.module.css";
const ErrorMessage = () => {
  return (
    <div className={s.error}>
      <h2>Server error. Please try again later...</h2>
    </div>
  );
};

export default ErrorMessage;
