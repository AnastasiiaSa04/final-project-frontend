import { useId } from "react";
import styles from "./TextField.module.css";

const TextField = ({
  label,
  register,
  name,
  rules,
  type = "text",
  error,
  ...props
}) => {
  const id = useId();

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        className={`${styles.input} ${error ? styles.inputError : ""}`}
        {...register(name, rules)}
        {...props}
      />

      {error && <p className={styles.error}>{error.message}</p>}
    </div>
  );
};

export default TextField;

