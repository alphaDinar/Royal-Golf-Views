'use server'
import { doc, updateDoc } from "firebase/firestore";
import { fireStoreDB, storageDB } from "@/firebase/base";
import { uploadBytes, ref as storageRef, getDownloadURL } from "firebase/storage";

export const EditBlog = async(data : FormData, id : string,authorUrlFinal : string, thumbnailUrlFinal : string)=>{
  let res = false;

  const title = data.get('title')?.valueOf();
  const excerpt = data.get('excerpt')?.valueOf(); 
  const author = data.get('author')?.valueOf();
  const authorImage = data.get('authorImage')?.valueOf() as Blob;
  const thumbnail = data.get('thumbnail')?.valueOf() as Blob;
  const authorImageInfo = data.get('authorImage')?.valueOf() as {size : number};
  const thumbnailInfo = data.get('thumbnail')?.valueOf() as {size : number};

  if(authorImageInfo.size > 0){
    const imageId = `ai${Math.round(Math.random() * 9999)}`;
    const authorRes = await uploadBytes(storageRef(storageDB, 'HostsStorage/' + imageId), authorImage);
    const authorUrl = await getDownloadURL(authorRes.ref);
    authorUrlFinal = authorUrl;
  }

  if(thumbnailInfo.size > 0){
    const imageId = `ti${Math.round(Math.random() * 9999)}`;
    const authorRes = await uploadBytes(storageRef(storageDB, 'HostsStorage/' + imageId), thumbnail);
    const authorUrl = await getDownloadURL(authorRes.ref);
    thumbnailUrlFinal = authorUrl;
  }

  await updateDoc(doc(fireStoreDB, 'Posts/' + id), {
    title : title,
    excerpt : excerpt,
    author : author,
    authorImage : authorUrlFinal,
    thumbnail : thumbnailUrlFinal,
  })
  .then(()=>{
    console.log('passed')
    res = true;
  })
  .catch((error)=>{
    console.log(error);
  })


  return res;
}