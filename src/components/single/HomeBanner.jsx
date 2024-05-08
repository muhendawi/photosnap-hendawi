import styles from "./HomeBanner.module.css";
import Button from "./Button";
import { useState } from "react";
import Modal from "./Modal";

function HomeBanner({
  title,
  button,
  addButton = false,
  body,
  imageDesktop,
  imageTablet,
  imageMobile,
  index = 0,
}) {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
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
                  onClick={() => {
                    if (button[1] === "get an invite") {
                      setIsModal(true);
                      document.body.style.overflow = "hidden";
                    }
                  }}
                >
                  {button[1]}
                </Button>
                {/* <Arrow color={button[0] === "transparent-onBlack-btn" && "#fff"} /> */}
              </div>
            )}
          </div>
        </div>
        <picture className={styles.imageContainer}>
          <source srcSet={imageMobile} media="(max-width: 723px)" />
          <source srcSet={imageTablet} media="(max-width: 1070px)" />
          <img src={imageDesktop} alt="Image" />
        </picture>
      </section>
      {isModal && <Modal setIsModal={setIsModal} />}
    </>
  );
}

export default HomeBanner;
