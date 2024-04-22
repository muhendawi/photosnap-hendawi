import styles from "./HomeBanner.module.css";
import Button from "./Button";

function HomeBanner({
  title,
  button,
  addButton = false,
  body,
  image,
  index = 0,
}) {
  return (
    <section
      key={title}
      className={`${styles.shared}  ${index % 2 !== 0 && styles.reverseRow} `}
    >
      <div
        className={`${styles.sharedText} ${
          button[0] === "transparent-onBlack-btn" && styles.blackSection
        }`}
      >
        <div
          className={`${
            button[0] === "transparent-onBlack-btn" && styles.innerText
          } ${styles.innerInner}`}
        >
          <h1>{title}</h1>
          <p className={styles.blackBody}>{body}</p>
          {addButton && (
            <div>
              <Button
                type={
                  button[0] === "transparent-onBlack-btn"
                    ? "transparent-onBlack-btn"
                    : "transparent-onWhite-btn"
                }
                arrow={true}
                arrowColor={button[0] === "transparent-onBlack-btn" && "#fff"}
              >
                {button[1]}
              </Button>
              {/* <Arrow color={button[0] === "transparent-onBlack-btn" && "#fff"} /> */}
            </div>
          )}
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt="justImg" />
      </div>
    </section>
  );
}

export default HomeBanner;
