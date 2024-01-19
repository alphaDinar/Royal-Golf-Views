'use client'
import ManagerSidebar from "@/components/ManagerSidebar/ManagerSidebar";
import styles from './addPost.module.css';
import { CreateBlog } from "./CreateBlog";
import Image from "next/image";
import { useState } from "react";
// import { CreateBlog } from "./createBlog";

const AddPost = () => {
  const [authorPreview, setAuthorPreview] = useState('');
  const [mediaPreview, setMediaPreview] = useState('https://res.cloudinary.com/dvnemzw0z/image/upload/v1705048270/RGV/guardPointSmall_hkf37q.jpg');


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await CreateBlog(new FormData(e.target as HTMLFormElement));
  }

  const handleMedia = (media: HTMLInputElement) => {
    if (media.files) {
      setMediaPreview(URL.createObjectURL(media.files[0]));
    }
  }

  return (
    <section className="managerPage">
      <ManagerSidebar />

      <main>
        <header>
          <strong>Add Post</strong>
        </header>

        <form className="managerForm">
          <div>
            <span>Title</span>
            <input type="text" name="title" required />
          </div>

          <div>
            <span>Excerpt</span>
            <textarea name="excerpt">

            </textarea>
          </div>

          <div>
            <span>Author</span>
            <input type="text" name="author" value={'Royal Golf Views'} required />
          </div>
          <div style={{width : '50px', height: '50px', position:'relative',borderRadius : '50%', border:'2px solid orange'}}>
            <Image alt="media" fill sizes="1" style={{objectFit:'cover', borderRadius : '50%'}} src={mediaPreview} />
          </div>

          <div>
            {/* <span>Image</span> */}
            <label htmlFor="chooseMedia">
              <legend>Choose Image</legend>
            <input type="file" id="chooseMedia" style={{display:'none'}} onChange={(e) => { handleMedia(e.target) }} name="media" accept="image/*" required />
            </label>
          </div>

          <div style={{width : '250px', height: '180px', position:'relative',borderRadius : 10, border:'2px solid orange'}}>
            <Image alt="media" fill sizes="1" style={{objectFit:'cover', borderRadius : 10}} src={mediaPreview} />
          </div>



          <button type="submit">Publish</button>
        </form>
      </main>
    </section>
  );
}

export default AddPost;