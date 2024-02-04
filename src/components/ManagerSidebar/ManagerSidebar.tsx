'use client'
import Image from 'next/image';
import styles from './managerSidebar.module.css';
import Link from 'next/link';
import { MdDescription, MdMenu, MdMessage, MdPhone, MdPowerSettingsNew, MdSend } from 'react-icons/md';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { fireAuth } from '@/firebase/base';
import { GrAnnounce } from 'react-icons/gr';

const ManagerSidebar = () => {
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(fireAuth, (user) => {
      if (!user) {
        router.push('/manager/login');
      }
    })
  }, [router])

  const logoutUser =()=>{
    signOut(fireAuth);
    router.push('/manager/login');
  }

  return (
    <section className={styles.sidebar}>
      <MdMenu className={styles.menuTag} />
      <header>
        <Link href={'/manager'}>
          <Image
            alt='golf'
            src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705012545/RGV/rgvLoader_yutywg.png'}
            height={100}
            width={100}
          />
        </Link>
      </header>

      <nav>
        <Link href={'/manager/blog'}><MdDescription />  Blog</Link>
        <Link href={'/manager/testimonials'}><GrAnnounce/> Testimonials</Link>
        <Link href={'/manager/contact'}><MdPhone /> Contacts</Link>
        <Link href={'/manager/bulkSMS'}><MdMessage /> Bulk SMS</Link>
        <Link href={'/manager/bulkMail'}><MdSend /> Bulk E-Mail</Link>
      </nav>

      <footer onClick={logoutUser}>
        <MdPowerSettingsNew />
      </footer>
    </section>
  );
}

export default ManagerSidebar;