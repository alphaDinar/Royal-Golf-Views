import TopNav from '@/components/TopNav/TopNav';
import styles from './about.module.css';
import Image from 'next/image';
import Footer from '@/components/Footer/Footer';

const About = () => {
  return (
    <main className={styles.aboutBox}>
      <TopNav />

      <header className={styles.topHeader}>
        <h4 className='caps'>About Us <sub></sub></h4>
      </header>
      <section className={styles.topBox}>
        <Image alt='top' fill src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705857092/RGV/about2_ksomv9.jpg'} />

        <article>
          <strong className='tagCaps'>Est. 2021</strong>
          <Image alt='logo' height={80} width={80} src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705012545/RGV/rgvLoader_yutywg.png'} />
        </article>
      </section>


      <section className={styles.infoBox}>
        <article>
          <h3>A Life Beyond Compare <sub></sub></h3>
          <p>
            <strong>
              Welcome to Royal Gold View: Where Luxury Meets Majesty</strong>
            At Royal Gold View, we understand that luxury extends beyond the four walls of your home.
            That&apos;s why we have curated a collection of amenities that cater to your every need and desire.
            Dive into the infinity pool as the sun paints the water gold, lose yourself in the state-of-the-art fitness center, or indulge in a rejuvenating treatment at the spa.
            Host unforgettable gatherings in our beautifully appointed social spaces, or simply unwind in the lush landscaped gardens, where the gentle breeze whispers secrets of serenity.
            Royal Gold View is not just a place to live; it&apos;s a lifestyle.
            It&apos;s a promise of every day waking up to a vista that takes your breath away, of coming home to a haven of comfort and elegance, and of living a life that unfolds like a story bathed in the golden glow of luxury.
          </p>
        </article>
        <article>
          <h3>Our Goal <sub></sub></h3>
          <p>
            <span>
              To curate homes, not just houses. We believe your living space should be an extension of yourself, a sanctuary that reflects your unique personality and aspirations. At Royal Gold View, every detail, from the spacious layouts to the premium finishes, is meticulously chosen to foster a sense of belonging and unparalleled comfort.
            </span>
            <span>
              To elevate the everyday. We understand that luxury lies not just in grand gestures, but also in the finer details. From the infinity pool shimmering under the golden sun to the meticulously landscaped gardens offering a haven of tranquility, every aspect of Royal Gold View is designed to elevate your day-to-day experience.
            </span>
            <span>
              To foster a community of like-minded individuals. Royal Gold View is more than just a collection of residences; it&apos;s a thriving community where residents can connect, share experiences, and forge lasting bonds. Our curated amenities and thoughtfully designed social spaces provide the perfect backdrop for fostering connections and creating memories that will last a lifetime.
            </span>
          </p>
        </article>
      </section>

      <Footer />
    </main>
  );
}

export default About;