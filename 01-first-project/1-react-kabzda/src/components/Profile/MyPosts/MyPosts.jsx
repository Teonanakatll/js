import { useRef } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
  //  чтобы каждая переменная (one, two, three) отслеживалась независимо,
  //  используй отдельные useSelector для каждой части состояния.
  //  Это улучшит производительность, так как компонент будет перерисовываться только при изменении той части состояния, которая действительно используется

  const postsElements = props.state.posts.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount} />)
  const newPostText = props.state.newPostText
  const newPostElement = useRef(null)
  

  const onAddPost  = () => {
    props.addPost()
  }

  const PostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }

  return (
    <div className={s.blockPosts}>
      <h3>My posts</h3>
      <div>
        <div>
          <p>{newPostText}</p>
          {/* тут тот принцып useRef - хранение данных между рендерами, что по нашей лгике как раз и вызывает рендер при изменении текущего значения */}
          <textarea onChange={ PostChange } ref={newPostElement} value={newPostText} />
        </div>
        <div>
          {/* Callback функция — это функция, которая передается в другую функцию как аргумент и вызывается
           в определенный момент, например, по завершении какой-либо операции или события. */}
          <button onClick={ onAddPost } >Add post</button>
        </div>
      </div>
      <div className={`${s.posts}`}>
        New posts
        <br></br>
        {postsElements}
      </div>
    </div>
  );
};
export default MyPosts;
