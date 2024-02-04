'use client'
import { MdArrowBackIos, MdArrowForward, MdArrowForwardIos, MdInfo, MdInfoOutline, MdRadioButtonChecked } from 'react-icons/md';
import styles from './slideshow.module.css';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import Image from 'next/image';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { featureList } from '@/external/lists';
import TopNav from '@/components/TopNav/TopNav';

const SlideShow = () => {
  const router = useRouter();
  const showSwiper = useRef<{ swiper: any }>({ swiper: null });

  const slideList = [
    { tag: 'Bedroom', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706000920/RGV/IMG_0026_naknxg.jpg' },
    { tag: 'Bedroom', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706001082/RGV/IMG_0029_ta0bxb.jpg' },
    { tag: 'Bedroom', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706001318/RGV/IMG_0052_vlzwma.jpg' },

    { tag: 'Washroom', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706001399/RGV/IMG_0044_xkizxb.jpg' },

    { tag: 'Closet', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706001519/RGV/IMG_0061_s2zbfc.jpg' },

    { tag: 'Living Room', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706000350/RGV/IMG_0054_fexs0p.jpg' },
    { tag: 'Living Room', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706000621/RGV/IMG_0079_collcm.jpg' },
    { tag: 'Living Room', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706000490/RGV/IMG_0055_idrkhr.jpg' },

    { tag: 'Dining Place', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705999801/RGV/IMG_0078_pveoz6.jpg' },

    { tag: 'Kitchen', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705999675/RGV/kitchen4min_o4mds3.jpg' },
    { tag: 'Kitchen', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706003219/RGV/IMG_0083_hd79ir.jpg' },
    { tag: 'Kitchen', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706003292/RGV/IMG_0084_sbeseh.jpg' },

    { tag: 'Balcony', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705863313/RGV/IMG_0080_jhvpwg.jpg' },

    { tag: 'Elevator', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706001605/RGV/IMG_0086_caaod3.jpg' },
    { tag: 'Floor View', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706001640/RGV/IMG_0085_ltjp73.jpg' },

    { tag: 'Common Sitting Area', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706000555/RGV/IMG_0057_zj6w7q.jpg' },

    { tag: 'Car Park', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706000245/RGV/IMG_0094_y4iswr.jpg' },

    { tag: 'Pool View', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705862837/RGV/IMG_0135_lcpa5t.jpg' },
    { tag: 'Pool View', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705862858/RGV/IMG_0134_th38no.jpg' },
    { tag: 'Pool View', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705863007/RGV/IMG_0133_jjmzxm.jpg' },
    { tag: 'Pool View', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695727/RGV/poolView1_srgrq0.jpg' },

    { tag: 'Front View', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705862528/RGV/FrontViewMin_o622y6.jpg' },
    { tag: 'Garden View', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705862653/RGV/GardenViewBig_eos8dk.jpg' },

    { tag: 'Compound View', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706000711/RGV/IMG_0100_1_vn7dr7.jpg' },
    { tag: 'Landscape View', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706001866/RGV/IMG_0058_knb4ks.jpg' },
    { tag: 'Landscape View', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705999984/RGV/IMG_0097_1_lrdrzi.jpg' },
    { tag: 'Landscape View', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706000145/RGV/IMG_0060_ts1wgj.jpg' },
    { tag: 'Landscape View', src: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706000421/RGV/IMG_0098_1_ku4o9s.jpg' },
  ]

  const showSwiperPrev = () => {
    if (showSwiper.current) {
      showSwiper.current.swiper.slidePrev();
    }
  }
  const showSwiperNext = () => {
    if (showSwiper.current) {
      showSwiper.current.swiper.slideNext();
    }
  }

  const setTarget =(i : number)=>{
    showSwiper.current.swiper.slideTo(i);
  }
  return (
    <section>
      <TopNav/>
    <main className={styles.slideshowBox}>
      <section className={styles.slideTray}>
        <div className={styles.infoBox}>
          <strong className='caps'>Property Features</strong>
          <article>
            {featureList.map((feature, i) => (
              <p key={i} onClick={()=>{setTarget(feature.target)}}>
                <MdRadioButtonChecked style={{color : 'var(--pass)'}} />
                <span>{feature.tag}</span>
                <MdArrowForward/>
              </p>
            ))}
          </article>

          <div className={styles.extra}>
            <MdInfoOutline />
            <small>
              Although full furnished room Features are still fully customizable to suit your preferences.
            </small>
            <Link href={'/'}>
              <button>Inquire now</button>
            </Link>
          </div>
        </div>
        <Swiper
          modules={[Autoplay, EffectFade]}
          // effect={'fade'}
          loop={true}
          speed={1000}
          ref={showSwiper}
          autoplay={{ delay: 3500, disableOnInteraction: true, pauseOnMouseEnter: true }}
          className={styles.showSwiper}
        >
          {slideList.map((item, i) => (
            <SwiperSlide key={i}>
              <div className={styles.slideBox}>
                <Image fill alt='' src={item.src} sizes='1' />
                <legend>{item.tag}</legend>
              </div>
            </SwiperSlide>
          ))}
          <nav>
            <MdArrowBackIos onClick={showSwiperPrev} />
            <MdArrowForwardIos onClick={showSwiperNext} />
          </nav>
        </Swiper>
      </section>
    </main>
    </section>
  );
}

export default SlideShow;