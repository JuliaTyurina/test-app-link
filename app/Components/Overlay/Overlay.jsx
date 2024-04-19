import Styles from "./Overlay.module.scss";

export const Overlay = (props) => {
  return (
    <div
    onClick={() => props.close()}
      className={`${Styles["overlay"]} ${props.isModalOpened && Styles["overlay_is-opened"]}`}
    ></div>
  );
};
