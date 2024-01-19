'use client';
import styles from './home.module.css';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdAcUnit, MdArrowBackIos, MdArrowBackIosNew, MdArrowForward, MdDesignServices, MdFormatQuote, MdHandshake, MdHome, MdMenu, MdOutlineCoffeeMaker, MdOutlineElevator, MdOutlineFitnessCenter, MdOutlineMeetingRoom, MdOutlinePool, MdOutlineShower, MdOutlineSupportAgent, MdPersonOutline, MdRadioButtonChecked, MdSportsHandball, MdSupervisedUserCircle, MdTv, MdWater, MdWifi } from 'react-icons/md';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import { GiBarbecue } from 'react-icons/gi';
import { BsTelephone } from 'react-icons/bs';
import { TbDeviceCctv, TbFridge } from 'react-icons/tb';
import { IoMdShirt } from 'react-icons/io';
import { IoShirtOutline } from 'react-icons/io5';
import Footer from '@/components/Footer/Footer';
import Loader from '@/components/Loader/Loader';
import { collection, getDocs } from 'firebase/firestore';
import { fireStoreDB } from '@/firebase/base';


interface Post extends Record<string, any> { }

const Home = () => {
  const introVideoRef = useRef<HTMLVideoElement>(null);
  const featureImageRef = useRef<Array<HTMLImageElement | null>>([]);
  // useRef<Array<HTMLImageElement | null>>([]);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [menuToggled, setMenuToggled] = useState(false);
  const [menuPosition, setMenuPosition] = useState('-170px');
  const gallerySwiper = useRef<{ swiper: any }>({ swiper: null });
  const facilitySwiper = useRef<{ swiper: any }>({ swiper: null });
  const [gallerySlideNum, setGallerySlideNum] = useState(0);
  const [testimonialSlideNum, setTestimonialSlideNum] = useState(0);
  const [gallerySlideGap, setGallerySlideGap] = useState(25);
  const [posts, setPosts] = useState<Post[]>([]);



  const handleVideoLoad = () => {
    console.log('here');
    localStorage.setItem('loaded', '1');
    setIsVideoLoaded(true);
  };

  const toggleMenu = () => {
    if (menuToggled) {
      setMenuToggled(false);
      setMenuPosition('10px');
    } else {
      setMenuToggled(true);
      setMenuPosition('-170px');
    }
  }


  useEffect(() => {
    setMenuToggled(true);
    setMenuPosition('-170px');

    const getPosts = async () => {
      const postsTemp = (await getDocs(collection(fireStoreDB, '/Categories'))).docs;
      setPosts(postsTemp.map((el) => ({ id: el.id, ...el.data() }) as Post));
    };

    getPosts();


    if (typeof window != 'undefined') {
      if (window.innerWidth > 550) {
        setGallerySlideGap(25);
      } else {
        setGallerySlideGap(10);
      }

      if (window.innerWidth > 1400) {
        setGallerySlideNum(4);
      } else if (window.innerWidth < 1400 && window.innerWidth > 850) {
        setGallerySlideNum(3);
      } else if (window.innerWidth < 850 && window.innerWidth > 450) {
        setGallerySlideNum(2);
      } else if (window.innerWidth < 450 && window.innerWidth > 300) {
        setGallerySlideNum(2);
      } else if (window.innerWidth < 300) {
        setGallerySlideNum(1);
      }

      if (window.innerWidth > 650) {
        setTestimonialSlideNum(2)
      } else {
        setTestimonialSlideNum(1)
      }

      if(localStorage.getItem('loaded')){
        handleVideoLoad();
        console.log('got it')
      }

      if (introVideoRef.current) {
        if (introVideoRef.current.readyState >= 3) {
          handleVideoLoad();
        }
      }
    }



    // setTimeout(()=>{
    //   console.log('done')
    // }, 1000)
    // let featureImageRefChecker = 0;
    // if(featureImageRef.current){
    //   featureImageRef.current.forEach((el)=>{
    //     if(el?.complete){
    //       featureImageRefChecker += 1;
    //     }
    //   })
    // }
    // console.log(featureImageRefChecker);

  }, [introVideoRef])


  const gallerySwiperPrev = () => {
    if (gallerySwiper.current) {
      gallerySwiper.current.swiper.slidePrev();
    }
  }

  const gallerySwiperNext = () => {
    if (gallerySwiper.current) {
      gallerySwiper.current.swiper.slideNext();
    }
  }

  const facilitySwiperPrev = () => {
    if (facilitySwiper.current) {
      facilitySwiper.current.swiper.slidePrev();
    }
  }
  const facilitySwiperNext = () => {
    if (facilitySwiper.current) {
      facilitySwiper.current.swiper.slideNext();
    }
  }

  const featureList = [
    {
      img: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695728/RGV/balcony_fyfudq.jpg',
      tag: 'Balcony',
    },
    {
      img: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695727/RGV/poolView1_srgrq0.jpg',
      tag: 'Poolside',
    },
    {
      img: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695725/RGV/bed5_vwwu8w.jpg',
      tag: '3 Bedrooms',
    },
    {
      img: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695724/RGV/frontView1_vba9rx.jpg',
      tag: 'Front View',
    },
    {
      img: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695725/RGV/commonView1_stspgi.jpg',
      tag: 'Reception',
    },
    {
      img: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695723/RGV/elevator_gxwqwn.jpg',
      tag: 'Elevator',
    },
    {
      img: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695727/RGV/dining_s4qaop.jpg',
      tag: 'Dining Place',
    },
    {
      img: 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695724/RGV/kit1_xkppcj.jpg',
      tag: 'Kitchen',
    },
  ];

  const facilityList = [
    {
      icon: <MdPersonOutline />,
      tag: 'Service Area',
    },
    {
      icon: <MdOutlineElevator />,
      tag: 'Elevator',
    },
    {
      icon: <MdTv />,
      tag: 'DSTV',
    },
    {
      icon: <MdOutlineFitnessCenter />,
      tag: 'Gym Center',
    },
    {
      icon: <MdWater />,
      tag: 'Back Up Water Supply',
    },
    {
      icon: <TbDeviceCctv />,
      tag: 'Security Cameras',
    },
    {
      icon: <MdOutlineShower />,
      tag: 'Bathroom Fittings',
    },
    {
      icon: <TbFridge />,
      tag: 'Kitchen Fittings',
    },
    {
      icon: <MdOutlinePool />,
      tag: 'Pool Area',
    },
    {
      icon: <IoShirtOutline />,
      tag: 'Doors & Wardrobe',
    },
    {
      icon: <MdAcUnit />,
      tag: 'Heat & AC Units',
    },
    {
      icon: <MdSportsHandball />,
      tag: 'Playground',
    },
    {
      icon: <MdOutlineCoffeeMaker />,
      tag: 'Luxury Appliances',
    },
    {
      icon: <MdOutlineMeetingRoom />,
      tag: 'On-site Management Office',
    },
    {
      icon: <MdWifi />,
      tag: 'Fast Internet',
    },
    {
      icon: <MdOutlineSupportAgent />,
      tag: '24/7 Customer Service',
    },
    {
      icon: <GiBarbecue />,
      tag: 'Outdoor Barbecue Area',
    },
    {
      icon: <BsTelephone />,
      tag: 'Telephone Outlet',
    },
  ];




  return (
    <main>
      <section className={styles.headBox}>
        {/* <Image
        className={styles.placeholder}
        alt=''
        fill
        src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705704195/RGV/place_dhvsk3.jpg'}
        /> */}
        <video
          ref={introVideoRef}
          autoPlay
          loop
          muted
          onLoadedMetadata={handleVideoLoad}
          src='https://res.cloudinary.com/dvnemzw0z/video/upload/v1705012575/RGV/intro_euk6tk.mp4'
        />



        <section className={styles.headBoxCon}>
          <div className={styles.headBoxConNav}>

            <div className={styles.logoBox}>
              <Image src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705015586/RGV/rgv-logo_y8mwt8.png'}
                alt='logo'
                fill
                sizes='1'
              />
            </div>

            <nav style={{ left: menuPosition }}>
              <MdMenu onClick={toggleMenu} />
              <Link href={'/'}> <span>Home</span> </Link>
              <Link href={'/'}> <span>About Us</span> </Link>
              <Link href={'/gallery'}> <span>Gallery</span> </Link>
              <Link href={'/'}> <span>Blog</span> </Link>
              <Link href={'/'}> <span>Contact</span> </Link>
              <Link href={'/'} className={styles.inquireBox}> <span>Inquire</span> </Link>
            </nav>
          </div>


          <article className={styles.headBoxConText}>
            <strong>
              Live Like Royalty: Explore Luxury Homes.
            </strong>
            <small>
              Explore homes that ignite passion, inspire dreams, and make life unfold.
            </small>
          </article>


          <section className={styles.headBoxConExplore}>
            <p>
              <MdRadioButtonChecked />
              <strong>Location</strong>
              <span>Kumasi</span>
            </p>
            <p>
              <MdRadioButtonChecked />
              <span>3 bedroom apartments</span>
            </p>
            <Link href={''}>
              <span>Explore</span>
            </Link>
          </section>


        </section>
      </section>

      <section className={styles.featureBox}>
        <h4 className='caps'>Top Features</h4>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={1000}
          ref={gallerySwiper}
          slidesPerView={gallerySlideNum}
          spaceBetween={gallerySlideGap}
          autoplay={{ delay: 3500, disableOnInteraction: true, pauseOnMouseEnter: true }}
          style={{ width: '100%' }}
          className={styles.featureBoxSwiper}
        >
          {featureList.map((item, i) => (
            <SwiperSlide key={i}>
              <div className={styles.feature}>
                <Image
                  ref={(el) => { featureImageRef.current[i] = el }}
                  alt='feature1' src={item.img}
                  fill
                  sizes='1'
                />
                <Link href={'/'}>
                  <span>{item.tag}</span>
                  <MdArrowForward />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <legend className='swiperNav' onClick={gallerySwiperNext}>
          <MdArrowBackIosNew />
        </legend>
        <legend className='swiperNav' onClick={gallerySwiperPrev}>
          <MdArrowBackIosNew />
        </legend>
      </section>

      <section className={styles.aboutBox}>
        <section>
          <div className={styles.left}>
            <h3>Own A Home With A Luxury Setting Today. <sub></sub></h3>
            <p>
              Welcome to a residence where luxury meets lifestyle. This impeccably designed apartment offers an unparalleled blend of sophistication and comfort, providing you with an exquisite living experience.
            </p>
          </div>
          <div className={styles.right}>
            <Image alt='' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705695727/RGV/comView4_k5coyb.jpg'}
              fill
              sizes='1'
            />
          </div>
        </section>

        <article>
          <p>
            <legend>
              <MdHome />
            </legend>
            <span>Forever Ownership</span>
          </p>
          <p>
            <legend>
              <MdDesignServices />
            </legend>
            <span>Customize to the fullest</span>
          </p>
          <p>
            <legend>
              <MdSupervisedUserCircle />
            </legend>
            <span>You control when you buy</span>
          </p>
        </article>
      </section>

      <section className={styles.facilityBox}>
        <h4 className='caps'>Top Amenities</h4>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={1000}
          ref={facilitySwiper}
          slidesPerView={gallerySlideNum}
          spaceBetween={gallerySlideGap}
          autoplay={{ delay: 3500, disableOnInteraction: true, pauseOnMouseEnter: true }}
          style={{ width: '100%' }}
          className={styles.facilityBoxSwiper}
        >

          {facilityList.map((item, i) => (
            <SwiperSlide key={i}>
              <div className={styles.facility}>
                <legend>
                  {item.icon}
                </legend>
                <span className='tagCaps'>{item.tag}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <sub className='swiperNav' onClick={facilitySwiperNext}>
          <MdArrowBackIosNew />
        </sub>
        <sub className='swiperNav' onClick={facilitySwiperPrev}>
          <MdArrowBackIosNew />
        </sub>

      </section>

      <section className={styles.blogBox}>
        <header>
          <h3>Our News & Blog <sub></sub></h3>
          <Link href=''>
            <button>Read More</button>
          </Link>
        </header>

        <section>
          <div className={styles.left}>
            <Image alt='' src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705048061/RGV/frontViewSmall_jvtolq.jpg'}
              fill
              sizes='1'
              style={{ borderRadius: '20px', objectFit: 'cover' }}
            />
            <article>
              <span style={{ color: 'wheat' }}>Focuses on features that enhance convenience</span>
              <small className='cut3'>This includes things like gyms, pools, rooftop decks, concierge services, dog parks, community rooms, and in-unit features
                like washer/dryer, high-end appliances, or smart home technology.
              </small>

              <p>
                <Image
                  alt='dp'
                  src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705012545/RGV/rgvLoader_yutywg.png'}
                  height={50}
                  width={50}
                  style={{ borderRadius: '50%', objectFit: 'cover' }}
                />

                <span>
                  <small>RGV</small>
                  <sub></sub>
                  <small>8 mins ago</small>
                </span>
              </p>
            </article>
          </div>
          <section className={styles.right}>
            <div className={styles.nextBlog}>
              <div className={styles.imgBox}>
                <Image
                  alt='dp'
                  sizes='1'
                  src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705048061/RGV/frontViewSmall_jvtolq.jpg'}
                  fill
                  style={{ borderRadius: '10px', objectFit: 'cover' }}
                />
              </div>
              <p>
                <strong>Buy Real Estate</strong>
                <small className='cut3'>World-class luxury flats, quality workmanship with attention to detail. Kumasi is the capital of the Ashanti Region of Ghana, also known as the Garden City of Ghana.</small>
                <sub style={{ color: 'tomato' }}>3 mins ago</sub>
              </p>
            </div>
            <div className={styles.nextBlog}>
              <div className={styles.imgBox}>
                <Image
                  alt='dp'
                  sizes='1'
                  src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705048061/RGV/frontViewSmall_jvtolq.jpg'}
                  fill
                  style={{ borderRadius: '10px', objectFit: 'cover' }}
                />
              </div>
              <p>
                <strong>Buy Real Estate</strong>
                <small className='cut3'>World-class luxury flats, quality workmanship with attention to detail. Kumasi is the capital of the Ashanti Region of Ghana, also known as the Garden City of Ghana.</small>
                <sub>3 mins ago</sub>
              </p>
            </div>
          </section>
        </section>
      </section>

      <section className={styles.testimonialBox}>
        <h4 className='caps'>Testimonials</h4>
        <p style={{ textAlign: 'center' }}>Don&apos;t just take our word for it. Check out what our residents are saying about their experience buying, selling, or renting with Royal Golf Views.</p>
        <Swiper
          modules={[EffectFade, Pagination, Autoplay]}
          // loop={true}
          speed={1000}
          pagination={{
            dynamicBullets: true,
          }}
          // ref={testimonialSwiper}
          slidesPerView={testimonialSlideNum}
          spaceBetween={gallerySlideGap}
          autoplay={{ delay: 3500, disableOnInteraction: true, pauseOnMouseEnter: true }}
          style={{ width: '100%' }}
          className={styles.testimonialBoxSwiper}
        >

          <SwiperSlide>
            <Link href='' className={styles.testimonial}>
              <MdFormatQuote />
              <span className='cut3'>
                What happens when you find the ideal home not just through specs and photos, but through the voices of those who live there? Scroll down and step into a world of fulfilled dreams, happy surprises, and the transformative power of a perfect address
              </span>
              <article>
                <Image
                  alt='dp'
                  src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1702584837/RadioProject/fve3p0jyrsndahlyeyju.jpg'}
                  height={50}
                  width={50}
                  style={{ borderRadius: '50%', objectFit: 'cover' }}
                />
                <p>
                  <strong>Mr. Emmanuel</strong>
                  <small style={{ color: 'darkgray' }}>Businessman</small>
                </p>
              </article>

            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='' className={styles.testimonial}>
              <MdFormatQuote />
              <span className='cut3'>
                What happens when you find the ideal home not just through specs and photos, but through the voices of those who live there? Scroll down and step into a world of fulfilled dreams, happy surprises, and the transformative power of a perfect address
              </span>
              <article>
                <Image
                  alt='dp'
                  src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1702584837/RadioProject/fve3p0jyrsndahlyeyju.jpg'}
                  height={50}
                  width={50}
                  style={{ borderRadius: '50%', objectFit: 'cover' }}
                />
                <p>
                  <strong>Mr. Emmanuel</strong>
                  <small style={{ color: 'darkgray' }}>Businessman</small>
                </p>
              </article>

            </Link>
          </SwiperSlide>
        </Swiper>
      </section>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.7896554104227!2d-1.6257415251668679!3d6.672964993322162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96c5ebefb6cd%3A0x86a41423889ab7e1!2sRoyal%20Golf%20Views%20Luxury%20Apartments!5e0!3m2!1sen!2sgh!4v1705084024055!5m2!1sen!2sgh"
        width="100%" height="450"
        loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <Footer />

      {isVideoLoaded ? null : <Loader />}
    </main>
  );
}

export default Home
