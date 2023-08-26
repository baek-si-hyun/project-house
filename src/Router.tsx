import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoginID from "./pages/member/LoginID";
import LoginPW from "./pages/member/LoginPW";

// const Header = lazy(() => import("./components/header/Header"));

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/login-id" element={<LoginID />}></Route>
          <Route path="/login-pw" element={<LoginPW />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default Router;
