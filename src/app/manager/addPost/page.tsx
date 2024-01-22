'use client'
import ManagerSidebar from "@/components/ManagerSidebar/ManagerSidebar";
import styles from './addPost.module.css';
import { CreateBlog } from "./CreateBlog";
import Image from "next/image";
import { useState } from "react";
import Loader from "@/components/Loader/Loader";

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [author, setAuthor] = useState('Royal Golf Views');
  const [authorPreview, setAuthorPreview] = useState('https://res.cloudinary.com/dvnemzw0z/image/upload/v1705012545/RGV/rgvLoader_yutywg.png');
  const [thumbnailPreview, setThumbnailPreview] = useState('https://res.cloudinary.com/dvnemzw0z/image/upload/v1705862528/RGV/FrontViewMin_o622y6.jpg');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const isCreated = await CreateBlog(formData);
    if(isCreated){
      setTitle('');
      setExcerpt('');
      setAuthor('Royal Golf Views');
      setAuthorPreview('https://res.cloudinary.com/dvnemzw0z/image/upload/v1705012545/RGV/rgvLoader_yutywg.png');
      setThumbnailPreview('https://res.cloudinary.com/dvnemzw0z/image/upload/v1705862528/RGV/FrontViewMin_o622y6.jpg');
      setIsLoading(false)
      alert('Post Added Successfully');
    }else{
      console.log('err');
    }
  }

  return (
    <section className="managerPage">
      <ManagerSidebar />

      <main>
        <header>
          <strong>Add Post</strong>
        </header>

        <form className="managerForm" onSubmit={handleSubmit} encType="multipart/form-data">
          <div>
            <span>Title</span>
            <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} name="title" required />
          </div>

          <div>
            <span>Excerpt</span>
            <textarea name="excerpt" value={excerpt} onChange={(e) => { setExcerpt(e.target.value) }} required>
            </textarea>
          </div>

          <div>
            <span>Author</span>
            <input type="text" name="author" value={author} onChange={(e) => { setAuthor(e.target.value) }} required />
          </div>

          <div>
            <label htmlFor="chooseAuthorImage">
              <span>Author Image</span>
              <input type="file" id="chooseAuthorImage" style={{ display: 'none' }} onChange={(e) => { setAuthorPreview(e.target.files ? URL.createObjectURL(e.target.files[0]) : '') }} name="authorImage" accept="image/*"/>
            </label>
          </div>

          <div style={{ width: '50px', height: '50px', position: 'relative', borderRadius: '50%' }}>
            <Image alt="media" fill sizes="1" style={{ objectFit: 'cover', borderRadius: '50%' }} src={authorPreview} />
          </div>

          <div>
            <label htmlFor="thumbnail">
              <span>Thumbnail</span>
              <input type="file" id="thumbnail" style={{ display: 'none' }} onChange={(e) => { setThumbnailPreview(e.target.files ? URL.createObjectURL(e.target.files[0]) : '') }} name="thumbnail" accept="image/*"/>
            </label>
          </div>

          <div style={{ width: '250px', height: '180px', position: 'relative', borderRadius: 10 }}>
            <Image alt="media" fill sizes="1" style={{ objectFit: 'cover', borderRadius: 10 }} src={thumbnailPreview} />
          </div>

          <button type="submit">Publish</button>
        </form>
      </main>

      {
        isLoading && <Loader/>
      }
      
    </section>
  );
}

export default AddPost;