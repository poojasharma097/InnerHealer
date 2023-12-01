import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const {user, setUser} = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", { email, password });
      const { data } = response;
  
      if (data === "password not ok") {
        alert("Login failed because of incorrect password. Redirecting to login page again.");
        window.location.href = '/login';
      } else if (data === "not found") {
        alert("User not found. Please register.");
        window.location.href = '/register';
      } else {
        setUser(data);
        console.log(user);
        alert("Login successful.");
        setRedirect(true);
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };
  

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const {data} = await axios.post("/login", {email, password }).then(() => {
  //       setUser(data);
  //       console.log(user);
  //     alert("Login successful.");
  //     setRedirect(true);
  //   })
  // };
  
  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div className="mt-4 grow items-center flex justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          ></input>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></input>
          <button className="primary" type="submit">
            Login
          </button>
          <div className="py-2 text-center text-gray-500">
            Don&rsquo;t have an account?{" "}
            <Link className="text-black underline" to={"/register"}>
              Register now!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}