import s from "./MyPosts.module.css"; 
import Post from "./Post/Post";  
import { useDispatch, useSelector } from "react-redux"; 
import { useCallback } from "react";
import { addPost } from "../../../redux/profile-reducer";
import { Textarea } from "../../common/FormControl/FormControl";


const MyPosts = () => {
  const dispatch = useDispatch();
  const handleAddPost = useCallback((postText) => {
    dispatch(addPost(postText))
  }, [dispatch]);

  const posts = useSelector((state) => state.profilePage.posts);
  const allPosts = posts.map((p) => (
    <Post
      key={p.id}
      img={p.img}
      message={p.message}
      likesCount={p.likesCount}
    />
  ));

  return (
    <div className={s.blockPosts}>
      <h3>My posts</h3>
      <Textarea handleSubmit={ handleAddPost } />

      <div className={`${s.posts}`}>
        New posts
        <br></br>
        {allPosts}
      </div>
    </div>
  );
};
export default MyPosts;
