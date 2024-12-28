import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="flex h-full w-full flex-col bg-white">
        <div className="h-[5rem] w-full bg-background"></div>
        <div className="flex h-[calc(100%-5rem)] w-full bg-yellow-200">
          {/* ---> Sidebar  */}
          <aside className="h-full w-[5rem] bg-background">
            <Sidebar />
          </aside>
          {/* ---> Main Content  */}
          <main className="h-full w-full overflow-y-auto bg-gradient-to-br from-deepBlack to-[#02071d] p-5">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
