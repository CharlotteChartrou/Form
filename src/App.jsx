import { useState } from "react";
import "./App.css";

import Footer from "./components/Footer";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validpassword, setValidpassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showResult, setShowResult] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowErrorMessage(false);
    if (password === validpassword) {
    } else {
      setShowErrorMessage(true);
    }
  };
  return (
    <>
      <main>
        <section className="form">
          <h1>Create Account</h1>
          <form onSubmit={handleSubmit}>
            <span>Name</span>
            <input
              type="text"
              placeholder="Jean Dupont"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <span>Email</span>
            <input
              type="email"
              placeholder="jean.dupont@gmail.com"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <span>Password</span>
            <input
              value={password}
              type="password"
              placeholder="lErEaCtEuR2020"
              name="password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <span>Confirm your password</span>
            <input
              value={validpassword}
              type="password"
              placeholder="lErEaCtEuR2020"
              name="validpassword"
              onChange={(event) => setValidpassword(event.target.value)}
            />
            <button type="submit">Register</button>
            {showErrorMessage === true && (
              <span style={{ color: "red" }}>
                Les deux mot de passe ne sont pas identiques
              </span>
            )}
            {showErrorMessage === false && (
              <div className="results">
                <h1>Results</h1>

                <span>Name: {setUsername}</span>
                <span>Email: {setEmail}</span>
                <span>Password: {setPassword}</span>
                <button className="back-button">Edit Your information</button>
              </div>
            )}
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
