'use server'
import { doc, setDoc } from "firebase/firestore";
import { fireStoreDB } from "@/firebase/base";
import { redirect } from "next/navigation";

export const CreateBlog = async(data : FormData)=>{

  const title = data.get('title')?.valueOf();

  console.log(title);
  console.log('subbed');
  console.log(data);
}