import css from './ErrorMessage.module.css'; 

const ErrorMessage = () => {
  return (
    <div className={css.errorContainer}>
      <p className={css.errorMessage}>Something went wrong. Please try again later.</p>
    </div>
  );
};

export default ErrorMessage;

