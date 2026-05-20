"use client";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import Link from "next/link";
import { Planet } from "../icons/Planet";
import { Badge } from "./Badge";
import { useWishlist } from "../contexts/WishlistContext";
import styles from "./Navbar.module.css";

const navbarItems = [
  {
    title: "ABOUT US",
    link: "/about",
  },
  {
    title: "DESTINATION",
    link: "/destination",
  },
  {
    title: "NASA COLLABORATION",
    link: "/nasa",
  },
];
const NavItem = ({ title, link, index, isActive }) => {
  return (
    <li
      className={classNames(styles.navbarLinks, {
        [styles.isLinkActive]: isActive,
      })}
    >
      <Link href={link}>
        <b>0{index + 1}</b> {title}
      </Link>
    </li>
  );
};

export const Navbar = () => {
  const currentPath = usePathname();
  const { wishlistCount } = useWishlist();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <a href="/">
          <img src="/shared/logo.svg" alt="" /> GALACTICA
        </a>
      </div>
      <div className={styles.decorativeLine} />
      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />
        <ul className={styles.navbarList}>
          {navbarItems.map((item, index) => (
            <NavItem
              key={item.link}
              title={item.title}
              link={item.link}
              index={index}
              isActive={item.link === currentPath}
            />
          ))}
        </ul>

        <Badge count={wishlistCount}>
          <Planet color="white" />
        </Badge>
      </nav>
    </header>
  );
};
