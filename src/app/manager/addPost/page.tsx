import ManagerSidebar from "@/components/ManagerSidebar/ManagerSidebar";
import styles from './addPost.module.css';
import { doc, setDoc } from "firebase/firestore";
import { fireStoreDB } from "@/firebase/base";
import { redirect } from "next/navigation";

const AddPost = () => {

  const createBlog = async (data: FormData) => {
    "use server"

    const title = data.get('title')?.valueOf().toString();

    const media = data.get('media')?.valueOf();

    console.log(media);

    // await setDoc(doc(fireStoreDB, 'Posts/' + title), {
    //   'title': title
    // }).then(() => {
    //   redirect('/manager');
    // })

  }

  return (
    <section className="managerPage">
      <ManagerSidebar />

      <main>
        <header>
          <strong>Add Post</strong>
        </header>

        <form action={createBlog} className="managerForm">
          <div>
            <span>Title</span>
            <input type="text" name="title" required />
          </div>
          <div>
            <span>Media</span>
            <input type="file" name="media" accept="image/*" required />
          </div>
          <button type="submit">Publish</button>
        </form>
      </main>
    </section>
  );
}

export default AddPost;