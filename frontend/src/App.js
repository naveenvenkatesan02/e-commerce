import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import LogoutPage from "./components/LogoutPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import {store} from "./redux/store"

function App() {
  return (
    
    <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/logout" element={<LogoutPage />}></Route>
      </Routes>
      </Provider>
    </BrowserRouter>
   
  );
}

export default App;
