import { useState } from "react";
import { useLocation } from "react-router-dom";
import { cls } from "../../libs/utils";
import SideTree from "./SideTree";

function SideBar() {
  const [activeTab, setActiveTab] = useState(false);

  const handleTabClick = (tab: boolean) => {
    setActiveTab(() => tab);
  };

  const { pathname } = useLocation();

  if (
    !(
      pathname.includes("projects") ||
      pathname.includes("boards") ||
      pathname.includes("board")
    )
  )
    return null;

  return (
    <div
      id="logo-sidebar"
      className="bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 min-w-[308px] max-w-[308px] min-h-[calc(100vh-3.1rem)]"
      aria-label="Sidebar"
    >
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="grid grid-cols-2 -mb-px">
          <li className="mr-2">
            <button
              className={cls(
                "inline-block p-4 border-b-2 rounded-t-lg",
                activeTab
                  ? "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  : "text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
              )}
              onClick={() => handleTabClick(false)}
            >
              구조
            </button>
          </li>
          <li className="mr-2">
            <button
              className={cls(
                "inline-block p-4 border-b-2 rounded-t-lg",
                activeTab
                  ? "text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
                  : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              )}
              onClick={() => handleTabClick(true)}
            >
              활동
            </button>
          </li>
        </ul>
      </div>
      <div>
        {activeTab ? (
          <div className="truncate">
            프로젝트 별로 누가 언제 어던 프로젝트 수정했는지 (ex. 구글 공유
            드라이브)
          </div>
        ) : (
          <div className="truncate"><SideTree /></div>
        )}
      </div>
    </div>
  );
}

export default SideBar;