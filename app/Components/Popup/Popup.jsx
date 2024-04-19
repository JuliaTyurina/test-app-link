import Styles from "./Popup.module.scss";

export const Popup = (props) => {
  return (
    <div className={`${Styles["popup"]} 
    ${props.isModalOpened && Styles["popup_is-opened"]} 
    ${(props.showLoginForm || props.showFullComment) && Styles["popup__full-comment"]}`}>
      <button onClick={() => props.close()} className={Styles["close"]}>
        <svg width="48.000000" height="48.000000" viewBox="0 0 48 48" fill="none">
          <desc>
            Created with Pixso.
          </desc>
          <defs>
            <clipPath id="clip8_236">
              <rect id="cancel" width="24.000000" height="24.000000" transform="translate(12.000000 12.000000)" fill="white" />
            </clipPath>
            <clipPath id="clip8_240">
              <rect id="arrow-right" width="24.000000" height="24.000000" transform="translate(112.000000 12.000000)" fill="white" />
            </clipPath>
            <clipPath id="clip719_4814">
              <rect id="desktop/button/middle" rx="7.500000" width="47.000000" height="47.000000" transform="translate(0.500000 0.500000)" fill="white" />
            </clipPath>
          </defs>
          <g>
            <g>
              <path id="Union" d="M31.6365 16.3638C31.988 16.7153 31.988 17.2852 31.6365 17.6367L25.2729 24L31.6365 30.3638C31.988 30.7153 31.988 31.2852 31.6365 31.6367C31.2849 31.9878 30.7151 31.9878 30.3638 31.6367L24 25.2729L17.6365 31.6367C17.2849 31.9878 16.7151 31.9878 16.3638 31.6367C16.0122 31.2852 16.0122 30.7153 16.3638 30.3638L22.7273 24L16.3638 17.6367C16.0122 17.2852 16.0122 16.7153 16.3638 16.3638C16.7151 16.0122 17.2849 16.0122 17.6365 16.3638L24 22.7275L30.3638 16.3638C30.7151 16.0122 31.2849 16.0122 31.6365 16.3638Z" fill="#FFFFFF" />
            </g>
          </g>
          <rect id="desktop/button/middle" rx="7.500000" width="47.000000" height="47.000000" transform="translate(0.500000 0.500000)" stroke="#FFFFFF" />
        </svg>

      </button>
      <div className={Styles.content}>{props.children}</div>
    </div>
  );
};
