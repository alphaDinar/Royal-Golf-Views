'use client';
import styles from './home.module.css';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdAcUnit, MdArrowBackIosNew, MdArrowForward, MdDesignServices, MdOutline3DRotation, MdFormatQuote, MdHome, MdMenu, MdOutlineCoffeeMaker, MdOutlineElevator, MdOutlineFitnessCenter, MdOutlineMeetingRoom, MdOutlinePool, MdOutlineShower, MdOutlineSupportAgent, MdPersonOutline, MdRadioButtonChecked, MdSportsHandball, MdSupervisedUserCircle, MdTv, MdWater, MdWifi, MdPhone, MdMail, MdLocationPin, MdSend } from 'react-icons/md';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import { GiBarbecue } from 'react-icons/gi';
import { BsTelephone } from 'react-icons/bs';
import { TbDeviceCctv, TbFridge } from 'react-icons/tb';
import { IoShirtOutline } from 'react-icons/io5';
import Footer from '@/components/Footer/Footer';
import Loader from '@/components/Loader/Loader';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { fireStoreDB } from '@/firebase/base';
import { sortByTime, getTimeSince } from '@/external/external';
import Waiter from '@/components/Waiter/Waiter';
import introPlace from '../../public/intro.jpg';
import brochure from '../../public/brochure.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { featureList, galleryListA, galleryListB } from '@/external/lists';
import { FaRegDotCircle } from 'react-icons/fa';
import { FaFacebookF, FaGoogle, FaInstagram } from 'react-icons/fa6';
import { HiOutlineCloudDownload } from 'react-icons/hi';

interface Post extends Record<string, any> { }

