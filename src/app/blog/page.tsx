'use client'
import TopNav from '@/components/TopNav/TopNav';
import styles from './blog.module.css';
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { fireStoreDB } from '@/firebase/base';
import { getTimeSince, sortByTime } from '@/external/external';
import Image from 'next/image';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import Waiter from '@/components/Waiter/Waiter';

interface Post extends Record<string, any> { }
const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const postStream = onSnapshot(collection(fireStoreDB, 'RGVPosts/'), (snapshot) => {
      const postsTemp = snapshot.docs;
      setPosts(postsTemp.map((el) => ({ id: el.id, ...el.data() }) as Post).sort(sortByTime));
    })
    return () => postStream();
  }, [])

  return (
    <main className={styles.blogBoxHolder}>
      <TopNav />

      <section className={styles.blogCon}>
        <header>
          <h4 className='caps'>Our Blog <sub></sub></h4>
        </header>

        {posts.length > 0 ?
          <section className={styles.blogBox}>
            <Link href={`/blog/${posts[0].id}`} className={styles.currentBlog}>
              <Image className={styles.bg} alt='topImage' fill sizes='1' src={posts[0].thumbnail} />
              <article>
                <strong>{posts[0].title}</strong>
                <small>
                  {posts[0].excerpt}
                </small>
                <p>
                  <Image className={styles.dp} alt='' height={50} width={50} src={posts[0].authorImage} />
                  <span>
                    <small>{posts[0].author}</small>
                    <small>{getTimeSince(posts[0].timestamp)}</small>
                  </span>
                </p>
              </article>
            </Link>

            <section className={styles.blogs}>
              {posts.slice(1).map((post, i) => (
                <Link href={`/blog/${post.id}`} key={i} className={styles.blog}>
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
                </Link>
              ))}
            </section>
          </section> : <Waiter/>
        }
      </section>

      <Footer />
    </main>
  );
}

export default Blog;