import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div>
      <div>
        <img className={s.imgProfile}
          src="https://cdn.tripster.ru/thumbs2/2a9a60e0-fcdb-11ed-bb0b-a25e06629b62.1220x600.jpeg"
          alt=""
        />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};
export default Profile