import ManagerSidebar from "@/components/ManagerSidebar/ManagerSidebar";
import styles from './blog.module.css';
import { MdAdd, MdDescription, MdPhone } from "react-icons/md";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { fireStoreDB } from "@/firebase/base";
import Image from "next/image";

interface Post extends Record<string, any> { }

const Blog = async () => {
  const posts: Post[] = (await getDocs(collection(fireStoreDB, 'RGVPosts/'))).docs.map((post) => ({ id: post.id, ...post.data() }));

  return (
    <section className="managerPage">
      <ManagerSidebar />
      <main className={styles.manager}>
        <header>
          <strong>Blog</strong>
        </header>

        <section className={styles.con}>
          <section className={styles.blogs}>
            <Link href={'/manager/addPost'} className={styles.blog}>
              <span>Add Span</span>
            </Link>
            {posts.map((post, i) => (
              <div key={i} className={styles.blog}>
                <div className={styles.imgBox}>
                  <Image alt="" fill sizes="1" src={post.thumbnail} />
                </div>

                <article>
                  <strong>{post.title}</strong>
                  <small className="cut3">
                    {post.excerpt}
                  </small>
                  <Image alt="" src={post.authorImage} height={40} width={40} />

                  <p>
                    {post.author}
                    <small>3 mins ago</small>
                  </p>
                </article>
              </div>
            ))}
          </section>
        </section>

      </main>
    </section>
  );
}

export default Blog;