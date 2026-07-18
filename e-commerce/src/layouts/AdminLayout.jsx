import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function AdminLayout() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Sidebar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;