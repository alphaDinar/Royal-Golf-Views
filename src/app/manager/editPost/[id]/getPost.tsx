'use server'


import { fireStoreDB } from "@/firebase/base"
import { doc, getDoc } from "firebase/firestore"

interface Post extends Record<string, any> { }

export const GetPost = async (id : string)=>{
  const postTemp = await getDoc(doc(fireStoreDB, 'RGVPosts/' + id));
  const post : Post = ({id : postTemp.id, ...postTemp.data()});
  return post;
}