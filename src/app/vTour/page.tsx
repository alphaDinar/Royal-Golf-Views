'use client'
import { MdArrowBack } from 'react-icons/md';
import styles from './vTour.module.css';
import { useRouter } from 'next/navigation';

const VTour = () => {
  const router = useRouter();
  const goBack =()=>{
    router.back();
  }

  return ( 
    <section className={styles.vTourBox}>
      <MdArrowBack onClick={goBack} className={styles.back}/>
      <iframe src="https://dobiison.com/InfinitiView/RoyalGolfViewsApt/"></iframe>
    </section>
   );
}
 
export default VTour;