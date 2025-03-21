
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import { addMessage, updateNewMessageText } from "../../redux/dialogs-reducer";
import { useDispatch, useSelector } from "react-redux";

const Dialogs = () => {
  // префикс для урла
  const path = "dialogs"

  const dialogs = useSelector((store) => store.dialogsPage.dialogs)
  const messages = useSelector((store) => store.dialogsPage.messages)
  const newMessageText = useSelector((store) => store.dialogsPage.newMessageText)
  const dispatch = useDispatch()

  const handleAddMessage = () => {
    dispatch(addMessage())
  }

  // textarea - при событии onChange передаёт в функцию событие, через которае мы можем у обьекта вызвавшего его
  // взять значение
  const handleMessageChange = (e) => {
    const body = e.target.value
    dispatch(updateNewMessageText(body))
  }

  let dialogsElements = dialogs.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} ava={dialog.ava} online={dialog.online} path={path} key={dialog.id} />
  ));

  let messagesElements = messages.map((el) => (
    <Message my={el.my} message={el.message} id={el.id} key={el.id} />
  ));

  return (
    <>
    <h4>DialogsF</h4>
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
          <p>{newMessageText}</p>
          <textarea onChange={(e) => handleMessageChange(e)} value={newMessageText} ></textarea>
        </div>
        <div>
          {/* Callback функция — это функция, которая передается в другую функцию как аргумент и вызывается
           в определенный момент, например, по завершении какой-либо операции или события. */}
          <button onClick={ handleAddMessage } >Add post</button>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};
export default Dialogs;
