import Link from "next/link";

const Test = () => {
  const post = {
    name : 'Emma',
    age : 6
  }

  return ( 
    <section>
      <Link href={{pathname : '/target', query : {obj : JSON.stringify(post)}}}>Test</Link>
    </section>
   );
}
 
export default Test;