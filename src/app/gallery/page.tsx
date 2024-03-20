'use client'
import TopNav from '@/components/TopNav/TopNav';
import styles from './gallery.module.css';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import { MdArrowBack, MdArrowForward, MdNorth, MdPlayArrow, MdSouth } from 'react-icons/md';
import three from '../../../public/3d.jpg';

const Gallery = () => {
  const [popupToggled, setPopupToggled] = useState(false);
  const gallerySwiper = useRef<{ swiper: any }>({ swiper: null });
  const tagSwiper = useRef<{ swiper: any }>({ swiper: null });


  const galleryList = [
    { tag: 'Bedroom', src: "https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695725/RGV/bed5_vwwu8w.jpg" },
    { tag: 'Bedroom', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695727/RGV/dining_s4qaop.jpg' },
    { tag: 'Bedroom', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695726/RGV/living_ja7hnm.jpg' },
    { tag: 'Washroom', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695723/RGV/bath1_kprxch.jpg' },
    { tag: 'Balcony', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695728/RGV/balcony_fyfudq.jpg' },
    { tag: 'Kitchen', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695724/RGV/kit1_xkppcj.jpg' },
    { tag: 'Pool View', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695727/RGV/poolView2_psdiy1.jpg' },
    { tag: 'Pool View', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695727/RGV/poolView1_srgrq0.jpg' },
    { tag: 'Pool View', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695728/RGV/poolView3_doq8uf.jpg' },
    { tag: 'Landscape', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695727/RGV/comView4_k5coyb.jpg' },
    { tag: 'Closet', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695725/RGV/closet1_ot5cab.jpg' },
    { tag: 'Living Room', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695726/RGV/living4_sgfz7c.jpg' },
    { tag: 'Entrance', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695724/RGV/frontView1_vba9rx.jpg' },
    { tag: 'Car Park', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695726/RGV/parkView1_yx1fin.jpg' },
    { tag: 'Washroom', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695724/RGV/bath2_frtrru.jpg' },
    { tag: 'Bedroom', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695726/RGV/living2_sfipyh.jpg' },
    { tag: 'Front View', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695727/RGV/comView5_aowvt2.jpg' },
    { tag: 'Landscape', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695728/RGV/comView6_vqsybj.jpg' },
    { tag: 'Landscape', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695726/RGV/comView2_st9ut2.jpg' },
    { tag: 'Landscape', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695727/RGV/comView1_eubbrw.jpg' },
    { tag: 'Washroom', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706798074/RGV/1327552442_gbqpvs.webp' },
    { tag: 'Washroom', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706797842/RGV/1327553651_zzvzqw.webp' },
    { tag: 'Kitchen', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706798010/RGV/1325260447_oorqsv.webp' },
    { tag: 'Kitchen', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706797527/RGV/kitchen2_glpasl.webp' },
    { tag: 'Kitchen', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706797868/RGV/1327553663_c87giw.webp' },
    { tag: 'Kitchen', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706797505/RGV/kitchen_njoob7.webp' },
  ]

  const toggleGallery = (index: number) => {
    if (gallerySwiper.current && tagSwiper.current) {
      tagSwiper.current.swiper.slideTo(index);
      gallerySwiper.current.swiper.slideTo(index);
    }
    setPopupToggled(true);
  }

  const tagSwiperNext = () => {
    tagSwiper.current.swiper.slideNext();
    gallerySwiper.current.swiper.slideNext();
  }

  const tagSwiperPrev = () => {
    tagSwiper.current.swiper.slidePrev();
    gallerySwiper.current.swiper.slidePrev();
  }

  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //   })
  // })

  return (
    <main className={styles.galleryBox}>
      <TopNav />

      <section className={styles.galleryCon}>
        <header>
          <h4 className='caps'>Our Gallery <sub></sub></h4>
          <small>Click to View</small>
          <Link href={'/slideshow'}>
            <button>Slide show <MdPlayArrow /></button>
          </Link>
        </header>


        <section className={styles.imgBoxHolder}>
          <section className={styles.imgBox}>
            <section className={styles.set1}>
              <div data-aos="fade-up" onClick={() => { toggleGallery(0) }}>
                <Image alt='' fill sizes='1' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695725/RGV/bed5_vwwu8w.jpg'} />
                <span style={{ display: 'none' }}>Bedroom</span>
              </div>
              <div data-aos="fade-up" onClick={() => { toggleGallery(1) }}>
                <Image alt='' fill sizes='1' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695727/RGV/dining_s4qaop.jpg'} />
                <span style={{ display: 'none' }}>Bedroom</span>
              </div>
              <div data-aos="fade-up" onClick={() => { toggleGallery(2) }}>
                <Image alt='' fill sizes='1' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695726/RGV/living_ja7hnm.jpg'} />
                <span style={{ display: 'none' }}>Bedroom</span>
              </div>
            </section>

            <section className={styles.set2}>
              <div data-aos="fade-up" onClick={() => { toggleGallery(3) }}>
                <Image alt='' fill sizes='1' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695723/RGV/bath1_kprxch.jpg'} />
                <span style={{ display: 'none' }}>Washroom</span>
              </div>
            </section>

            <section className={styles.set3}>
              <div data-aos="fade-up" onClick={() => { toggleGallery(4) }}>
                <Image alt='' fill sizes='1' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695728/RGV/balcony_fyfudq.jpg'} />
                <span style={{ display: 'none' }}>Balcony</span>
              </div>
              <div data-aos="fade-up" onClick={() => { toggleGallery(5) }}>
                <Image alt='' fill sizes='1' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695724/RGV/kit1_xkppcj.jpg'} />
                <span style={{ display: 'none' }}>Kitchen</span>
              </div>
            </section>
          </section>
          <section className={styles.imgBox4}>
            <div data-aos="fade-up" onClick={() => { toggleGallery(6) }}>
              <Image alt='' fill sizes='1' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695727/RGV/poolView2_psdiy1.jpg'} />
              <span style={{ display: 'none' }}>Pool View</span>
            </div>
            <div data-aos="fade-up" onClick={() => { toggleGallery(7) }}>
              <Image alt='' fill sizes='1' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695727/RGV/poolView1_srgrq0.jpg'} />
              <span style={{ display: 'none' }}>Pool View</span>
            </div>
            <div data-aos="fade-up" onClick={() => { toggleGallery(8) }}>
              <Image alt='' fill sizes='1' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695728/RGV/poolView3_doq8uf.jpg'} />
              <span style={{ display: 'none' }}>Pool View</span>
            </div>
            <div data-aos="fade-up" onClick={() => { toggleGallery(9) }}>
              <Image alt='' fill sizes='1' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695727/RGV/comView4_k5coyb.jpg'} />
              <span style={{ display: 'none' }}>Landscape</span>
            </div>
          </section>

          <section className={styles.imgBox2}>
            <section className={styles.set2}>
              <div data-aos="fade-up" onClick={() => { toggleGallery(10) }}>
                <Image alt='' fill sizes='1' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695725/RGV/closet1_ot5cab.jpg'} />
                <span style={{ display: 'none' }}>Closet</span>
              </div>
            </section>




            <section className={styles.set3}>
              <div data-aos="fade-up" onClick={() => { toggleGallery(11) }}>
                <Image alt='' fill sizes='1' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695726/RGV/living4_sgfz7c.jpg'} />
                <span style={{ display: 'none' }}>Living Room</span>
              </div>

              <div data-aos="fade-up" onClick={() => { toggleGallery(12) }}>
                <Image alt='' fill sizes='1' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695724/RGV/frontView1_vba9rx.jpg'} />
                {/* <span style={{ display: 'none' }}>Front View</span> */}
              </div>
            </section>
            <section className={styles.set1}>
              <div data-aos="fade-up" onClick={() => { toggleGallery(13) }}>
                <Image alt='' fill sizes='1' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695726/RGV/parkView1_yx1fin.jpg'} />
                <span style={{ display: 'none' }}>Car Park</span>
              </div>
              <div data-aos="fade-up" onClick={() => { toggleGallery(14) }}>
                <Image alt='' fill sizes='1' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695724/RGV/bath2_frtrru.jpg'} />
                <span style={{ display: 'none' }}>Washroom</span>
              </div>
              <div data-aos="fade-up" onClick={() => { toggleGallery(15) }}>
                <Image alt='' fill sizes='1' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695726/RGV/living2_sfipyh.jpg'} />
                <span style={{ display: 'none' }}>Bedroom</span>
              </div>
            </section>
          </section>

          <section className={styles.imgBox4}>
            <div data-aos="fade-up" onClick={() => { toggleGallery(16) }}>
              <Image alt='' fill sizes='1' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695727/RGV/comView5_aowvt2.jpg'} />
              {/* <span style={{ display: 'none' }}>Front View</span> */}
            </div>
            <div data-aos="fade-up" onClick={() => { toggleGallery(17) }}>
              <Image alt='' fill sizes='1' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695728/RGV/comView6_vqsybj.jpg'} />
              <span style={{ display: 'none' }}>Landscape</span>
            </div>
            <div data-aos="fade-up" onClick={() => { toggleGallery(18) }}>
              <Image alt='' fill sizes='1' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695726/RGV/comView2_st9ut2.jpg'} />
              <span style={{ display: 'none' }}>Landscape</span>
            </div>

            <div data-aos="fade-up" onClick={() => { toggleGallery(19) }}>
              <Image alt='' fill sizes='1' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695727/RGV/comView1_eubbrw.jpg'} />
              <span style={{ display: 'none' }}>Landscape</span>
            </div>
          </section>

          <section className={styles.imgBox2}>
            <section className={styles.set2}>
              <div data-aos="fade-up" onClick={() => { toggleGallery(20) }}>
                <Image alt='' fill sizes='1' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706798074/RGV/1327552442_gbqpvs.webp'} />
                <span style={{ display: 'none' }}>Washroom</span>
              </div>
            </section>


            <section className={styles.set3}>
              <div data-aos="fade-up" onClick={() => { toggleGallery(21) }}>
                <Image alt='' fill sizes='1' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706797842/RGV/1327553651_zzvzqw.webp'} />
                <span style={{ display: 'none' }}>Washroom</span>
              </div>
              <div data-aos="fade-up" onClick={() => { toggleGallery(22) }}>
                <Image alt='' fill sizes='1' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706798010/RGV/1325260447_oorqsv.webp'} />
                <span style={{ display: 'none' }}>Kitchen</span>
              </div>
            </section>
            <section className={styles.set1}>
              <div data-aos="fade-up" onClick={() => { toggleGallery(23) }}>
                <Image alt='' fill sizes='1' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706797527/RGV/kitchen2_glpasl.webp'} />
                <span style={{ display: 'none' }}>Kitchen</span>
              </div>
              <div data-aos="fade-up" onClick={() => { toggleGallery(24) }}>
                <Image alt='' fill sizes='1' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706797868/RGV/1327553663_c87giw.webp'} />
                <span style={{ display: 'none' }}>Kitchen</span>
              </div>
              <div data-aos="fade-up" onClick={() => { toggleGallery(25) }}>
                <Image alt='' fill sizes='1' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706797505/RGV/kitchen_njoob7.webp'} />
                <span style={{ display: 'none' }}>Kitchen</span>
              </div>
            </section>
          </section>
        </section>
      </section>


      <section className={styles.popupBox} style={popupToggled ? { display: 'flex' } : { display: 'none' }}>
        <section className={styles.sheet} onClick={() => setPopupToggled(false)} ></section>
        <div className={styles.popup}>
          <section className={styles.tagBoxHolder}>
            <Swiper
              direction={'vertical'}
              speed={600}
              ref={tagSwiper}
              style={{ width: '100%', height: '100%' }}
              allowTouchMove={false}
            >
              {galleryList.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className={styles.tagBox}>
                    <p>
                      <span className='caps'>{item.tag}</span>
                      <small>{item.tag}</small>
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <nav>
              <MdNorth onClick={() => tagSwiperPrev()} />
              <MdSouth onClick={() => tagSwiperNext()} />
            </nav>
          </section>

          <Swiper
            direction={'vertical'}
            speed={500}
            ref={gallerySwiper}
            className={styles.gallerySwiper}
            allowTouchMove={false}
          >
            {galleryList.map((item, i) => (
              <SwiperSlide key={i}>
                <div className={styles.imgBox}>
                  <Image alt='' fill sizes='1' src={item.src} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* <section className={styles.thirdBox}>
        <Image alt='' src={three} width={300} height={200} />
      </section> */}

      <Footer />
    </main>
  );
}

export default Gallery;