'use client'
import TopNav from '@/components/TopNav/TopNav';
import styles from './gallery.module.css';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import { MdPlayArrow } from 'react-icons/md';

const Gallery = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  })

  return (
    <main className={styles.galleryBox}>
      <TopNav />

      <section className={styles.galleryCon}>
        <header>
          <h4 className='caps'>Our Gallery <sub></sub></h4>

          <Link href={''}>
          <button>Slide show <MdPlayArrow/></button>
          </Link>
        </header>


        <section className={styles.imgBoxHolder}>
          <section className={styles.imgBox}>
            <section className={styles.set1}>
              <div data-aos="fade-up">
                <Image alt='' fill src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695725/RGV/bed5_vwwu8w.jpg'} />
                <span style={{ display: 'none' }}>Bedroom</span>
              </div>
              <div data-aos="fade-up">
                <Image alt='' fill src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695727/RGV/dining_s4qaop.jpg'} />
                <span style={{ display: 'none' }}>Bedroom</span>
              </div>
              <div data-aos="fade-up">
                <Image alt='' fill src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695726/RGV/living_ja7hnm.jpg'} />
                <span style={{ display: 'none' }}>Bedroom</span>
              </div>
            </section>

            <section className={styles.set2}>
              <div data-aos="fade-up">
                <Image alt='' fill src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695723/RGV/bath1_kprxch.jpg'} />
                <span style={{ display: 'none' }}>Washroom</span>
              </div>
            </section>

            <section className={styles.set3}>
              <div data-aos="fade-up">
                <Image alt='' fill src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695728/RGV/balcony_fyfudq.jpg'} />
                <span style={{ display: 'none' }}>Balcony</span>
              </div>
              <div data-aos="fade-up">
                <Image alt='' fill src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695724/RGV/kit1_xkppcj.jpg'} />
                <span style={{ display: 'none' }}>Balcony</span>
              </div>
            </section>
          </section>
          <section className={styles.imgBox4}>

            <div data-aos="fade-up">
              <Image alt='' fill src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695727/RGV/poolView2_psdiy1.jpg'} />
              <span style={{ display: 'none' }}>Balcony</span>
            </div>
            <div data-aos="fade-up">
              <Image alt='' fill src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695727/RGV/poolView1_srgrq0.jpg'} />
              <span style={{ display: 'none' }}>Balcony</span>
            </div>
            <div data-aos="fade-up">
              <Image alt='' fill src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695728/RGV/poolView3_doq8uf.jpg'} />
              <span style={{ display: 'none' }}>Balcony</span>
            </div>

            <div data-aos="fade-up">
              <Image alt='' fill src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695727/RGV/comView4_k5coyb.jpg'} />
              <span style={{ display: 'none' }}>Balcony</span>
            </div>

          </section>

          <section className={styles.imgBox2}>
            <section className={styles.set2}>
              <div data-aos="fade-up">
                <Image alt='' fill src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695725/RGV/closet1_ot5cab.jpg'} />
                <span style={{ display: 'none' }}>Closet</span>
              </div>
            </section>

            <section className={styles.set3}>
              <div data-aos="fade-up">
                <Image alt='' fill src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695726/RGV/living4_sgfz7c.jpg'} />
                <span style={{ display: 'none' }}>Bedroom</span>
              </div>
              <div data-aos="fade-up">
                <Image alt='' fill src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695724/RGV/frontView1_vba9rx.jpg'} />
                <span style={{ display: 'none' }}>Front View</span>
              </div>
            </section>
            <section className={styles.set1}>
              <div data-aos="fade-up">
                <Image alt='' fill src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695726/RGV/parkView1_yx1fin.jpg'} />
                <span style={{ display: 'none' }}>Car Park</span>
              </div>
              <div data-aos="fade-up">
                <Image alt='' fill src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695724/RGV/bath2_frtrru.jpg'} />
                <span style={{ display: 'none' }}>Washroom</span>
              </div>
              <div data-aos="fade-up">
                <Image alt='' fill src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695726/RGV/living2_sfipyh.jpg'} />
                <span style={{ display: 'none' }}>Bedroom</span>
              </div>
            </section>
          </section>

          <section className={styles.imgBox4}>

            <div data-aos="fade-up">
              <Image alt='' fill src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695727/RGV/comView5_aowvt2.jpg'} />
              <span style={{ display: 'none' }}>Balcony</span>
            </div>
            <div data-aos="fade-up">
              <Image alt='' fill src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695728/RGV/comView6_vqsybj.jpg'} />
              <span style={{ display: 'none' }}>Compound View</span>
            </div>
            <div data-aos="fade-up">
              <Image alt='' fill src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695726/RGV/comView2_st9ut2.jpg'} />
              <span style={{ display: 'none' }}>Balcony</span>
            </div>

            <div data-aos="fade-up">
              <Image alt='' fill src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695727/RGV/comView1_eubbrw.jpg'} />
              <span style={{ display: 'none' }}>Balcony</span>
            </div>

          </section>
        </section>


      </section>
        <Footer/>
    </main>
  );
}

export default Gallery;