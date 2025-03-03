import dialogsReducer from "./dialogs-reducer"
import profileReduser from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"


const store = {
  _state: {
    profilePage: {
      posts: [
        { di: 1, message: "Hi, how are you?", likesCount: 11 },
        { di: 1, message: "It's my first post", likesCount: 12 },
        { di: 1, message: "What is it man?", likesCount: 5 },
        { di: 1, message: "I'm ready up and runing!", likesCount: 100 },
      ],
      newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
      messages: [
        { di: 1, my: false, message: "Hi" },
        { di: 1, my: true, message: "Zdorova " },
        { di: 1, my: false, message: "How is your it-kamasutra?" },
        { di: 1, my: true, message: "Are you stupid?!" },
      ],
      dialogs: [
        { id: 1, online: false, name: "Dimych" , ava: "https://avatars.dzeninfra.ru/get-zen_doc/119173/pub_5c126713379cb200ad4a97e6_5c126c2b1371c600ab5edfcf/scale_1200"},
        { id: 2, online: true, name: "Andrey" , ava: "https://masterpiecer-images.s3.yandex.net/7300c5d5725411eeabdb6ac6a1596643:upscaled"},
        { id: 3, online: true, name: "Sveta" , ava: "https://avatars.mds.yandex.net/get-shedevrum/16106905/img_010fdadaf14211ef82c4caf2840a7b5b/orig"},
        { id: 4, online: false, name: "Sasha" , ava: "https://avatars.mds.yandex.net/get-shedevrum/10254163/img_0c2ff387f10b11ef805132129414c20c/orig"},
        { id: 5, online: true, name: "Viktoria" , ava: "https://avatars.mds.yandex.net/get-shedevrum/14784426/img_05a06c3fefa411efb7328a1f92f7a718/orig"},
        { id: 5, online: true, name: "Viktor" , ava: "https://avatars.mds.yandex.net/get-shedevrum/14784426/img_348f4048f12811efa4f986c50544bce9/orig"},
        { id: 6, online: false, name: "Valera" , ava: "https://avatars.mds.yandex.net/get-shedevrum/15252934/img_a1b0d02eec6411ef95d2561e34a05e01/orig"},
      ],
      newMessageText: ''
    },
    sideBar: []
  },
  _callSubscriber: () => {
    alert('У меня нет субскрайбера')
  },
  getState() {
    return this._state
  },
  getOnlineList() {
    return this._state.dialogsPage.dialogs.filter(dialog => dialog.online)
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.profilePage = profileReduser(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

    // возможно будет ошибка если экшен не подходит потому что reducer устанавливает значение sideBar по переданным
    // в него данным dialogsPage
    this._state.sideBar = sidebarReducer(this._state.dialogsPage.dialogs, action)

    this._callSubscriber(this)

    if (action.type === ADD_POST) {

      const newPost = {
        id: 1,
        message: this._state.profilePage.newPostText,
        likesCount: 5
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this)

    } else if (action.type === UPDATE_NEW_POST_TEXT) {

      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this)

    } else if (action.type === ADD_MESSAGE) {

      const newMessage = {
        id: 1,
        my: true,
        message: this._state.dialogsPage.newMessageText
      }
      this._state.dialogsPage.messages.push(newMessage)
      this._state.dialogsPage.newMessageText = ''
      this._callSubscriber(this)

    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {

      this._state.dialogsPage.newMessageText = action.body
      this._callSubscriber(this)

    } else if (action.type === GET_ONLINE_USERS) {

      this._state.sideBar = this._state.dialogsPage.dialogs.filter(dialog => dialog.online)
      return this._state.sideBar
    }
  }
}


export default store
window.newState = store