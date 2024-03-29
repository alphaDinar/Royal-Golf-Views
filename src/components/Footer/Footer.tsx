'use client'
import { FaFacebookF, FaGooglePlus, FaGooglePlusG, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import styles from './footer.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  })

  return (
    <footer id='footerBox' className={styles.footer}>
      <header>
        <div className={styles.logoBox}>
          <Image fill src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705012545/RGV/rgvLoader_yutywg.png'} alt="" />
        </div>
        <h4 className={styles.logoText}>
          <span style={{ color: 'var(--blue)' }}>Royal</span>
          <span style={{ color: 'var(--green)' }}>Golf</span>
          <span style={{ color: 'var(--blue)' }}>Views</span>
        </h4>
      </header>
      <section className={styles.mid}>
        <article data-aos="fade-up">
          <h3>Apartments</h3>
          <small>Royal Golf Views has apartments and penthouses for sale and rent in Ghana.</small>
          <div>
            <a href={'https://www.google.com/maps/search/?api=1&query=Royal Golf Views Luxury Apartments, kumasi'} target='_blank'>
              <span>ADDRESS</span>
              <small>34-35 John Owusu Addo Close, Ridge, Kumasi, Ghana</small>
            </a>
            <a target='_blank' href='https://www.google.com/maps/search/?api=1&query=David Walter Ghana Limited, Accra, Ghana'>
              <span >ADDRESS</span>
              <small>AVA House, 3rd Floor C66/2 Kojo Thompson Rd Adabraka, Accra, Ghana</small>
            </a>
          </div>
        </article>
        <article data-aos="fade-up">
          <h3>Contact Agent</h3>
          <small>Royal Golf Views has apartments and penthouses for sale and rent in Ghana.</small>
          <Link href={'tel:233544339762'}>
            <span >phone</span>
            <small>+233 544 339 762</small>
          </Link>
        </article>
        <article data-aos="fade-up">
          <h3>For More Info</h3>
          <Link href={'/'}>
            <span >MAIL</span>
            <small>sales@royalgolfviews.com</small>
          </Link>
          <Link href={''}>
            <span >WEBSITE</span>
            <small>royalgolfviews.com</small>
          </Link>
        </article>
        {/* <article data-aos="fade-up">
          <h3>Get In Touch</h3>
          <form>
            <div>
              <input type="text" placeholder="Your name" />
            </div>
            <div>
              <input type="text" placeholder="Your phone number" />
            </div>
            <div>
              <input type="text" placeholder="Your e-mail" />
            </div>
            <div>
              <textarea name=""></textarea>
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </article> */}
      </section>

      <hr />

      <section className={styles.socialBox}>
        <p>
          <FaFacebookF />
        </p>
        <p >
          <FaInstagram />
        </p>
        <p>
          <FaGooglePlusG />
        </p>
      </section>
      <hr />

      <Link target='_blank' href={'https://www.yotabyt.com/'} className='yotaTag'>Powered By Yotabyt</Link>
    </footer>
  );
}

export default Footer;