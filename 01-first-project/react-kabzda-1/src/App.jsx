import Header from "./components/Header";
import Navbar from "./components/Nav";
import Profile from "./components/Content";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
};

export default App;
