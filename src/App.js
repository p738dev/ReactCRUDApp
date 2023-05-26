import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import EditUser from "./components/EditUser";
import AddUser from "./components/AddUser";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Users />}
        />
        <Route
          path="/add"
          element={<AddUser />}
        />
        <Route
          path="/edit/:id"
          element={<EditUser />}
        />
        <Route
          path="/delete/:id"
          element={<Users />}
        />
      </Routes>
    </>
  );
};

export default App;
