import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./components/MainPage";
import SignUp from "./SignUp";
import Loading from "./Loading";
function App() {
  const currentUser = false;
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/signup" />;
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />}></Route>
          
            {/* <Route path="/home" element={<RequireAuth><MainPage /></RequireAuth>}></Route> */}
            <Route path="/home" element={<MainPage />}></Route>
  
          <Route path="/loading" element={<Loading />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
