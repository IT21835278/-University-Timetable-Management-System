import React from "react";
import AdminNavBar from "../Navbar/AdminNavBar";



const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminNavBar />
      <div style={{ minHeight: "80vh" }} className="--pad">
        {children}
      </div>
    </>
  );
};

export default AdminLayout;