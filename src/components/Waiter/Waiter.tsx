import Image from "next/image";
import styles from './waiter.module.css';

const Waiter = () => {
  return ( 
    <section className={styles.waiter}>
      <Image alt="" width={100} height={100} src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1706016721/RGV/Animation_-_1706016675885_bvqz9f.gif'} />
    </section>
   );
}
 
export default Waiter;