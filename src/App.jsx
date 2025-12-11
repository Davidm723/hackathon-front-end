import { Route, Routes } from "react-router";

import NavBar from "./components/NavBar/NavBar";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import SignInForm from "./components/SignInForm/SignInForm";

const App = () => {
  return (
    <>
      <NavBar />
      <main className="main-container">
      <Routes>
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="*" element={<h1>Nothing here</h1>} />
      </Routes>
      </main>
    </>
  );
};

export default App;
