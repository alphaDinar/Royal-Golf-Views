'use client'
import TopNav from '@/components/TopNav/TopNav';
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import styles from '../blog.module.css';
import { fireStoreDB } from '@/firebase/base';
import { getTimeSince, sortByTime } from '@/external/external';
import Image from 'next/image';
import Footer from '@/components/Footer/Footer';
import { useParams } from 'next/navigation';
import { GetPost } from '@/app/manager/editPost/[id]/getPost';
import { MdArrowBack, MdArrowBackIos } from 'react-icons/md';
import Link from 'next/link';
import Waiter from '@/components/Waiter/Waiter';

interface Post extends Record<string, any> { }
const Blog = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post>({});

  useEffect(() => {
    const getPost = async () => {
      const post = await GetPost(decodeURIComponent(id.toString()));
      setPost(post);
    }
    getPost();
  }, [id])

  return (
    <main className={styles.blogBoxHolder}>
      <TopNav />

      <section className={styles.blogCon}>
        <header>
          <Link href={'/blog'}>
            <MdArrowBackIos style={{ fontSize: '1.5rem' }} />
          </Link>
          <h4 className='caps'>{decodeURIComponent(id.toString())}<sub></sub></h4>
        </header>

        {post.title ?
          <section className={styles.blogBox}>
            <div className={styles.currentBlog}>
              <Image className={styles.bg} alt='topImage' fill sizes='1' src={post.thumbnail} />
              <article>
                <strong>{post.title}</strong>
                <small>
                  {post.excerpt}
                </small>
                <p>
                  <Image className={styles.dp} alt='' height={50} width={50} src={post.authorImage} />
                  <span>
                    <small>{post.author}</small>
                    <small>{getTimeSince(post.timestamp)}</small>
                  </span>
                </p>
              </article>
            </div>
          </section> : <Waiter/>
        }
      </section>

      <Footer />
    </main>
  );
}

export default Blog;