const Home = () => {
  const [brochureToggled, setBrochureToggled] = useState(false);
  const introVideoRef = useRef<HTMLVideoElement>(null);
  const featureImageRef = useRef<Array<HTMLImageElement | null>>([]);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [menuToggled, setMenuToggled] = useState(false);
  const [menuPosition, setMenuPosition] = useState('-170px');
  const gallerySwiper = useRef<{ swiper: any }>({ swiper: null });
  const facilitySwiper = useRef<{ swiper: any }>({ swiper: null });
  const [gallerySlideNum, setGallerySlideNum] = useState(0);
  const [testimonialSlideNum, setTestimonialSlideNum] = useState(0);
  const [gallerySlideGap, setGallerySlideGap] = useState(25);
  const [posts, setPosts] = useState<Post[]>([]);
  const [testimonials, setTestimonials] = useState<Post[]>([]);


  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [inquiry, setInquiry] = useState('');

  const toggleBrochure = () => {
    brochureToggled ? setBrochureToggled(false) : setBrochureToggled(true);
  }


  const toggleMenu = () => {
    if (menuToggled) {
      setMenuToggled(false);
      setMenuPosition('10px');
    } else {
      setMenuToggled(true);
      setMenuPosition('-170px');
    }
  }


  const handleIntroVideoPass = () => {
    setPageLoaded(true);
  }


  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    setTimeout(() => {
      handleIntroVideoPass();
    }, 8000)

    if (introVideoRef.current) {
      if (introVideoRef.current.readyState >= 3) {
        handleIntroVideoPass();
      }
    }

    setMenuToggled(true);
    setMenuPosition('-170px');

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
    }

    const postStream = onSnapshot(collection(fireStoreDB, '/RGVPosts'), (snapshot) => {
      const postsTemp = snapshot.docs;
      setPosts(postsTemp.map((el) => ({ id: el.id, ...el.data() }) as Post).sort(sortByTime).slice(0, 3));
    })

    const testimonialStream = onSnapshot(collection(fireStoreDB, '/RGVTestimonials'), (snapshot) => {
      const postsTemp = snapshot.docs;
      setTestimonials(postsTemp.map((el) => ({ id: el.id, ...el.data() }) as Post).sort(sortByTime).slice(0, 3));
    })

    return () => {
      postStream();
      testimonialStream();
    };
  }, [introVideoRef])


  const gallerySwiperPrev = () => {
    console.log(gallerySwiper.current)
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

  const topFeatureList = [
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


  const sendMail = () => {

  }


  return (
    <main>
      <section className={styles.headBox}>
        <Image
          className={styles.placeholder}
          alt=''
          fill
          src={introPlace}
        />
        <video
          ref={introVideoRef}
          autoPlay
          loop
          muted
          src='https://res.cloudinary.com/dvnemzw0z/video/upload/v1705012575/RGV/intro_euk6tk.mp4'
          onLoadedMetadata={handleIntroVideoPass}
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
              <Link href={'/'} data-aos="fade-down"> <span>Home</span> </Link>
              <Link href={'/about'} data-aos="fade-down"> <span>About Us</span> </Link>
              <Link href={'/gallery'} data-aos="fade-down"> <span>Gallery</span> </Link>
              <Link href={'/blog'} data-aos="fade-down"> <span>Blog</span> </Link>
              <Link href={'#mapBox'} data-aos="fade-down"> <span>Contact</span> </Link>
              <legend data-aos="fade-right" onClick={() => toggleBrochure()} className={styles.inquireBox}> <span>E-Brochure</span> </legend>
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
            <Link href={'/slideshow'}>
              <span>Explore</span>
            </Link>
          </section>
        </section>
      </section>

      <section className={styles.brochureBox} style={brochureToggled ? { display: 'flex' } : { display: 'none' }}>
        <section className={styles.sheet} onClick={() => toggleBrochure()}></section>
        <div className={styles.imgBox}>
          <legend><HiOutlineCloudDownload/></legend>
          <Image alt='' fill sizes='1' src={brochure} />
        </div>
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
          {topFeatureList.map((item, i) => (
            <SwiperSlide key={i}>
              <div className={styles.feature}>
                <Image
                  ref={(el) => { featureImageRef.current[i] = el }}
                  alt='feature1' src={item.img}
                  fill
                  sizes='1'
                  priority={true}
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
          <div className={styles.left} data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-out">
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
          <p data-aos="fade-up" data-aos-delay="80">
            <legend>
              <MdHome />
            </legend>
            <span>Forever Ownership</span>
          </p>
          <p data-aos="fade-up" data-aos-delay="100">
            <legend>
              <MdDesignServices />
            </legend>
            <span>Customize to the fullest</span>
          </p>
          <p data-aos="fade-up" data-aos-delay="120">
            <legend>
              <MdSupervisedUserCircle />
            </legend>
            <span>You control when you buy</span>
          </p>
        </article>
      </section>


      <section className={styles.showBox}>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={700}
          autoplay={{
            delay: 3500,
          }}
          className={styles.showSwiper}
        >
          {galleryListA.map((el, i) => (
            <SwiperSlide key={i}>
              <Image alt='' fill sizes='1' src={el.src} />
            </SwiperSlide>
          ))}
        </Swiper>
        <article>
          <p>
            {featureList.map((el, i) => (
              <span key={i} data-aos="fade-right">
                <FaRegDotCircle />
                {el.tag}
              </span>
            ))}
          </p>
        </article>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={700}
          autoplay={{
            delay: 3500,
          }}
          className={styles.showSwiper}
        >
          {galleryListB.map((el, i) => (
            <SwiperSlide key={i}>
              <Image alt='' fill sizes='1' src={el.src} />
            </SwiperSlide>
          ))}
        </Swiper>
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
          <Link href={'/blog'}>
            <button>Read More</button>
          </Link>
        </header>

        {posts.length > 0 ?
          <section>
            <Link href={`/blog/${posts[0].id}`} className={styles.left}>
              <Image alt='' src={posts[0].thumbnail}
                fill
                sizes='1'
                style={{ borderRadius: '20px', objectFit: 'cover' }}
              />
              <article>
                <span style={{ color: 'wheat' }}>{posts[0].title}</span>
                <small className='cut3'>
                  {posts[0].excerpt}
                </small>

                <p>
                  <Image
                    alt='dp'
                    src={posts[0].authorImage}
                    height={50}
                    width={50}
                    style={{ borderRadius: '50%', objectFit: 'cover' }}
                  />

                  <span>
                    <small>{posts[0].author}</small>
                    <sub></sub>
                    <small>{getTimeSince(posts[0].timestamp)}</small>
                  </span>
                </p>
              </article>
            </Link>
            <section className={styles.right}>
              {posts.slice(1, 3).map((post, i) => (
                <Link href={`/blog/${post.id}`} key={i} className={styles.nextBlog}>
                  <div className={styles.imgBox}>
                    <Image
                      alt='dp'
                      sizes='1'
                      src={post.thumbnail}
                      fill
                      style={{ borderRadius: '10px', objectFit: 'cover' }}
                    />
                  </div>
                  <p>
                    <strong>{post.title}</strong>
                    <small className='cut3'>{post.excerpt}</small>
                    <sub style={{ color: 'tomato' }}>{getTimeSince(post.timestamp)}</sub>
                  </p>
                </Link>
              ))}
            </section>
          </section>
          : <Waiter />
        }
      </section>


      {testimonials.length > 0 ?
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
            {testimonials.map((el, i) => (
              <SwiperSlide key={i}>
                <Link href='' className={styles.testimonial}>
                  <MdFormatQuote />
                  <span className=''>
                    {el.excerpt}
                  </span>
                  <article>
                    <Image
                      alt='dp'
                      src={el.authorImage}
                      height={50}
                      width={50}
                      style={{ borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <p>
                      <strong>{el.author}</strong>
                      <small style={{ color: 'darkgray' }}>{el.position}</small>
                    </p>
                  </article>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        : <Waiter />
      }


      <section className={styles.mapBox} id='mapBox'>
        <section className={styles.contactCon}>
          <section className={styles.left}>
            <h3>Get in Touch <sub></sub> </h3>
            <span>
              Make an inquiry on any details or concerns you may have.
            </span>
            <div>
              <Link href={''}><FaFacebookF /></Link>
              <Link href={''}><FaInstagram /></Link>
              <Link href={''}><FaGoogle /></Link>
            </div>
            <small>Hours : Weekdays (8 AM - 7PM) Weekends (10 AM - 5PM)</small>
            <article>
              <Link href={''}><MdPhone />  <span>+233 (0)544 339 762</span></Link>
              <Link href={''}><MdMail />  <span>sales@royalgolfviews.online</span></Link>
              <Link href={''}><MdLocationPin />  <span>34-35 John Owusu Addo Close, Ridge, Kumasi, Ghana</span></Link>
            </article>
          </section>
          <section className={styles.right}>
            <form data-aos="fade-up" onSubmit={(e) => { e.preventDefault(); sendMail() }}>
              <legend>
                <MdSend />
              </legend>
              <div>
                <span>Name</span>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                <span>Mobile Number</span>
                <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required />
              </div>
              <div>
                <span>E-Mail</span>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                <span>Inquiry</span>
                <textarea value={inquiry} onChange={(e) => setInquiry(e.target.value)} required></textarea>
              </div>
              <button type='submit'>Send</button>
            </form>
          </section>
        </section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.7896554104227!2d-1.6257415251668679!3d6.672964993322162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96c5ebefb6cd%3A0x86a41423889ab7e1!2sRoyal%20Golf%20Views%20Luxury%20Apartments!5e0!3m2!1sen!2sgh!4v1705084024055!5m2!1sen!2sgh"
          width="100%" height="450"
          loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </section>

      <Footer />

      <Link href={'/vTour'} className='vTour'>
        <MdOutline3DRotation />
        <small>Virtual Tour</small>
      </Link>

      {pageLoaded ? null : <Loader />}
    </main>
  );
}

export default Home
