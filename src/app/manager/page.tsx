import ManagerSidebar from "@/components/ManagerSidebar/ManagerSidebar";
import styles from './manager.module.css';
import { MdAdd, MdDescription, MdPhone } from "react-icons/md";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { fireStoreDB } from "@/firebase/base";
import { useEffect } from "react";
import { GrAnnounce } from "react-icons/gr";

const Manager = async () => {
  const postsCounter = (await getDocs(collection(fireStoreDB, 'Posts/'))).size;
  const testimonialsCounter = (await getDocs(collection(fireStoreDB, 'Testimonials/'))).size;

  return (
    <section className="managerPage">
      <ManagerSidebar />
      <main className={styles.manager}>
        <header>
          <p>
            <strong>Royal Golf Views</strong>
            <small>Website Manager</small>
          </p>

          <span>Day 30</span>
        </header>

        <section className={styles.con}>
          <section className={styles.items}>
            <section className={styles.item}>
              <Link href={'manager/blog'}>
                <div>
                  <MdDescription />
                  <span>Posts</span>
                  <strong>{postsCounter}</strong>
                </div>
              </Link>
              <Link className={styles.itemTag} href={'manager/addPost'}>
                <MdAdd />
                <span>Add Post</span>
              </Link>
            </section>

            <section className={styles.item}>
              <Link href={'manager/testimonials'}>
                <div>
                  <GrAnnounce />
                  <span>Testimonials</span>
                  <strong>{testimonialsCounter}</strong>
                </div>
              </Link>
              <Link className={styles.itemTag} href={'manager/addTestimonial'}>
                <MdAdd />
                <span>Add Testimonial</span>
              </Link>
            </section>

            <section className={styles.item}>
              <div>
                <MdPhone />
                <span>Contact</span>
                <strong>0</strong>
              </div>
              <Link className={styles.itemTag} href={'manager/addContact'}>
                <MdAdd />
                <span>Add Contact</span>
              </Link>
            </section>
          </section>
        </section>

      </main>
    </section>
  );
}

export default Manager;