'use client'
import Image from 'next/image';
import styles from './managerSidebar.module.css';
import Link from 'next/link';
import { MdDescription, MdMessage, MdPhone, MdPowerSettingsNew, MdSend } from 'react-icons/md';
import { usePathname } from 'next/navigation';

const ManagerSidebar = () => {
  const pathName = usePathname();

  console.log(pathName);

  return ( 
    <section className={styles.sidebar}>
      <header>
        <Image
        alt='golf'
        src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705012545/RGV/rgvLoader_yutywg.png'}
        height={100}
        width={100}
        />
      </header>

      <nav>
        <Link href={'blog'}><MdDescription/>  Blog</Link>
        <Link href={'contact'}><MdPhone/> Contact</Link>
        <Link href={'bulkSMS'}><MdMessage/> Bulk SMS</Link>
        <Link href={'bulkMail'}><MdSend/> Bulk E-Mail</Link>
      </nav>

      <footer>
        <MdPowerSettingsNew/>
      </footer>
    </section>
   );
}
 
export default ManagerSidebar;