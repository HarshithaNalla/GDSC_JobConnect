import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const history = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Logged out");
        history("/signup");
        // Instead of changing the window location directly, consider using a navigation library (e.g., react-router-dom)
        // window.location.href = "/signup";
      })
      .catch((error) => {
        // An error happened.
        alert(error.message);
      });
  };

  return (
    <div>
      hello world how are you; <br />
      <button onClick={logout}>Log out</button>
    </div>
  );
}

