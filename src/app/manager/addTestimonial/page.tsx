'use client'
import ManagerSidebar from "@/components/ManagerSidebar/ManagerSidebar";
import Image from "next/image";
import { useState } from "react";
import Loader from "@/components/Loader/Loader";
import { CreateTestimonial } from "./CreateTestimonial";
import Waiter from "@/components/Waiter/Waiter";

const AddTestimonial = () => {
  const [excerpt, setExcerpt] = useState('');

  const [position, setPosition] = useState('');
  const [author, setAuthor] = useState('Royal Golf Views');
  const [authorPreview, setAuthorPreview] = useState('https://res.cloudinary.com/dvnemzw0z/image/upload/v1705012545/RGV/rgvLoader_yutywg.png');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const isCreated = await CreateTestimonial(formData);
    if (isCreated) {
      setExcerpt('');
      setPosition('');
      setAuthor('Royal Golf Views');
      setAuthorPreview('https://res.cloudinary.com/dvnemzw0z/image/upload/v1705012545/RGV/rgvLoader_yutywg.png');
      setIsLoading(false)
      alert('Testimonial Added Successfully');
    } else {
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
            <span>Testimonial</span>
            <textarea name="excerpt" value={excerpt} onChange={(e) => { setExcerpt(e.target.value) }} required>
            </textarea>
          </div>

          <div>
            <span>Author</span>
            <input type="text" name="author" value={author} onChange={(e) => { setAuthor(e.target.value) }} required />
          </div>

          <div>
            <span>Position</span>
            <input type="text" name="position" value={position} onChange={(e) => { setPosition(e.target.value) }} required />
          </div>

          <div>
            <label htmlFor="chooseAuthorImage">
              <span>Author Image</span>
              <input type="file" id="chooseAuthorImage" style={{ display: 'none' }} onChange={(e) => { setAuthorPreview(e.target.files ? URL.createObjectURL(e.target.files[0]) : '') }} name="authorImage" accept="image/*" />
            </label>
          </div>

          <div style={{ width: '50px', height: '50px', position: 'relative', borderRadius: '50%' }}>
            <Image alt="media" fill sizes="1" style={{ objectFit: 'cover', borderRadius: '50%' }} src={authorPreview} />
          </div>
          <button type="submit">Publish</button>
        </form>
      </main>

      {
        isLoading && <Loader />
      }

    </section>
  );
}

export default AddTestimonial;