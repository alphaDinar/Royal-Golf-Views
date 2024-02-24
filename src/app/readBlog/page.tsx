// 'use client'
import TopNav from '@/components/TopNav/TopNav';
import styles from '../blog/blog.module.css';
import { getTimeSince, sortByTime } from '@/external/external';
import Image from 'next/image';
import Footer from '@/components/Footer/Footer';
import { MdArrowBack, MdArrowBackIos } from 'react-icons/md';
import Link from 'next/link';
import Waiter from '@/components/Waiter/Waiter';

interface Post extends Record<string, any> { }
const ReadBlog = ({ searchParams }: { searchParams: { post: string } }) => {

  const postObj = JSON.parse(searchParams.post);

  const title = postObj.title;
  const excerpt = postObj.excerpt;
  const author = postObj.author;
  const authorImage = postObj.authorImage;
  const thumbnail = postObj.thumbnail;
  const timestamp = postObj.timestamp;

  console.log(postObj.excerpt.split('•'));



  return (
    <main className={styles.blogBoxHolder}>
      <TopNav />
      <section className={styles.blogCon}>
        <header>
          <Link href={'/blog'}>
            <MdArrowBackIos style={{ fontSize: '1.5rem' }} />
          </Link>
          <h4 className='caps'>{title && title}<sub></sub></h4>
        </header>

        {title ?
          <section className={styles.blogBox}>
            <div className={styles.currentBlog} style={{ height: 'auto' }}>
              <div className={styles.imgBox}>
                <Image className={styles.bg} alt='topImage' fill sizes='1' src={thumbnail} />
              </div>
              <article>
                <strong>{title}</strong>
                <span>
                  {excerpt.split('•').map((text: string, i :number) => (
                    <span key={i}>
                      <span>•{text}</span>
                      <br />
                      <br />
                    </span>
                  ))}
                </span>
                <p>
                  <Image className={styles.dp} alt='' height={50} width={50} src={authorImage} />
                  <span>
                    <small>{author}</small>
                    <small>{getTimeSince(timestamp)}</small>
                  </span>
                </p>
              </article>
            </div>
          </section> : <Waiter />
        }
      </section>

      <Footer />
    </main>
  );
}

export default ReadBlog;