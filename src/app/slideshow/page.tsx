'use client'
import { MdArrowBackIos, MdInfo, MdInfoOutline, MdRadioButtonChecked } from 'react-icons/md';
import styles from './slideshow.module.css';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import Image from 'next/image';

const SlideShow = () => {
  const featureList = [
    '3 Bedrooms per apartment',
    'Living room',
    'Kitchen',
    'Dining place',
    'Pool area',
    'Parking area',
    'Common sitting area',
    'Air conditioned system',
    '4 Washrooms per apartment',
    'Balcony',
    'Elevator',
    'Gym'
  ];

  const slideList = [
    {tag : 'Front View', src : 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705862528/RGV/FrontViewMin_o622y6.jpg'},
    {tag : 'Garden View', src : 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705862653/RGV/GardenViewBig_eos8dk.jpg'},

    {tag : 'Balcony', src : 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705863313/RGV/IMG_0080_jhvpwg.jpg'},
    {tag : 'Pool View', src : 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705862837/RGV/IMG_0135_lcpa5t.jpg'},
    {tag : 'Pool View', src : 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705862858/RGV/IMG_0134_th38no.jpg'},
    {tag : 'Pool View', src : 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705863007/RGV/IMG_0133_jjmzxm.jpg'},
  

    {tag : 'Compound View', src : 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705863109/RGV/IMG_0100_wky8ai.jpg'},


    {tag : 'Dining Place', src : 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695727/RGV/dining_s4qaop.jpg'},
    {tag : 'Landscape View', src : 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695727/RGV/comView4_k5coyb.jpg'},
    {tag : 'Landscape View', src : 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695727/RGV/comView5_aowvt2.jpg'},
    {tag : 'Pool View', src : 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695727/RGV/poolView1_srgrq0.jpg'},
    {tag : 'Car Park', src : 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695726/RGV/parkView1_yx1fin.jpg'},
    {tag : 'Living Room', src : 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695726/RGV/living4_sgfz7c.jpg'},
    {tag : 'Kitchen', src : 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695726/RGV/kit4_epry84.jpg'},
    {tag : 'Landscape View', src : 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695726/RGV/comView2_st9ut2.jpg'},
    {tag : 'Living Room', src : 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695726/RGV/living2_sfipyh.jpg'},
    {tag : 'Common Sitting Area', src : 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695726/RGV/commonView3_xqxzct.jpg'},
    {tag : 'Living Room', src : 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695726/RGV/living_ja7hnm.jpg'}
]


const handleImageLoader =()=>{
  console.log('image Loader');
}

  return (
    <main className={styles.slideshowBox}>
      <Image alt='' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705015586/RGV/rgv-logo_y8mwt8.png'} height={50} width={80}/>

      <header>
        <Link href={'/gallery'}>
          <MdArrowBackIos />
          <span>Back To Gallery</span>
        </Link>
      </header>

      <section className={styles.slideTray}>
        <div className={styles.infoBox}>
          <strong className='caps'>Property Features</strong>
          <article>
            {featureList.map((feature, i) => (
              <p key={i}>
                <MdRadioButtonChecked />
                <span>{feature}</span>
              </p>
            ))}
          </article>

          <div className={styles.extra}>
            <MdInfoOutline />
            <small>
              Room Features are fully customizable to suit your preferences.
            </small>
            <Link href={'/'}>
            <button>Inquire now</button>
            </Link>
          </div>
        </div>
        <Swiper
          // modules={[Autoplay]}
          // loop={true}
          speed={1000}
          // ref={gallerySwiper}
          // slidesPerView={gallerySlideNum}
          // spaceBetween={gallerySlideGap}
          // autoplay={{ delay: 3500, disableOnInteraction: true, pauseOnMouseEnter: true }}
          // style={{ width: '100%' }}
          className={styles.showSwiper}
        >
          {/* {slideList.map((item, i) => ( */}
            <SwiperSlide>
              <div className={styles.slideBox}>
                <Image fill alt='' src={slideList[0].src} sizes='1' onLoad={handleImageLoader} />
              </div>
            </SwiperSlide>
          {/* ))} */}
        </Swiper>
      </section>
    </main>
  );
}

export default SlideShow;