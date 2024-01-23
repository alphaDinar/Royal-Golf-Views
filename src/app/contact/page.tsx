import TopNav from '@/components/TopNav/TopNav';
import styles from './contact.module.css';
import { MdLocationPin, MdMailOutline, MdPhone, MdSchedule } from 'react-icons/md';

const Contact = () => {
  return (
    <main className={styles.contactBox}>
      <TopNav />

      <section className={styles.contactCon}>
        <header>
          <h4 className='caps'>Inquire <sub></sub></h4>
        </header>

        <section className={styles.formBox}>
          <form className={styles.contactForm}>
            <input type="text" placeholder='Your Name' />
            <input type="text" name="" placeholder='Phone Number' />
            <input type="text" name="" placeholder='Your E-mail' />
            <textarea name=""></textarea>

            <button>Submit</button>
          </form>
          <section className={styles.sideBox}>
            <article>
              <strong className='caps'>Info</strong>
              <p><MdMailOutline/> <span>sales@royalgolfviews.online</span></p>
              <p><MdPhone/> <span>+233 (0)544 339 762</span></p>
              <p><MdLocationPin/> <span>34-35, John Owusu Addo Close, Kumasi</span></p>
              <p><MdSchedule/> <span>10AM - 7PM</span> </p>
            </article>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.7896554104227!2d-1.6257415251668679!3d6.672964993322162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96c5ebefb6cd%3A0x86a41423889ab7e1!2sRoyal%20Golf%20Views%20Luxury%20Apartments!5e0!3m2!1sen!2sgh!4v1705084024055!5m2!1sen!2sgh"
        width="100%" height="200px"
        loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </section>
        </section>
      </section>
    </main>
  );
}

export default Contact;