import { useContext, useState, useEffect } from "react";
import { Route, Routes } from "react-router";

import NavBar from "./components/NavBar/NavBar";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import SignInForm from "./components/SignInForm/SignInForm";
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import PlayList from "./components/PlayList/PlayList";

import { UserContext } from "./contexts/UserContext";

import * as songsService from "./services/songsService";

const App = () => {
  const { user } = useContext(UserContext);

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchAllSongs = async () => {
      const songsData = await songsService.index();
      setSongs(songsData);
    };
    if (user) fetchAllSongs();
  }, [user]);

  return (
    <>
      <NavBar />
      <main className="main-container">
        <Routes>
          <Route path="/" element={user ? <Dashboard /> : <Landing />} />
          {user ? (
            <>
              <Route path="/songs" element={<PlayList songs={songs} />} />
            </>
          ) : (
            <>
              <Route path="/sign-up" element={<SignUpForm />} />
              <Route path="/sign-in" element={<SignInForm />} />
            </>
          )}
          <Route path="*" element={<h1>Nothing here</h1>} />
        </Routes>
      </main>
    </>
  );
};

export default App;
