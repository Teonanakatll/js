import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const mes = {message: `It's my first post`}
  return (
    <div>
      My posts
      <div>
        <textarea name="" id="#"></textarea>
        <button>Add post</button>
      </div>
      <div className={`${ s.post}`}>
        New posts
        <Post message='Hi, how are you?' likesCount='25' />
        <Post {...mes} likesCount='0' />
      </div>
    </div>
  );
};
export default MyPosts;
