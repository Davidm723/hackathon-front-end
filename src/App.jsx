import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import SignUpForm from "./components/SignUpForm/SignUpForm";

const App = () => {
  return (
    <>
      <NavBar />
      <main className="main-container">
      <Routes>
        <Route path="/sign-up" element={<SignUpForm />} />
      </Routes>
      </main>
    </>
  );
};

export default App;
