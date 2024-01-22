import ManagerSidebar from "@/components/ManagerSidebar/ManagerSidebar";
import styles from './manager.module.css';
import { MdAdd, MdDescription, MdPhone } from "react-icons/md";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { fireStoreDB } from "@/firebase/base";

const Manager = async () => {
  const postsCounter = (await getDocs(collection(fireStoreDB, 'RGVPosts/'))).size;

  return ( 
    <section className="managerPage">
      <ManagerSidebar/>
      <main className={styles.manager}>
        <header>
          <p>
            <strong>Royal Golf Views</strong>
            <small>Website Manager</small>
          </p>

          <span>Day 30</span>
        </header>

        <section className={styles.con}>
          <section className={styles.top}>
            <div>
              <MdDescription/>
              <span>Posts</span>
              <strong>{postsCounter}</strong>
            </div>
            <div>
              <MdPhone/>
              <span>Contact</span>
              <strong>28</strong>
            </div>
            
          </section>
          <section className={styles.low}>

            <Link href={'manager/addPost'}>
              <MdAdd/>
              <span>Add Post</span>
            </Link>
            <Link href={'manager/addContact'}>
              <MdAdd/>
              <span>Add Contact</span>
            </Link>
          </section>
        </section>

      </main>
    </section>
   );
}
 
export default Manager;