import Image from "next/image";
import styles from "../styles/footer.module.css";
const Footer = () => {
  return (
    <div className="footer h-auto md:h-[calc(100vh-96px)] bg-[#222] flex">
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" alt="" objectFit="cover"/>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className="motto uppercase text-gray-300 text-xl font-bold pb-4">
            oh yes, we did. the lama pizza, well baked slice of pizza.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className="title md:text-lg text-[#b7903c] uppercase text-2xl font-bold">find our resturants</h1>
          <p className={styles.text}>
            2356 k. laquie Rd #235.<br />NewYork, 85022<br />(602) 867-1012
          </p><p className={styles.text}>
            2356 k. laquie Rd #235.<br />NewYork, 85022<br />(602) 867-1012
          </p><p className={styles.text}>
            2356 k. laquie Rd #235.<br />NewYork, 85022<br />(602) 867-1012
          </p><p className={styles.text}>
            2356 k. laquie Rd #235.<br />NewYork, 85022<br />(602) 867-1012
          </p>
        </div>
        <div className={styles.card}>
          <h1 className="title md:text-lg text-[#b7903c] uppercase text-2xl font-bold">Working hours</h1>
          <p className={styles.text}>
            Monday until friday<br/> 9:00 - 22:00
          </p><p className={styles.text}>
            saturday - sunday <br/> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
