import MyPosts from "./MyPosts";

import { useDispatch, useSelector } from "react-redux";
import { addPost, updateNewPostText } from "../../../redux/profile-reducer";


const MyPostsContainer = () => {
  const dispatch = useDispatch()
  const state = useSelector((store) => store.profilePage)

  const onAddPost  = () => {
    dispatch(addPost())
  }

  const onPostChange = (text) => {
    dispatch(updateNewPostText(text))
  }

  return (
    <MyPosts updateNewPostText={onPostChange} addPost={onAddPost} state={state} />
  );
};
export default MyPostsContainer;
