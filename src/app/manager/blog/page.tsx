'use client'
import ManagerSidebar from "@/components/ManagerSidebar/ManagerSidebar";
import styles from './blog.module.css';
import { MdAdd, MdDeleteOutline, MdDescription, MdEdit, MdPhone } from "react-icons/md";
import Link from "next/link";
import { collection, deleteDoc, doc, getDocs, onSnapshot } from "firebase/firestore";
import { fireStoreDB } from "@/firebase/base";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getTimeSince, sortByTime } from "@/external/external";
import Waiter from "@/components/Waiter/Waiter";

interface Post extends Record<string, any> { }
const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const postStream = onSnapshot(collection(fireStoreDB, 'RGVPosts/'), (snapshot) => {
      const postsTemp = snapshot.docs;
      setPosts(postsTemp.map((el) => ({ id: el.id, ...el.data() }) as Post).sort(sortByTime));
      setIsLoading(false);
    })

    return () => postStream();
  }, [])

  const deletePost = (id: string) => {
    const confirm = window.confirm('Are you sure you want to delete Post ?');
    if (confirm) {
      console.log('started');
      deleteDoc(doc(fireStoreDB, 'RGVPosts/' + id));
    }
  }

  return (
    <section className="managerPage">
      <ManagerSidebar />
      <main className={styles.manager}>
        <header>
          <strong>Blog</strong>
        </header>

        {!isLoading ?
          <section className={styles.con}>
            <section className={styles.blogs}>
              <Link href={'/manager/addPost'} className={`${styles.blog} ${styles.add}`}>
                <span>Add Blog</span>
                <MdAdd />
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

                    <p>
                      {post.author}
                      <small>{getTimeSince(post.timestamp)}</small>
                    </p>
                    <Image alt="" src={post.authorImage} height={40} width={40} />
                  </article>

                  <nav>
                    <Link href={`/manager/editPost/${post.id}`}>
                      <MdEdit />
                    </Link>
                    <MdDeleteOutline onClick={() => { deletePost(post.id) }} />
                  </nav>
                </div>
              ))}
            </section>
          </section>
          :
          <Waiter />
        }

      </main>
    </section>
  );
}

export default Blog;