import s from "./Post.module.css";

const Post = (props) => {
  // debugger
  return (
    <div className={`${s.item}`}>
      <img
      src={props.img}
        alt=""
      />
      {props.message} likes: {props.likesCount}
      <div><span>Like</span></div>
    </div>
  );
};
export default Post;
