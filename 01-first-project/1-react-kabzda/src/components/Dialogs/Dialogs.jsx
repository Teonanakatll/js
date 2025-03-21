
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import React from "react";

class Dialogs extends React.Component {
  

  addMess = () => {
    // dispatch(addMessage())
    this.props.addMessage()
  }

  // textarea - при событии onChange передаёт в функцию событие, через которае мы можем у обьекта вызвавшего его
  // взять значение
  MessageChange = (e) => {
    let body = e.target.value
    // dispatch(updateNewMessageText(body))
    this.props.onMessageChange(body)
  }
  render() {

    this.dialogsElements = this.props.state.dialogs.map((dialog) => (
      <DialogItem id={dialog.id} name={dialog.name} ava={dialog.ava} online={dialog.online} key={dialog.id} />
    ));

    this.messagesElements = this.props.state.messages.map((el) => (
      <Message my={el.my} message={el.message} id={el.id} key={el.id} />
    ));

    this.newMessageText = this.props.state.newMessageText

    return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{this.dialogsElements}</div>
        <div className={s.messagesItems}>
          {this.messagesElements}
        </div>
        <div></div>
        <div className={s.text_area}>
          {/* <TextArea onClick={onClick} /> */}
          <div>
          <div>
            <p>{this.newMessageText}</p>
            <textarea onChange={this.MessageChange} value={this.newMessageText} ></textarea>
          </div>
          <div>
            {/* Callback функция — это функция, которая передается в другую функцию как аргумент и вызывается
            в определенный момент, например, по завершении какой-либо операции или события. */}
            <button onClick={ this.addMess } >Add post</button>
          </div>
        </div>
        </div>
      </div>
    );
  }
};
export default Dialogs;
