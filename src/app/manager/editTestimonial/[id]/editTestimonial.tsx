'use server'
import { doc, updateDoc } from "firebase/firestore";
import { fireStoreDB, storageDB } from "@/firebase/base";
import { uploadBytes, ref as storageRef, getDownloadURL } from "firebase/storage";

export const EditTest = async(data : FormData, id : string,authorUrlFinal : string)=>{
  let res = false;

  const excerpt = data.get('excerpt')?.valueOf(); 
  const author = data.get('author')?.valueOf();
  const position = data.get('position')?.valueOf();
  const authorImage = data.get('authorImage')?.valueOf() as Blob;
  const authorImageInfo = data.get('authorImage')?.valueOf() as {size : number};

  if(authorImageInfo.size > 0){
    const imageId = `ai${Math.round(Math.random() * 9999)}`;
    const authorRes = await uploadBytes(storageRef(storageDB, 'HostsStorage/' + imageId), authorImage);
    const authorUrl = await getDownloadURL(authorRes.ref);
    authorUrlFinal = authorUrl;
  }
  await updateDoc(doc(fireStoreDB, 'Testimonials/' + id), {
    excerpt : excerpt,
    author : author,
    position : position,
    authorImage : authorUrlFinal,
  })
  .then(()=>{
    res = true;
  })
  .catch((error)=>{
    console.log(error);
  })


  return res;
}