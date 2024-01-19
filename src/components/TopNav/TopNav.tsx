"use client"
import Link from 'next/link';
import styles from './topNav.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { MdMenu } from 'react-icons/md';

const TopNav = () => {
  const [menuToggled, setMenuToggled] = useState(true);
  const [menuPosition, setMenuPosition] = useState('-170px');

  const toggleMenu = () => {
    if (menuToggled) {
      setMenuToggled(false);
      setMenuPosition('10px');
    } else {
      setMenuToggled(true);
      setMenuPosition('-170px');
    }
  }

  return (
    <section className={styles.topNav}>
      <Image
        alt='navImg'
        fill
        src='https://res.cloudinary.com/dvnemzw0z/image/upload/v1705046489/RGV/feature1Small_iw8r0j.jpg'
      />

      <section className={styles.topNavConHolder}>
        <div className={styles.topNavCon}>
          <Link href={'/'} className={styles.logoBox}>
            <Image src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705015586/RGV/rgv-logo_y8mwt8.png'}
              alt='logo'
              fill
              sizes='1'
            />
          </Link>

          <nav style={{ left: menuPosition }}>
            <MdMenu onClick={toggleMenu} />
            <Link href={'/'}> <span>Home</span> </Link>
            <Link href={'/'}> <span>About Us</span> </Link>
            <Link href={'/gallery'}> <span>Gallery</span> </Link>
            <Link href={'/'}> <span>Blog</span> </Link>
            <Link href={'#footerBox'}> <span>Contact</span> </Link>
            <Link href={'/'} className={styles.inquireBox}> <span>Inquire</span> </Link>
          </nav>
        </div>
      </section>
    </section>
  );
}

export default TopNav;