import TopNav from '@/components/TopNav/TopNav';
import styles from './pricing.module.css';
import { MdOutlineRealEstateAgent, MdRealEstateAgent } from 'react-icons/md';
import { TbHomeDollar } from 'react-icons/tb';
import Link from 'next/link';

const Pricing = () => {
  return (
    <main className={styles.pricingBox}>
      <TopNav />

      <section className={styles.pricingCon}>
        <header>
          <h4 className='caps'>Pricing <sub></sub></h4>
        </header>

        <section className={styles.prices}>
          <Link href={'tel:233544339762'} className={styles.price}>
            <TbHomeDollar/>

            <strong>For Rent</strong>

            <p>
              <sup>$</sup>
              <span>250.00</span>
              <small>/per night</small>
            </p>
          </Link>
          <Link href={'tel:233544339762'} className={styles.price}>
            <TbHomeDollar/>

            <strong>For Sale</strong>

            <p>
              <span style={{fontSize : '1.5rem'}}>+233 544 339 762</span>
              <small></small>
            </p>
          </Link>
        </section>
      </section>
    </main>
  );
}

export default Pricing;