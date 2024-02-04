'use server'
import { doc, setDoc } from "firebase/firestore";
import { fireStoreDB, storageDB } from "@/firebase/base";
import { uploadBytes, ref as storageRef, getDownloadURL } from "firebase/storage";

export const CreateBlog = async (data: FormData) => {
  let authorUrlFinal = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705012545/RGV/rgvLoader_yutywg.png';
  let thumbnailUrlFinal = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705862528/RGV/FrontViewMin_o622y6.jpg'
  let res = false;

  const timestamp = new Date().getTime();
  const pid = `pid${timestamp}`;
  const title = data.get('title')?.valueOf();
  const excerpt = data.get('excerpt')?.valueOf();
  const author = data.get('author')?.valueOf();
  const authorImage = data.get('authorImage')?.valueOf() as Blob;
  const thumbnail = data.get('thumbnail')?.valueOf() as Blob;
  const authorImageInfo = data.get('authorImage')?.valueOf() as { size: number };
  const thumbnailInfo = data.get('thumbnail')?.valueOf() as { size: number };


  if (authorImageInfo.size > 0) {
    const imageId = `ai${Math.round(Math.random() * 9999)}`;
    const authorRes = await uploadBytes(storageRef(storageDB, 'HostsStorage/' + imageId), authorImage);
    const authorUrl = await getDownloadURL(authorRes.ref);
    authorUrlFinal = authorUrl;
  }

  if (thumbnailInfo.size > 0) {
    const imageId = `ti${Math.round(Math.random() * 9999)}`;
    const authorRes = await uploadBytes(storageRef(storageDB, 'HostsStorage/' + imageId), thumbnail);
    const authorUrl = await getDownloadURL(authorRes.ref);
    thumbnailUrlFinal = authorUrl;
  }

  await setDoc(doc(fireStoreDB, 'RGVPosts/' + pid), {
    title: title,
    excerpt: excerpt,
    author: author,
    authorImage: authorUrlFinal,
    thumbnail: thumbnailUrlFinal,
    timestamp: timestamp
  })
    .then(() => {
      res = true;
    })
    .catch((error) => {
      console.log(error);
    })


  return res;
}