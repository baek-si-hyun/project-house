import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoginID from "./pages/member/LoginID";
import LoginPW from "./pages/member/LoginPW";
import JoinID from "./pages/member/JoinID";
import JoinName from "./pages/member/JoinName";
import JoinPW from "./pages/member/JoinPW";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/profile/Profile";
<<<<<<< HEAD
import SideBar from "./components/SideBar";
import Projects from "./pages/projects/Projects";
=======
>>>>>>> 2035c02e5d4dcdf8c2d8a8ac76bb6a94c0df3ea7

// const Header = lazy(() => import("./components/header/Header"));

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
<<<<<<< HEAD
      <div className="flex">
        <SideBar />
        <Suspense fallback={<></>}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="login-id" element={<LoginID />}></Route>
            <Route path="login-pw" element={<LoginPW />}></Route>
            <Route path="join-id" element={<JoinID />}></Route>
            <Route path="join-name" element={<JoinName />}></Route>
            <Route path="join-pw" element={<JoinPW />}></Route>
          </Routes>
        </Suspense>
      </div>
=======
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/login-id" element={<LoginID />}></Route>
          <Route path="/login-pw" element={<LoginPW />}></Route>
          <Route path="/join-id" element={<JoinID />}></Route>
          <Route path="/join-name" element={<JoinName />}></Route>
          <Route path="/join-pw" element={<JoinPW />}></Route>
        </Routes>
      </Suspense>
>>>>>>> 2035c02e5d4dcdf8c2d8a8ac76bb6a94c0df3ea7
    </BrowserRouter>
  );
}
export default Router;
