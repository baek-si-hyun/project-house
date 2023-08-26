import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoginID from "./pages/member/LoginID";
import LoginPW from "./pages/member/LoginPW";
import JoinID from "./pages/member/JoinID";
import JoinName from "./pages/member/JoinName";
import JoinPW from "./pages/member/JoinPW";

// const Header = lazy(() => import("./components/header/Header"));

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/login-id" element={<LoginID />}></Route>
          <Route path="/login-pw" element={<LoginPW />}></Route>
          <Route path="/join-id" element={<JoinID />}></Route>
          <Route path="/join-name" element={<JoinName />}></Route>
          <Route path="/join-pw" element={<JoinPW />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default Router;
