'use server'
import { fireStoreDB } from "@/firebase/base"
import { doc, getDoc } from "firebase/firestore"

interface Post extends Record<string, any> { }

export const GetTestimonial = async (id : string)=>{
  const postTemp = await getDoc(doc(fireStoreDB, 'Testimonials/' + id));
  const post : Post = ({id : postTemp.id, ...postTemp.data()});
  return post;
}