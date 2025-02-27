
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import TextArea from "../TextArea/TextArea";
import { useRef } from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/state";

const Dialogs = (props) => {
    const newMessageElement = useRef(null)

  let dialogsElements = props.state.dialogs.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} ava={dialog.ava} online={dialog.online} />
  ));

  let messagesElements = props.state.messages.map((el) => (
    <Message my={el.my} message={el.message} id={el.id} />
  ));

  const addMessage = () => {
    props.dispatch(addMessageActionCreator())
  }

  // textarea - при событии onChange передаёт в функцию событие, через которае мы можем у обьекта вызвавшего его
  // взять значение
  const onMessageChange = (e) => {
    
    let body = e.target.value
    props.dispatch(updateNewMessageTextActionCreator(body))
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messagesItems}>

        {messagesElements}
      </div>
      <div></div>
      <div className={s.text_area}>
        {/* <TextArea onClick={onClick} /> */}
        <div>
        <div>
          <p>{props.state.newMessageText}</p>
          <textarea onChange={onMessageChange} value={props.state.newMessageText} ></textarea>
        </div>
        <div>
          {/* Callback функция — это функция, которая передается в другую функцию как аргумент и вызывается
           в определенный момент, например, по завершении какой-либо операции или события. */}
          <button onClick={ addMessage } >Add post</button>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Dialogs;
