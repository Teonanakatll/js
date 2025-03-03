import Dialogs from "./Dialogs";
import { connect } from "react-redux";

import { addMessage, updateNewMessageText } from "../../redux/dialogs-reducer";
import { useDispatch, useSelector } from "react-redux";

// const DialogsContainer = () => {
//   const dispatch = useDispatch()
//   const state = useSelector((store) => store.dialogsPage)

//   const addMessag = () => {
//     dispatch(addMessage())
//   }

//   // textarea - при событии onChange передаёт в функцию событие, через которае мы можем у обьекта вызвавшего его
//   // взять значение
//   const onMessageChange = (text) => {
//     dispatch(updateNewMessageText(text))
//   }

//   return (
//     <Dialogs addMessage={addMessag} onMessageChange={onMessageChange} state={state} />
//   );
// };


//                                  ПРИМЕР ИСПОЛЬЗОВАНИЯ CONNECT
const mapStateToProps = (state) => {
  return {
    adialogsPage: state.dialogsPage
  }
}
const mapDispatchToProps = () => {
  return {
    onMessageChange: (text) => {
      dispatch(updateNewMessageText(text))
    },
    addMessage: () => {
      dispatch(addMessage())
    }
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
