import "./form.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import styles from "../Username.module.css";
import { registerUser } from "../../redux/apiCalls/authApiCall";
import swal from "sweetalert";
import "react-toastify/dist/ReactToastify.css";

//toast.configure({
  //toastClassName: 'blue-toast',
//});


const Register = () => {
  const dispatch = useDispatch();
  const { registerMessage } = useSelector((state) => state.auth);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // From Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (username.trim() === "") return toast.error("Username is required");
    if (email.trim() === "") return toast.error("Email is required");
    if (password.trim() === "") return toast.error("Password is required");
    dispatch(registerUser({ username, email, password }));
  };
  const navigate = useNavigate();
  if (registerMessage) {
    swal({
      title: registerMessage,
      icon: "success",
    }).then((isOk) => {
      if (isOk) {
        navigate("/login");
      }
    });
  }
  return (
    <div className="center">
      <section className="form-container">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
          <div className="title">
  <h1 className="form-title">Register</h1>
  <span className="form-subtitle">Happy to join you!</span>
</div>
          </div>
          <div className="form-wrapper">
            <form onSubmit={formSubmitHandler} className="form">
              <div className="form-group">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="form-input"
                />
              </div>
              <button type="submit" className="form-btn">
                Register
              </button>
            </form>
            <div className="form-footer">
  Already have an account? <Link to="/login" style={{ marginLeft: "10px" }}>Login</Link>
</div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
