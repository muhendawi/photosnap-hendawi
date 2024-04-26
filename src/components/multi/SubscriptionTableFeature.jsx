import styles from "./SubscriptionTableFeature.module.css";
import { IoMdCheckmark } from "react-icons/io";

function SubscriptionTableFeature() {
  return (
    <section className={styles.container}>
      <h1>Compare</h1>
      <div>
        <table className={styles.desktopTable}>
          <tr>
            <th>The Features</th>
            <th>Basic</th>
            <th>Pro</th>
            <th>Business</th>
          </tr>
          <tr>
            <th>Unlimited Story Posting</th>
            <td>
              <IoMdCheckmark size={25} />
            </td>
            <td>
              <IoMdCheckmark size={25} />
            </td>
            <td>
              <IoMdCheckmark size={25} />
            </td>
          </tr>
          <tr>
            <th>Unlimited Photo Upload</th>
            <td>
              <IoMdCheckmark size={25} />
            </td>
            <td>
              <IoMdCheckmark size={25} />
            </td>
            <td>
              <IoMdCheckmark size={25} />
            </td>
          </tr>
          <tr>
            <th>Embedding Custom Content</th>
            <td></td>
            <td>
              <IoMdCheckmark size={25} />
            </td>
            <td>
              <IoMdCheckmark size={25} />
            </td>
          </tr>
          <tr>
            <th>Customize Metadata</th>
            <td></td>
            <td>
              <IoMdCheckmark size={25} />
            </td>
            <td>
              <IoMdCheckmark size={25} />
            </td>
          </tr>
          <tr>
            <th>Advanced Metrics</th>
            <td></td>
            <td></td>
            <td>
              <IoMdCheckmark size={25} />
            </td>
          </tr>
          <tr>
            <th>Photo Downloads</th>
            <td></td>
            <td></td>
            <td>
              <IoMdCheckmark size={25} />
            </td>
          </tr>
          <tr>
            <th>Search Engine Indexing</th>
            <td></td>
            <td></td>
            <td>
              <IoMdCheckmark size={25} />
            </td>
          </tr>
          <tr>
            <th>Custom Analytics</th>
            <td></td>
            <td></td>
            <td>
              <IoMdCheckmark size={25} />
            </td>
          </tr>
        </table>
        <table className={styles.mobileTable}>
          <tr>
            <th colSpan={3}>The Features</th>
          </tr>
          <tr>
            <th colSpan={3}>Unlimited Story Posting</th>
          </tr>
          <tr className={styles.mobileHeads}>
            <td>Basic</td>
            <td>Pro</td>
            <td>Business</td>
          </tr>
          <tr className={styles.checkMarksRow}>
            <td>
              <IoMdCheckmark size={25} />
            </td>
            <td>
              <IoMdCheckmark size={25} />
            </td>
            <td>
              <IoMdCheckmark size={25} />
            </td>
          </tr>
          <tr>
            <th colSpan={3}>Unlimited Photo Upload</th>
          </tr>
          <tr className={styles.mobileHeads}>
            <td>Basic</td>
            <td>Pro</td>
            <td>Business</td>
          </tr>
          <tr className={styles.checkMarksRow}>
            <td>
              <IoMdCheckmark size={25} />
            </td>
            <td>
              <IoMdCheckmark size={25} />
            </td>
            <td>
              <IoMdCheckmark size={25} />
            </td>
          </tr>
          <tr>
            <th colSpan={3}>Embedding Custom Content</th>
          </tr>
          <tr className={styles.mobileHeads}>
            <td>Basic</td>
            <td>Pro</td>
            <td>Business</td>
          </tr>
          <tr className={styles.checkMarksRow}>
            <td></td>
            <td>
              <IoMdCheckmark size={25} />
            </td>
            <td>
              <IoMdCheckmark size={25} />
            </td>
          </tr>
          <tr>
            <th colSpan={3}>Customize Metadata</th>
          </tr>
          <tr className={styles.mobileHeads}>
            <td>Basic</td>
            <td>Pro</td>
            <td>Business</td>
          </tr>
          <tr className={styles.checkMarksRow}>
            <td></td>
            <td>
              <IoMdCheckmark size={25} />
            </td>
            <td>
              <IoMdCheckmark size={25} />
            </td>
          </tr>
          <tr>
            <th colSpan={3}>Advanced Metrics</th>
          </tr>
          <tr className={styles.mobileHeads}>
            <td>Basic</td>
            <td>Pro</td>
            <td>Business</td>
          </tr>
          <tr className={styles.checkMarksRow}>
            <td></td>
            <td></td>
            <td>
              <IoMdCheckmark size={25} />
            </td>
          </tr>
          <tr>
            <th colSpan={3}>Photo Downloads</th>
          </tr>
          <tr className={styles.mobileHeads}>
            <td>Basic</td>
            <td>Pro</td>
            <td>Business</td>
          </tr>
          <tr className={styles.checkMarksRow}>
            <td></td>
            <td></td>
            <td>
              <IoMdCheckmark size={25} />
            </td>
          </tr>
          <tr>
            <th colSpan={3}>Search Engine Indexing</th>
          </tr>
          <tr className={styles.mobileHeads}>
            <td>Basic</td>
            <td>Pro</td>
            <td>Business</td>
          </tr>
          <tr className={styles.checkMarksRow}>
            <td></td>
            <td></td>
            <td>
              <IoMdCheckmark size={25} />
            </td>
          </tr>
          <tr>
            <th colSpan={3}>Custom Analytics</th>
          </tr>
          <tr className={styles.mobileHeads}>
            <td>Basic</td>
            <td>Pro</td>
            <td>Business</td>
          </tr>
          <tr className={styles.checkMarksRow}>
            <td></td>
            <td></td>
            <td>
              <IoMdCheckmark size={25} />
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
}

export default SubscriptionTableFeature;
