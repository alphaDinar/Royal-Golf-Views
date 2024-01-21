import Image from 'next/image';
import styles from './loader.module.css';
const Loader = () => {
  return ( 
    <section className={styles.loaderPage}>
      <div className={styles.loaderBox}>
        <div className={styles.logoBox}>
          <Image src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705012545/RGV/rgvLoader_yutywg.png'} sizes='1' alt='' fill />
        </div>

        <strong className='caps'>Royal Golf Views</strong>

        <div className={styles.loader}>
          <legend></legend>
          <legend></legend>
          <legend></legend>
        </div>
      </div>
    </section>
   );
}
 
export default Loader;