import styles from "./SubscriptionTableFeature.module.css";
import { IoMdCheckmark } from "react-icons/io";

function SubscriptionTableFeature() {
  return (
    <section className={styles.container}>
      <h1>Compare</h1>
      <table>
        <tr>
          <th className={styles.offForMobile}>The Features</th>
          <th className={styles.offForMobile}>Basic</th>
          <th className={styles.offForMobile}>Pro</th>
          <th className={styles.offForMobile}>Business</th>
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
    </section>
  );
}

export default SubscriptionTableFeature;
