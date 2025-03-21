import { useRef } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { addPost, updateNewPostText } from "../../../redux/profile-reducer";

const MyPosts = () => {
  //  чтобы каждая переменная (one, two, three) отслеживалась независимо,
  //  используй отдельные useSelector для каждой части состояния.
  //  Это улучшит производительность, так как компонент будет перерисовываться только при изменении той части состояния, которая действительно используется

  const dispatch = useDispatch()
  
  const newPostText = useSelector((state) => state.profilePage.newPostText)
  const posts = useSelector((state) => state.profilePage.posts)
  const allPosts = posts.map(p => <Post key={p.id} img={p.img} message={p.message} likesCount={p.likesCount} />)

  const handleAddPost  = () => {
    dispatch(addPost())
  }
  const handlePostChange = () => {
    const text = newPostElement.current.value
    dispatch(updateNewPostText(text))
  }


  // const postsElements = posts.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount} />)
  // const Profile = <Post key={userProfile.userId} photos={userProfile.photos} message={userProfile.lookingForAJobDescription} likesCount={userProfile.fullName} />
  // debugger
  const newPostElement = useRef(null)

  return (
    <div className={s.blockPosts}>
      <h3>My posts</h3>
      <div>
        <div>
          <p>{newPostText}</p>
          {/* тут тот принцып useRef - хранение данных между рендерами, что по нашей лгике как раз и вызывает рендер при изменении текущего значения */}
          <textarea onChange={ handlePostChange } ref={newPostElement} value={newPostText} />
        </div>
        <div>
          {/* Callback функция — это функция, которая передается в другую функцию как аргумент и вызывается
           в определенный момент, например, по завершении какой-либо операции или события. */}
          <button onClick={ handleAddPost } >Add post</button>
        </div>
      </div>
      <div className={`${s.posts}`}>
        New posts
        <br></br>
        {allPosts}
       
      </div>
    </div>
  );
};
export default MyPosts;
