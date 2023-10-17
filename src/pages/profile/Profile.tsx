import { Outlet } from "react-router-dom";
import ProfileSidebar from "./common/sidebar/ProfileSidebar";

function Profile() {
  return (
    <div className="flex justify-center w-screen pt-12">
      <ProfileSidebar />
      <div className="w-[45rem]">
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;