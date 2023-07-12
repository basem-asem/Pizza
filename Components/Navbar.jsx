import Image from "next/image";
import styles from'../styles/navbar.module.css';
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const count = useSelector((state)=>state.cart.quantity)
  return (
    <div className="navbarlg:px-12 h-24 bg-red-500 flex items-center justify-between sticky z-50 top-0 px-4">
      <div className={styles.item}>
        <div className="callButton bg-white rounded-full p-3 w-14 h-14">
          <Image src="/img/telephone.png" alt="" width='32' height="32"/>
        </div>
        <div className="texts ml-5 text-white">
          <div className="text text-xs font-medium">ORDER NOW!</div>
          <div className="text text-xl font-bold">012 141 567</div>
        </div>
      </div>
      <div className={`${styles.item}`}>
        <ul className="flex items-center text-white p-0">
        <Link href="/">
          <li className={styles.listItem}>Homepage</li>
          </Link>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/logo.png" alt=""  width="160" height="69"/>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <Link href="/cart">
      <div className={`${styles.item} justify-end relative`}>
      <Image src="/img/cart.png" alt="" width="30" height="30"/>
      <div className="num absolute -top-3 text-red-500 bg-white rounded-full w-5 h-5 flex justify-center items-center -right-3">{count}</div>
      </div>
      </Link>
    </div>
  );
};

export default Navbar;
