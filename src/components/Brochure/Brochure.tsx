import Image from 'next/image';
import styles from './brochure.module.css';
import { MdMailOutline, MdOutlineLanguage } from 'react-icons/md';

const Brochure = () => {
  const scape = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695726/RGV/comView3_mppmik.jpg';
  const code = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1710871044/RGV/adobe_RGV_Qr_Code_gviufl.png';

  return (
    <section className={styles.box}>
      <div className={styles.imgBox}>
        <Image alt='' src={scape} fill sizes='auto' />
      </div>
      <div className={styles.con} >
        <p>
          <Image src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705015586/RGV/rgv-logo_y8mwt8.png'}
            alt='logo'
            width={70}
            height={40}
            className='contain'
            sizes='1'
          />
          <strong className={styles.logoText}><span>Royal</span> <span>Golf</span> <span>Views</span> </strong>
        </p>
        <p>
          <small style={{ fontSize: '1rem;' }}>Experience Luxury Living at its best.</small>
          <sub className={styles.spaceBox}>Spacious <span className="cash">3</span> bedroom apartments in Ridge, Kumasi.</sub>
        </p>

        <span className={styles.rentBox}>For Rent & Sale</span>
      </div>
      <div className={styles.low}>
        <article>
          <strong className="cash">+233 54 433 9762</strong>
          <hr />
          <p>
            <span><MdOutlineLanguage /> www.royalgolfviews.com</span>
            <span><MdMailOutline />  sales@royalgolfviews.com</span>
          </p>
        </article>

        <Image alt='' src={code} width={100} height={100} />
        {/* <img src="../qrcode.png" alt="" width="100" height="100"> */}
      </div>
    </section>
  );
}

export default Brochure;