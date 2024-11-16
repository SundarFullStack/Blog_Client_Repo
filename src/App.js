import "./App.css";
import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./IndexPage";
import LoginPage from "./Authentication/LoginPage";
import CreatePost from "./Applications/CreatePost";
import RegisterPage from "./Authentication/RegisterPage";
import { UserContextProvider } from "./UserContext";
import PostPage from "./Applications/PostPage";
import EditPost from "./Applications/EditPost";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/register"} element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
