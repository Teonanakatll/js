import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import { addMessage } from "../../redux/dialogs-reducer";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { Textarea } from "../common/FormControl/FormControl";

//   const dispatch = useDispatch();
//   const formik = useFormik({
//     initialValues: {
//       message: "",
//     },
//     onSubmit: (values) => {
//       dispatch(addMessage(values.message));
//       formik.resetForm();
//     },
//   });

//   return (
//     <form onSubmit={ formik.handleSubmit }>
//       <div>
//         <p>{ formik.values.message }</p>
//         <textarea
//           name="message"
//           type="text"
//           placeholder="Введите текст сообщения"
//           onChange={ formik.handleChange }
//           value={ formik.values.message }
//         ></textarea>
//       </div>
//       <div>
//         <button type="submit">Add post</button>
//       </div>
//     </form>
//   );
// };

const Dialogs = () => {
  // префикс для урла
  const path = "dialogs";

  const dialogs = useSelector((store) => store.dialogsPage.dialogs);
  const messages = useSelector((store) => store.dialogsPage.messages);

  const dispatch = useDispatch();
  const handleAddMessage = useCallback((messageText) => {
    dispatch(addMessage(messageText));
  })

  let dialogsElements = dialogs.map((dialog) => (
    <DialogItem
      id={dialog.id}
      name={dialog.name}
      ava={dialog.ava}
      online={dialog.online}
      path={path}
      key={dialog.id}
    />
  ));

  let messagesElements = messages.map((el) => (
    <Message my={el.my} message={el.message} id={el.id} key={el.id} />
  ));

  return (
    <>
      <h4>DialogsF</h4>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>
        <div className={s.messagesItems}>{messagesElements}

        <div className={s.text_area}>
          <Textarea handleSubmit={ handleAddMessage } />
        </div>
        </div>
        <div></div>
      </div>
    </>
  );
};
export default Dialogs;
