import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/DialogsF";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Users from "./components/Users/UsersF";
import Login from "./components/Login/Login";

// npm react-router-dom
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import IsAuthUser from "./hooks/IsAuthUser";
import "./App.css";

const ProtectedLayout = () => (
  <IsAuthUser>

    <Outlet />   {/* Рендерим вложенные маршруты */}
  </IsAuthUser>
)

const App = (props) => {

  return (
     <BrowserRouter >
      <div className="app-wrapper">
          <Header />
          <Navbar onlineList={props.onlineList} />
          <div className={`app-wrapper-content gitem`}>
          <Routes>
            {/* копирует содержимое profilePage, тоесть копирует ссылку на содержание его обьекта и в 
            обьекте который принимает этот пропс при обращении к state будет доступ к его полям.
            РОУТИНГ НИОТЧЕГО НЕ ЗАВИСИТ ЕГО ЗАДАЧА СЛЕДИТЬ ЗА АДРЕСНОЙ СТРОКОЙ!! */}
            <Route element={<ProtectedLayout />}>

              <Route path="/profile/:userId?" element={<Profile />} />
              <Route path="/dialogs/*" element={<Dialogs />} />
              
            </Route>

            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
};

export default App;
