import Image from 'next/image';
import styles from './loader.module.css';
const Loader = () => {
  return (
    <section className={styles.loaderPage}>
      <div className={styles.loaderBox}>
        {/* <div className={styles.logoBox}>
          <Image src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705012545/RGV/rgvLoader_yutywg.png'} sizes='1' alt='' fill />
        </div> */}


        <Image src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705015586/RGV/rgv-logo_y8mwt8.png'}
          alt='logo'
          width={100}
          height={40}
          // fill
          className='contain'
          sizes='1'
        />

        <strong className={styles.logoText}>
          <span style={{ color: 'var(--blue)' }}>Royal</span>
          <span style={{ color: 'var(--green)' }}>Golf</span>
          <span style={{ color: 'var(--blue)' }}>Views</span>
        </strong>

        {/* <div className={styles.loader}>
          <legend></legend>
          <legend></legend>
          <legend></legend>
        </div> */}
      </div>
    </section>
  );
}

export default Loader;