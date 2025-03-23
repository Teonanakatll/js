import s from "./ProfileInfo.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProfile, getStatus } from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

import { useNavigate, useLocation, useMatch, useSearchParams } from 'react-router-dom';

const ProfileInfo = () => {

  // const navigate = useNavigate();
  // const location = useLocation();
  // const match = useMatch('/profile/:userId');
  // const [searchParams, setSearchParams] = useSearchParams();

  // Это хук из библиотеки React Router DOM, который позволяет извлекать параметры из URL
  let { userId } = useParams()
  const profile = useSelector((state) => state.profilePage.profile)

  // console.log('status', status);
  
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    console.log("userId", userId);
    dispatch(getProfile(userId))
    dispatch(getStatus(userId))
    console.log("userId", userId);
    
    // dispatch(getStatus(userId))
  }, [userId])
  
  // debugger
  return (
    !profile ? <Preloader /> :
    <div>
      {/* <img
        className={s.imgHeader}
        src={"https://cdn.tripster.ru/thumbs2/2a9a60e0-fcdb-11ed-bb0b-a25e06629b62.1220x600.jpeg"}
        alt=""
      /> */}
      <div className={s.profile} >
        <img className={s.imgProfile} src={profile.photos.large} alt="" />
        <div className={s.profileWrap}>
          <div className={s.wrap}>
            <div className={s.label}>Имя:</div>
            <div className={s.info}>{profile.fullName}</div>
          </div>
          <div className={s.wrap}>
            <div className={s.label}>О себе:</div>
            <div className={s.info}>{profile.aboutMe}</div>
          </div>
          <div className={s.wrap}>
            <div className={s.label}>Ищу работу:</div>
            <div className={s.info}>{profile.lookingForAJobDescription}</div>
          </div>
          <div className={s.wrap}>
            <div className={s.label}>Facebook:</div>
            <div className={s.info}>{profile.contacts.facebook}</div>
          </div>
          <div className={s.wrap}>
            <div className={s.label}>Vk:</div>
            <div className={s.info}>{profile.contacts.vk}</div>
          </div>
          <div className={s.wrap}>
            <div className={s.label}>Twitter:</div>
            <div className={s.info}>{profile.contacts.twitter}</div>
          </div>
          
          
          
        </div>
      </div>
      <ProfileStatus />
    </div>
  );
};
export default ProfileInfo;
