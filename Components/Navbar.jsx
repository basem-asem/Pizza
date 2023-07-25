import Image from "next/image";
import styles from'../styles/navbar.module.css';
import { useSelector } from "react-redux";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const count = useSelector((state)=>state.cart.quantity)
  const [openList, setOpenList] = useState(false);
  return (
    <div className="navbar lg:px-11 h-24 bg-red-500 flex items-center justify-center sticky z-50 top-0 px-3 gap-1">
      <div className={styles.item}>
        <div className="texts text-white flex flex-col justify-center items-center gap-2">
        <div className="callButton bg-white rounded-full p-3 w-12 h-12 mx-5">
          <Image src="/img/telephone.png" alt="" width='32' height="32"/>
        </div>
          <div className=" text-xs font-medium">ORDER NOW!</div>
        </div>
      </div>
      <div className={`${styles.item}`}>
        <ul className="flex items-center justify-center text-white p-0">
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
      {openList && 
      <ul className="flex items-center justify-center flex-col text-white absolute right-4 top-24 bg-red-500 p-3 shadow-xl drop-shadow-xl gap-2 animate-pulseOnce">
      <Link href="/">
        <li className={styles.showListItem}>Homepage</li>
        </Link>
        <li className={styles.showListItem}>Products</li>
        <li className={styles.showListItem}>Menu</li>
        <li className={styles.showListItem}>Events</li>
        <li className={styles.showListItem}>Blog</li>
        <li className={styles.showListItem}>Contact</li>
      </ul>
      }
      <Link href="/cart">
      <div className={`${styles.item} justify-end relative`}>
      <Image src="/img/cart.png" alt="" width="30" height="30"/>
      <div className="num absolute -top-3 text-red-500 bg-white rounded-full w-5 h-5 flex justify-center items-center right-0.5">{count}</div>
      </div>
      </Link>
      <div className="md:hidden">
        <button
          className="p-3 text-gray-700 rounded-md outline-none focus:border-gray-400 "
          onClick={() => setOpenList(!openList)}
        >
          {openList ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
