'use server'
import { doc, setDoc } from "firebase/firestore";
import { fireStoreDB, storageDB } from "@/firebase/base";
import { uploadBytes, ref as storageRef, getDownloadURL } from "firebase/storage";

export const CreateTestimonial = async (data: FormData) => {
  let authorUrlFinal = 'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705012545/RGV/rgvLoader_yutywg.png';
  let res = false;

  const timestamp = new Date().getTime();
  const tid = `tid${timestamp}`;
  const excerpt = data.get('excerpt')?.valueOf();
  const author = data.get('author')?.valueOf();
  const position = data.get('position')?.valueOf();
  const authorImage = data.get('authorImage')?.valueOf() as Blob;
  const authorImageInfo = data.get('authorImage')?.valueOf() as { size: number };

  if (authorImageInfo.size > 0) {
    const imageId = `ai${Math.round(Math.random() * 9999)}`;
    const authorRes = await uploadBytes(storageRef(storageDB, 'HostsStorage/' + imageId), authorImage);
    const authorUrl = await getDownloadURL(authorRes.ref);
    authorUrlFinal = authorUrl;
  }


  await setDoc(doc(fireStoreDB, 'RGVTestimonials/' + tid), {
    excerpt: excerpt,
    author: author,
    position: position,
    authorImage: authorUrlFinal,
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