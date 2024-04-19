import styles from "./StoryCard.module.css";
import Arrow from "../../assets/Arrow";

function StoryCard({ title, date, author, image }) {
  return (
    <div key={title} className={styles.card}>
      <div>
        {date && <p>{date}</p>}
        <h3>{title}</h3>
        <p>by {author}</p>
        <div className={styles.btnArrow}>
          <button>read story</button>
          {/* <Button type="transparent-onBlack-btn" arrow={true} arrowColor="#fff">
            read story
          </Button> */}
          <Arrow color="#fff" />
        </div>
      </div>
      <img src={image} alt={title} />
    </div>
  );
}

export default StoryCard;
