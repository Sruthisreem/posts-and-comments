import styles from "./LoadingSpinner.module.css";

export default function LoadingSpinner(props) {
  return (
    <div className={styles["lds-spinner"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
