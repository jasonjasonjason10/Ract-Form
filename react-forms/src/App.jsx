import { useState } from "react";
import "./App.css";
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";

function App() {
  const [token, setToken] = useState(null);
  const [authenticatedUsername, setAuthenticatedUsername] = useState(null)

  return (
    <>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} setAuthenticatedUsername={setAuthenticatedUsername} />
      {authenticatedUsername && <p style={{ color: "blue", fontWeight: "bold" }}>Logged in as: {authenticatedUsername}</p>}
    </>
  );
}

export default App;
