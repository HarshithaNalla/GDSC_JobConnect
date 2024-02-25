import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./components/MainPage";
import SignUp from "./SignUp";
import Loading from "./Loading";
// import Temp from "./components/Temp"
// import Temp from "./components/Temp";
import Temp from "./components/temp";
function App() {
  const currentUser = false;
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/signup" />;
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
  
            {/* <Route path="/Home" element={<MainPage />}></Route> */}
  
          <Route path="/loading" element={<Loading />}></Route>

          <Route path="/test" element={<Temp />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
