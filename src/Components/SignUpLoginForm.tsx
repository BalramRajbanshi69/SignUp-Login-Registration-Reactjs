import { useState } from "react";

export default function SignUpLoginForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email === "" || password === "") {
      setError("All fields are mandatory");
    } else {
      setMessage("You are successfully logged in");
      setError("");
      // Add your login logic here
    }
  };

  const handleSignUp = () => {
    if (email === "" || password === "" || confirmPassword === "") {
      setError("All fields are mandatory");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setMessage("You are successfully signed up");
      setError("");
      // Add your sign up logic here
    }
  };

  return (
    <>
      <div className="container">
        <div className="form-container">
          <div className="form-toggle">
            <button
              className={isLogin ? "active" : ""}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={!isLogin ? "active" : ""}
              onClick={() => setIsLogin(false)}
            >
              SignUp
            </button>
          </div>
          {isLogin ? (
            <>
              <div className="form">
                <h2>Login Form</h2>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <a href="#">Forgot Password?</a>
                <button onClick={handleLogin}>Login</button>
                <p>
                  Not a Member?{" "}
                  <a href="#" onClick={() => setIsLogin(false)}>
                    Signup now
                  </a>
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="form">
                <h2>Signup Form</h2>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button onClick={handleSignUp}>SignUp</button>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="resulting">
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        {message && <h3>{message}</h3>}
      </div>
    </>
  );
}
